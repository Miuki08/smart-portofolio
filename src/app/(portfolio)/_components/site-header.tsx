"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const easing = [0.16, 1, 0.3, 1] as const;

const mobileMenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.28,
      ease: easing,
      delayChildren: 0.06,
      staggerChildren: 0.04,
    },
  },
};

const mobileItemVariants = {
  closed: {
    opacity: 0,
    y: -6,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: easing,
    },
  },
};

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const headerInitial = shouldReduceMotion
    ? false
    : { opacity: 0, y: -12 };

  const headerAnimate = {
    opacity: 1,
    y: 0,
  };

  return (
    <motion.header
      initial={headerInitial}
      animate={headerAnimate}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: easing,
      }}
      className="sticky top-0 z-50 border-b border-white/8 bg-[#0b0b0f]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#top"
          className="group inline-flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-violet-300/35 bg-violet-300/10 shadow-[0_0_0_4px_rgba(196,167,255,0.05)] transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-violet-200/80 group-hover:shadow-[0_0_0_5px_rgba(196,167,255,0.1),0_0_24px_rgba(169,120,255,0.22)]">
            <Image
              src={siteConfig.characterImage}
              alt={`${siteConfig.name} character artwork`}
              fill
              loading="eager"
              sizes="36px"
              className="object-cover object-center transition duration-500 ease-out group-hover:scale-110"
            />
          </span>

          <span className="hidden text-sm font-medium tracking-tight text-zinc-200 transition-colors duration-300 group-hover:text-white sm:block">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-violet-200 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-violet-300/35 bg-violet-300/10 px-4 py-2 text-sm font-medium text-violet-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-violet-200/60 hover:bg-violet-300/20 hover:text-white hover:shadow-[0_10px_28px_rgba(169,120,255,0.16)] md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-grid size-10 place-items-center rounded-full border border-white/10 text-zinc-200 transition duration-300 ease-out hover:border-white/25 hover:bg-white/5 active:scale-95 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.2,
              ease: easing,
            }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="overflow-hidden border-t border-white/8 bg-[#0b0b0f]/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {siteConfig.navigation.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={mobileItemVariants}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                variants={mobileItemVariants}
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-violet-300 px-3 py-3 text-center text-sm font-medium text-zinc-950 transition duration-200 hover:bg-violet-200"
              >
                Let&apos;s talk
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}