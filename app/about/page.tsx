import AboutPage from "@/pages/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Muhammad Owais Shah | AI Engineer & Developer",
  description: "Learn about Muhammad Owais Shah's journey from History graduate to AI Engineer. Panaversity certified with expertise in AI Agents, Python, Next.js, and modern web technologies. Ranked 70th-90th percentile across technical quarters.",
  keywords: ["about Muhammad Owais Shah", "Panaversity", "AI engineer journey", "Governor Sindh AI program", "career transition", "web developer story"],
  openGraph: {
    title: "About - Muhammad Owais Shah | AI Engineer & Developer",
    description: "Learn about Muhammad Owais Shah's journey from History graduate to AI Engineer.",
  },
};

export default function About() {
  return <AboutPage />;
}
