export type ProjectCategory = "Web Development" | "Mobile Development";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: readonly string[];
  category: ProjectCategory;
  githubUrl?: string;
};