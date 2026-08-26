"use client";

import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const easing = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 0,
              y: 10,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.38,
        ease: easing,
      }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-[#14131b]">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.035]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/60 via-transparent to-transparent opacity-70"
        />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-[#0b0b0f]/50 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        <span className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-white/15 bg-[#0b0b0f]/50 font-mono text-xs text-zinc-300 backdrop-blur-md">
          0{index + 1}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.04em] text-white">
              {project.title}
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
              {project.description}
            </p>
          </div>

          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 group-hover:border-violet-200/30 group-hover:bg-violet-200/10 group-hover:text-violet-100">
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/8 pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
            Case study preview
          </p>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition-colors hover:text-white"
              aria-label={`View ${project.title} source code`}
            >
              <Code2 size={16} strokeWidth={1.8} />
              View code
            </a>
          ) : (
            <span className="text-sm text-zinc-600">Private work</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}