import type { SkillGroup, SoftSkill } from "@/types/portfolio";

export const skillsContent = {
  eyebrow: "Skills & toolkit",
  heading: "Tools I use to turn ideas into working products.",
  description:
    "A practical stack shaped by web development, backend systems, interface work, and creative production.",
} as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Core Web Technologies",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Go",
      "MySQL",
      "C#",
      "Java",
    ],
  },
  {
    title: "Frameworks",
    items: [
      "Laravel",
      "Phalcon",
      "Fiber",
      "Bootstrap",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Microsoft Office",
      "CapCut",
      "Blender",
      "Unity",
      "Figma",
      "Postman",
      "OWASP ZAP",
      "Burp Suite Community Edition",
      "Wireshark",
      "XAMPP",
      "Laragon",
    ],
  },
];

export const softSkills: readonly SoftSkill[] = [
  {
    name: "Teamwork",
    description:
      "Collaborates effectively with others to complete tasks and achieve shared goals.",
  },
  {
    name: "Communication",
    description:
      "Communicates ideas clearly in both written and verbal professional settings.",
  },
  {
    name: "Problem Solving",
    description:
      "Analyzes challenges and develops practical, effective solutions across different situations.",
  },
  {
    name: "Public Speaking",
    description:
      "Confidently presents ideas, delivers presentations, and engages with audiences.",
  },
];