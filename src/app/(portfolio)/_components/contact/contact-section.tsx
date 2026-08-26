"use client";

import {
  ArrowUpRight,
  Code2,
  Gamepad2,
  Mail,
  Play,
  Send,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/config/site";

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

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Code2,
  },
  {
    label: "Twitch",
    href: siteConfig.links.twitch,
    icon: Gamepad2,
  },
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    icon: Send,
  },
  {
    label: "YouTube",
    href: siteConfig.links.youtube,
    icon: Play,
  },
] as const;

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.6,
    ease: easing,
  };

  const activeSocialLinks = socialLinks.filter((link) => Boolean(link.href));

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-white/8"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="relative overflow-hidden rounded-[2rem] border border-violet-200/20 bg-gradient-to-br from-violet-300/[0.16] via-[#171421] to-[#101015] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full bg-violet-200/18 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 left-[15%] size-72 rounded-full bg-fuchsia-300/10 blur-3xl"
          />

          <motion.div
            variants={revealVariants}
            transition={transition}
            className="relative z-10 max-w-3xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-100/70">
              Contact
            </p>

            <h2
              id="contact-heading"
              className="mt-5 text-4xl font-semibold leading-[0.94] tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s build something
              <br />
              worth remembering.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300/75 sm:text-lg sm:leading-8">
              Have an idea, a technical challenge, or a creative project in
              mind? I&apos;m always open to meaningful conversations and
              thoughtful collaborations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.links.github || "#"}
                target={siteConfig.links.github ? "_blank" : undefined}
                rel={siteConfig.links.github ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-full bg-violet-100 px-5 py-3 text-sm font-semibold text-zinc-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_36px_rgba(196,167,255,0.28)] active:translate-y-0"
              >
                Explore my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="mailto:miumiuki98@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.09]"
              >
                <Mail
                  size={16}
                  className="text-violet-100 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Send an email
              </a>
            </div>
          </motion.div>

          {activeSocialLinks.length > 0 && (
            <motion.div
              variants={revealVariants}
              transition={transition}
              className="relative z-10 mt-14 border-t border-white/10 pt-7"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-400">
                    Find me online
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Follow the work, process, and things I&apos;m exploring.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeSocialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit Reina Fujimiya on ${social.label}`}
                        className="group inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-violet-100/45 hover:bg-violet-100/10 hover:text-violet-50"
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.footer
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariants}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: easing,
          }}
          className="flex flex-col gap-5 border-t border-white/8 py-8 sm:mt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}. Built with care.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUpRight
                size={15}
                className="rotate-[-45deg] transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-violet-200/70"
            />

            <span className="font-mono text-xs text-zinc-600">RF / 2026</span>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}