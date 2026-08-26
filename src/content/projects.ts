import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    id: "merapat",
    title: "MERAPAT",
    description:
      "A meeting room booking platform designed with a simple, user-friendly workflow.",
    image: "/images/projects/merapat.png",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    category: "Web Development",
    githubUrl: "https://github.com/Miuki08/merapatv2.0.1",
  },
  {
    id: "flower-ordering",
    title: "Flower Ordering App",
    description:
      "An Android application that makes it easy to browse and order a variety of flowers.",
    image: "/images/projects/appflower.png",
    technologies: ["Java", "PHP", "MySQL"],
    category: "Mobile Development",
    githubUrl: "https://github.com/Miuki08/android-jaya",
  },
  {
    id: "onebox-pr",
    title: "Onebox Public Relations",
    description:
      "A centralized platform for managing inbound information, news distribution, and reputation monitoring.",
    image: "/images/projects/oneboxpr.png",
    technologies: ["PHP", "Phalcon", "MySQL", "Bootstrap"],
    category: "Web Development",
  },
  {
    id: "tni-au-portal",
    title: "Public Information Portal",
    description:
      "A web-based portal for publishing news, documenting activities, and distributing official information.",
    image: "/images/projects/tniau.png",
    technologies: ["PHP", "Laravel", "REST API"],
    category: "Web Development",
  },
];