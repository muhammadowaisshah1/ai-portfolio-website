'use client';

import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Agentic AI Engineer — Panaversity Fellow",
      company: "Governor of Sindh's Certified Agentic & Robotics AI Engineers Program",
      period: "February 2024 - Present",
      location: "Karachi Division, Sindh, Pakistan",
      achievements: [
        "Engineered AI agents using Python + OpenAI Agent SDK, automating decision-based workflows with 80% efficiency gains",
        "Built end-to-end N8N automation pipelines, integrating APIs and logic nodes for seamless operations",
        "Ranked among the top 70–90th percentile in all technical quarters",
        "Combined frontend logic and agent intelligence to create responsive, data-driven web systems",
      ],
      tech: ["Python", "Agents SDK", "N8N", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Full-Stack Developer — AI-Powered Web Projects",
      company: "Independent / Fellowship Projects",
      period: "February 2024 - Present",
      location: "Remote",
      achievements: [
        "Developed dynamic Next.js websites with optimized SSR routing, improving speed and SEO performance",
        "Designed reusable UI components with TypeScript + Tailwind CSS, ensuring visual consistency",
        "Integrated AI agent logic into frontend workflows, creating intelligent interfaces",
        "Deployed multiple production-ready prototypes, uniting frontend, backend, and automation layers",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Agents SDK"],
    },
    {
      title: "Automation Engineer — Workflow Systems",
      company: "Freelance",
      period: "2024 - Present",
      location: "Remote",
      achievements: [
        "Built multi-step automation workflows in N8N, reducing manual operations by up to 70%",
        "Integrated AI Agent SDKs for smart, logic-based decision-making across backend pipelines",
        "Created custom API connections to synchronize and automate multi-system tasks",
        "Currently building MCB & OpenAI's Latest Agent Kit integrations",
      ],
      tech: ["N8N", "AI Agents", "Python SDKs", "API Integration", "Workflow Design"],
    },
  ];

  return (
    <section className="py-10 relative" id="experience">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              <span className="gradient-text">Experience & Education</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building intelligent systems across AI, automation, and frontend development
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-5 sm:left-6 top-16 sm:top-20 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                )}

                <div className="flex gap-4 sm:gap-6 md:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 sm:pb-12">
                    <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300">
                      <div className="flex flex-col gap-2 mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="text-sm sm:text-base text-primary font-medium mb-1 sm:mb-2">
                        {exp.company}
                      </div>

                      <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                        {exp.location}
                      </div>

                      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                            <span className="text-primary mt-1 sm:mt-1.5 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
