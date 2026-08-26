"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/config/site";

const easing = [0.16, 1, 0.3, 1] as const;

export function CharacterArt() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 28,
              scale: 0.96,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: easing,
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              transition: {
                duration: 0.35,
                ease: easing,
              },
            }
      }
      className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem] lg:ml-auto lg:mr-0 lg:max-w-[25rem] xl:max-w-[27rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[10%] bottom-[5%] top-[16%] rounded-[2.5rem] bg-violet-400/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-5 top-[14%] size-24 rounded-full border border-violet-200/25 bg-violet-300/10 blur-[1px]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-3 left-[4%] size-16 rounded-full border border-white/10 bg-white/5"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-b from-white/10 to-white/[0.02] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#15121d]">
          <Image
            src={siteConfig.characterImage}
            alt={`${siteConfig.name} character artwork`}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 496px"
            className="object-cover object-center"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/72 via-transparent to-violet-300/10"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          />
        </div>

        <div className="absolute inset-x-7 bottom-6 flex items-end justify-between">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-violet-100/70">
              Digital maker
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              Reina Fujimiya
            </p>
          </div>

          <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-[#0b0b0f]/45 font-mono text-xs font-semibold tracking-[0.14em] text-white backdrop-blur-md">
            RF
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-5 right-7 h-px w-24 bg-gradient-to-r from-transparent via-violet-200 to-transparent opacity-80"
      />
    </motion.div>
  );
}