import ProjectsPage from "@/pages/ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Muhammad Owais Shah",
  description: "Explore AI-powered automation systems, intelligent agent implementations, and full-stack web applications built by Muhammad Owais Shah.",
  keywords: ["AI projects", "automation projects", "web development portfolio", "AI agent systems", "N8N automation"],
  openGraph: {
    title: "Projects - Muhammad Owais Shah",
    description: "Explore AI-powered automation systems and full-stack web applications.",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
