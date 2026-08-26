"use client";

import {
  ArrowUpRight,
  Clapperboard,
  Code2,
  Database,
  Layers3,
  ServerCog,
  Sparkles,
} from "lucide-react";

import { motion, useReducedMotion } from "motion/react";
import { aboutContent } from "@/content/about";

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

const capabilityIcons = {
  "Full-stack web development": Layers3,
  "Backend systems & REST APIs": ServerCog,
  "Frontend interfaces & UI implementation": Code2,
  "Database design & integration": Database,
  "Digital content production": Clapperboard,
} as const;

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.55,
    ease: easing,
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-white/8"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:gap-20"
        >
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <motion.p
              variants={revealVariants}
              transition={transition}
              className="text-xs font-medium uppercase tracking-[0.28em] text-violet-200/65"
            >
              {aboutContent.eyebrow}
            </motion.p>

            <motion.h2
              id="about-heading"
              variants={revealVariants}
              transition={transition}
              className="mt-5 max-w-md text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl"
            >
              {aboutContent.heading}
            </motion.h2>

            <motion.p
              variants={revealVariants}
              transition={transition}
              className="mt-7 max-w-md text-base leading-7 text-zinc-400"
            >
              {aboutContent.summary}
            </motion.p>

            <motion.a
              variants={revealVariants}
              transition={transition}
              href="#work"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition-colors hover:text-white"
            >
              Explore selected work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>

          <div className="space-y-5">
            <motion.div
              variants={revealVariants}
              transition={transition}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025]"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
                <p className="text-sm font-medium text-zinc-100">
                  What I bring to the table
                </p>

                <span className="font-mono text-xs text-violet-200/70">
                  01—05
                </span>
              </div>

              <div className="grid divide-y divide-white/8">
                {aboutContent.capabilities.map((capability, index) => {
                  const Icon = capabilityIcons[capability];

                  return (
                    <div
                      key={capability}
                      className="group flex items-center gap-4 px-6 py-4 transition-colors duration-300 hover:bg-white/[0.035]"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.035] text-violet-200 transition duration-300 group-hover:border-violet-200/30 group-hover:bg-violet-200/10">
                        <Icon size={17} strokeWidth={1.75} />
                      </span>

                      <p className="text-sm text-zinc-300">{capability}</p>

                      <span className="ml-auto font-mono text-xs text-zinc-600">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={revealVariants}
              transition={transition}
              className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-violet-300/[0.11] via-white/[0.03] to-transparent p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-violet-200/65">
                    Current mindset
                  </p>

                  <p className="mt-3 max-w-lg text-xl font-medium leading-8 tracking-[-0.025em] text-zinc-100">
                    Learning continuously, building intentionally, and refining
                    every detail that matters.
                  </p>
                </div>

                <span
                aria-hidden="true"
                className="hidden size-12 shrink-0 place-items-center rounded-full border border-violet-200/25 bg-violet-200/10 text-violet-100/80 sm:grid"
                >
                <Sparkles size={19} strokeWidth={1.5} />
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={revealVariants}
              transition={transition}
              className="rounded-[1.75rem] border border-white/10 bg-[#12121a]/70 p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                    Journey so far
                  </p>

                  <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] text-white">
                    A short timeline
                  </h3>
                </div>

                <span className="font-mono text-xs text-violet-200/70">
                  2021—NOW
                </span>
              </div>

              <div className="relative mt-8 space-y-7 before:absolute before:bottom-2 before:left-[0.45rem] before:top-2 before:w-px before:bg-white/10">
                {aboutContent.timeline.map((item, index) => (
                  <div key={item.period} className="relative pl-8">
                    <span className="absolute left-0 top-1.5 size-4 rounded-full border-[3px] border-[#12121a] bg-violet-200 shadow-[0_0_0_1px_rgba(196,167,255,0.35)]" />

                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <h4 className="text-sm font-medium text-zinc-200">
                        {item.title}
                      </h4>

                      <p className="font-mono text-xs text-violet-200/70">
                        {item.period}
                      </p>
                    </div>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>

                    {index < aboutContent.timeline.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-6 block h-px w-full bg-white/6"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}