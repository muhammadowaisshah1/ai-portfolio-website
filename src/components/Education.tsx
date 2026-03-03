'use client';

import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Certified Agentic & Robotics AI Engineers Program",
      institution: "Governor of Sindh's Initiative — Panaversity",
      period: "February 2023 - 2026",
      location: "Pakistan",
      description: "Rigorous program focusing on AI agents, robotics, automation workflows, and modern web development",
    },
    {
      degree: "Bachelor of Science (BS) in History",
      institution: "University of Sindh, Jamshoro",
      period: "January 2021 - December 2025",
      location: "Jamshoro, Pakistan",
      description: "Foundation in research, critical thinking, and analytical skills",
    },
    {
      degree: "Pre-Engineering",
      institution: "Degree College Kohsar",
      period: "January 2018 - 2020",
      location: "Hyderabad, Pakistan",
      description: "Strong foundation in mathematics, physics, and engineering principles",
    },
  ];

  return (
    <section className="py-24 relative" id="education">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            From humanities to cutting-edge technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-7 h-7 text-background" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <div className="text-primary font-medium mb-2">
                        {edu.institution}
                      </div>

                      <div className="text-sm text-muted-foreground mb-4">
                        {edu.location}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
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
