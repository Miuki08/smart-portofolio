"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CharacterArt } from "./character-art";

const easing = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.65,
    ease: easing,
  };

  return (
    <section
      id="top"
      className="relative isolate overflow-x-clip"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.035)_50%,transparent_100%)] opacity-50"
      />

      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.85fr)] lg:gap-10 lg:px-8 lg:py-20 xl:gap-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={containerVariants}
          className="relative z-10 min-w-0 max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            transition={transition}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-violet-300 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-violet-200" />
            </span>

            <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-zinc-400">
              Independent digital maker
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            transition={transition}
            className="text-sm font-medium uppercase tracking-[0.26em] text-violet-200/65"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            transition={transition}
            className="mt-4 max-w-4xl text-[clamp(4rem,10vw,8.75rem)] font-semibold leading-[0.82] tracking-[-0.085em] text-white"
          >
            Reina
            <br />
            <span className="text-violet-200">Fujimiya</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            transition={transition}
            className="mt-8 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl"
          >
            A junior developer and video editor exploring thoughtful digital
            experiences through code, design, and creativity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={transition}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-200 px-5 py-3 text-sm font-semibold text-zinc-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(196,167,255,0.23)] active:translate-y-0"
            >
              Explore selected work
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.025] px-5 py-3 text-sm font-medium text-zinc-200 transition duration-300 ease-out hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
            >
              More about me
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            transition={transition}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6"
          >
            <p className="text-sm text-zinc-500">
                Focused on{" "}
                <span className="font-medium text-zinc-300">
                Laravel · APIs · Fiber · Next.js
                </span>
            </p>

            <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-violet-200/70 sm:block"
            />

            <p className="text-sm text-zinc-500">
                Open to{" "}
                <span className="font-medium text-zinc-300">
                meaningful collaborations
                </span>
            </p>
            </motion.div>
        </motion.div>

        <div className="relative z-10 min-w-0 w-full lg:justify-self-end">
          <CharacterArt />
        </div>
      </div>
    </section>
  );
}