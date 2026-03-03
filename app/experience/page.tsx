import ExperiencePage from "@/pages/ExperiencePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Muhammad Owais Shah",
  description: "Professional experience in AI engineering, automation, and full-stack development. Work history showcasing expertise in building intelligent systems, AI agents, and modern web applications.",
  keywords: ["AI engineer experience", "full-stack developer experience", "Python developer", "React developer", "professional experience", "work history"],
  openGraph: {
    title: "Experience - Muhammad Owais Shah",
    description: "Professional experience in AI engineering, automation, and full-stack development.",
  },
};

export default function Experience() {
  return <ExperiencePage />;
}
