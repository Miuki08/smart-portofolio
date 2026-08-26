import type { NavigationItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Reina Fujimiya",
  shortName: "Reina",
  title: "Reina Fujimiya - Junior Developer",
  description: "Personal portfolio of Reina Fujimiya, a junior developer and video editor.",
  locale: "en_US",
  characterImage: "/images/character/reinaa05.jpg",

  links: {
    twitch: "https://www.twitch.tv/reinaadayo",
    github: "https://github.com/Miuki08",
    instagram: "https://www.instagram.com/kiranakita.dev",
    youtube: "https://youtube.com/@reinaa.m",
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ] satisfies readonly NavigationItem[],
} as const;