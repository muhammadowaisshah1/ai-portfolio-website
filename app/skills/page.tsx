import SkillsPage from "@/pages/SkillsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise - Muhammad Owais Shah",
  description: "Comprehensive overview of technical skills including AI & Automation (Python, OpenAI Agents SDK, N8N), Full-Stack Web Development (React.js, Next.js, TypeScript, Tailwind CSS), and Tools & Integration expertise.",
  keywords: ["AI skills", "Python developer", "React developer", "Next.js", "TypeScript", "Tailwind CSS", "OpenAI SDK", "N8N automation", "technical skills"],
  openGraph: {
    title: "Skills & Expertise - Muhammad Owais Shah",
    description: "Comprehensive overview of technical skills in AI, automation, and modern web development.",
  },
};

export default function Skills() {
  return <SkillsPage />;
}
