"use client";

import {
  Braces,
  Clapperboard,
  Code2,
  GitBranch,
  Layers3,
  TerminalSquare,
  UsersRound,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  skillGroups,
  skillsContent,
  softSkills,
} from "@/content/skills";

const easing = [0.16, 1, 0.3, 1] as const;

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

const groupIcon = {
  Languages: Code2,
  Frameworks: Layers3,
  Tools: TerminalSquare,
} as const;

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.55,
    ease: easing,
  };

  const languages = skillGroups.find((group) => group.title === "Languages");
  const frameworks = skillGroups.find((group) => group.title === "Frameworks");
  const tools = skillGroups.find((group) => group.title === "Tools");

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-t border-white/8"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.14 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={revealVariants}
            transition={transition}
            className="max-w-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-200/65">
              {skillsContent.eyebrow}
            </p>

            <h2
              id="skills-heading"
              className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl"
            >
              {skillsContent.heading}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
              {skillsContent.description}
            </p>
          </motion.div>

          <motion.div
            variants={revealVariants}
            transition={transition}
            className="mt-12 grid gap-4 lg:grid-cols-12"
          >
            <div className="grid gap-4 lg:col-span-8">
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, scale: 1.005 }
                }
                transition={{ duration: 0.25, ease: easing }}
                className="relative overflow-hidden rounded-[1.75rem] border border-violet-200/20 bg-gradient-to-br from-violet-300/[0.14] via-[#171421] to-[#111118] p-6 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-56 rounded-full bg-violet-300/15 blur-3xl"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-100/65">
                        Core stack
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                        Building from logic
                        <br />
                        to interface.
                      </h3>
                    </div>

                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-violet-200/25 bg-violet-200/10 text-violet-100">
                      <Braces size={20} strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    {[
                      "PHP",
                      "TypeScript",
                      "MySQL",
                      "Laravel",
                      "Next.js",
                      "REST APIs",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 text-sm text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {[languages, frameworks].map((group) => {
                  if (!group) {
                    return null;
                  }

                  const Icon = groupIcon[group.title];

                  return (
                    <motion.div
                      key={group.title}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { y: -4, transition: { duration: 0.25, ease: easing } }
                      }
                      className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6"
                    >
                      <div className="flex items-center justify-between">
                        <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-violet-200">
                          <Icon size={18} strokeWidth={1.7} />
                        </span>

                        <span className="font-mono text-xs text-zinc-600">
                          {String(group.items.length).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-white">
                        {group.title}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-white/[0.045] px-3 py-1.5 text-xs text-zinc-400 transition-colors duration-300 hover:bg-violet-200/10 hover:text-violet-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-4">
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, scale: 1.005 }
                }
                transition={{ duration: 0.25, ease: easing }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12121a]/80 p-6"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 size-40 rounded-full bg-pink-300/10 blur-3xl"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-violet-200">
                      <Clapperboard size={18} strokeWidth={1.7} />
                    </span>

                    <span className="font-mono text-xs text-zinc-600">
                      CREATIVE
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    Beyond code
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white">
                    Visual storytelling
                    <br />
                    and product thinking.
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-zinc-500">
                    Bringing a creative perspective to digital products,
                    content, and user experiences.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {["Video editing", "Figma", "Blender", "CapCut"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, scale: 1.005 }
                }
                transition={{ duration: 0.25, ease: easing }}
                className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-violet-200">
                    <UsersRound size={18} strokeWidth={1.7} />
                  </span>

                  <span className="font-mono text-xs text-zinc-600">
                    HUMAN
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium tracking-[-0.03em] text-white">
                  How I work with others
                </h3>

                <div className="mt-5 grid gap-2">
                  {softSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3 transition-colors duration-300 hover:border-violet-200/20 hover:bg-violet-200/[0.04]"
                      title={skill.description}
                    >
                      <p className="text-sm text-zinc-300">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {tools && (
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, scale: 1.002 }
                }
                transition={{ duration: 0.25, ease: easing }}
                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 lg:col-span-12 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-violet-200/55 to-transparent"
                />

                <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-sm">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-violet-200">
                        <GitBranch size={18} strokeWidth={1.7} />
                      </span>

                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                        Tools & workflow
                      </p>
                    </div>

                    <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white">
                      The supporting cast.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      Tools that support planning, building, testing, and
                      refining each project.
                    </p>
                  </div>

                  <div className="flex max-w-2xl flex-wrap gap-2 lg:justify-end">
                    {tools.items.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400 transition duration-300 hover:border-violet-200/25 hover:bg-violet-200/[0.08] hover:text-violet-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}