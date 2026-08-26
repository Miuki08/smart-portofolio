"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects } from "@/content/projects";
import type { ProjectCategory } from "@/types/project";
import { ProjectCard } from "./project-card";

const easing = [0.16, 1, 0.3, 1] as const;

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
] as const;

type CategoryFilter = "All" | ProjectCategory;

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.55,
    ease: easing,
  };

  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="relative border-t border-white/8"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={revealVariants}
            transition={transition}
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-200/65">
                Selected work
              </p>

              <h2
                id="projects-heading"
                className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl"
              >
                Projects built with purpose.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
                A curated selection of projects that explore web systems,
                mobile experiences, and practical digital solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 lg:self-auto">
              <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-violet-200">
                <FolderKanban size={17} strokeWidth={1.7} />
              </span>

              <div>
                <p className="text-xs text-zinc-500">Featured projects</p>
                <p className="text-sm font-medium text-zinc-200">
                  {projects.length.toString().padStart(2, "0")} selected works
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={revealVariants}
            transition={transition}
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project category filters"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-zinc-950"
                      : "border border-white/10 bg-white/[0.025] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-project-filter"
                      className="absolute inset-0 rounded-full bg-violet-200"
                      transition={{ duration: 0.3, ease: easing }}
                    />
                  )}

                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            variants={revealVariants}
            transition={transition}
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={revealVariants}
            transition={transition}
            className="mt-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-7 sm:flex-row sm:items-center"
          >
            <p className="max-w-xl text-sm leading-6 text-zinc-500">
              Some work is private or developed within collaborative
              environments, so source code and detailed case studies may not be
              publicly available.
            </p>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-violet-200 transition-colors hover:text-white"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}