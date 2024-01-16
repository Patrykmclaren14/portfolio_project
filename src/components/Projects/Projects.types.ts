interface Project {
  url: string;
  title: string;
  technologies: string;
  description: string;
}

export interface ProjectProps {
  project: Project
}