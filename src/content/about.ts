import type { TimelineItem } from "@/types/portfolio";

export const aboutContent = {
  eyebrow: "About me",
  heading: "Building with logic, shaped by creativity.",

  summary:
    "A junior developer who transitioned from digital content production into web application development, combining technical curiosity with creative thinking.",

    capabilities: [
    "Full-stack web development",
    "Backend systems & REST APIs",
    "Frontend interfaces & UI implementation",
    "Database design & integration",
    "Digital content production",
    ],

  timeline: [
    {
      period: "2021–2023",
      title: "Video Editor",
      description:
        "Created and edited digital content for online video platforms.",
    },
    {
      period: "2023–Present",
      title: "Software Developer",
      description:
        "Learning and building web applications with Laravel, MySQL, REST APIs, and modern frontend technologies.",
    },
    {
      period: "Aug 2025–Feb 2026",
      title: "Junior Developer Intern",
      description:
        "Contributed to the development of an omnichannel CRM and public-information portals using Laravel and Phalcon.",
    },
  ] satisfies readonly TimelineItem[],
} as const;