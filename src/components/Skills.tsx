'use client';

import { Brain, Code2, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Automation",
    subtitle: "Intelligent Systems",
    icon: Brain,
    accent: "from-cyan-400 to-blue-500",
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(189_94%_43%/0.2)]",
    skills: [
      { name: "Python", level: 85 },
      { name: "OpenAI Agents SDK", level: 80 },
      { name: "n8n Workflows", level: 75 },
      { name: "AI Agents", level: 82 },
      { name: "Workflow Automation", level: 78 },
    ],
  },
  {
    title: "Full-Stack Web Development",
    subtitle: "Modern Web Experiences",
    icon: Code2,
    accent: "from-blue-500 to-violet-500",
    border: "hover:border-violet-500/40",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(260_80%_60%/0.2)]",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Tools & Integration",
    subtitle: "DevOps & Architecture",
    icon: Wrench,
    accent: "from-violet-500 to-pink-500",
    border: "hover:border-pink-500/40",
    glow: "group-hover:shadow-[0_0_30px_-5px_hsl(330_80%_60%/0.2)]",
    skills: [
      { name: "API Integration", level: 87 },
      { name: "Git & GitHub", level: 85 },
      { name: "System Architecture", level: 75 },
      { name: "SSR Optimization", level: 80 },
    ],
  },
];

export const Skills = () => (
  <section className="py-16 md:py-24" id="skills">
    <div className="container mx-auto">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Skills &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
            Expertise
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          The toolkit I use to build intelligent, scalable systems
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <div
              key={i}
              className={`group relative p-7 rounded-2xl bg-card/40 border border-white/10 ${category.border} ${category.glow} transition-all duration-300`}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-7">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.accent} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{category.subtitle}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-bold text-muted-foreground tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 w-full rounded-full bg-muted/20 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.accent}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Total score */}
              <div className="mt-7 pt-5 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Avg. Proficiency</span>
                <span className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.accent}`}>
                  {Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
