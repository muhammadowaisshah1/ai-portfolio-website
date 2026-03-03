import ContactPage from "@/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Muhammad Owais Shah",
  description: "Get in touch with Muhammad Owais Shah for AI engineering, automation, and full-stack development opportunities. Open to collaborations and new projects.",
  keywords: ["contact Muhammad Owais Shah", "hire AI engineer", "hire full-stack developer", "collaboration opportunities"],
  openGraph: {
    title: "Contact - Muhammad Owais Shah",
    description: "Get in touch for AI engineering and development opportunities.",
  },
};

export default function Contact() {
  return <ContactPage />;
}
