export type SkillGroupTitle = "Languages" | "Frameworks" | "Tools";

export type SkillGroup = {
  title: SkillGroupTitle;
  items: readonly string[];
};

export type SoftSkill = {
  name: string;
  description: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};