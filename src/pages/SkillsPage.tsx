'use client';

import { Skills } from "@/components/Skills";
import { GraduationCap, CheckCircle2, Clock } from "lucide-react";

const quarters = [
  {
    quarter: "Q1",
    subject: "HTML/CSS & TypeScript",
    percentile: "90th",
    grade: "A-Grade",
    done: true,
    achievement: "Pixel-perfect responsive layouts with CSS Grid & Flexbox. Type-safe reusable component libraries with TypeScript.",
  },
  {
    quarter: "Q2",
    subject: "React.js / Next.js",
    percentile: "70th",
    grade: "B-Grade",
    done: true,
    achievement: "Server-rendered pages with optimized routing. Improved page load time by 25% with SSR strategies.",
  },
  {
    quarter: "Q3",
    subject: "Python & AI Agents SDK & n8n",
    percentile: "79th",
    grade: "A-Grade",
    done: true,
    achievement: "Autonomous agents with decision-making logic. End-to-end workflow automation via APIs and n8n pipelines.",
  },
  {
    quarter: "Q4",
    subject: "Advanced MCB & OpenAI Agent Kit",
    percentile: "In Progress",
    grade: "Ongoing",
    done: false,
    achievement: "Multi-agent workflows, backend integrations, and intelligent automation at scale.",
  },
];

const SkillsPage = () => (
  <div className="min-h-screen pt-16">
    <Skills />

    {/* Academic Journey — Timeline */}
    <section className="pb-24">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            Panaversity Fellow
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
              Progress
            </span>
          </h2>
          <p className="text-muted-foreground">
            Certified Agentic & Robotics AI Engineers Program — Governor of Sindh
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {quarters.map((q, i) => (
              <div key={i} className="flex gap-5">
                {/* Timeline dot */}
                <div className="flex-shrink-0 mt-1 hidden sm:flex">
                  <div className={`w-[47px] h-[47px] rounded-xl flex items-center justify-center ${q.done ? 'bg-primary/15' : 'bg-muted/30'}`}>
                    {q.done
                      ? <CheckCircle2 className="w-5 h-5 text-primary" />
                      : <Clock className="w-5 h-5 text-muted-foreground" />
                    }
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 p-6 rounded-xl border transition-colors duration-300 ${q.done ? 'bg-card/50 border-white/10 hover:border-primary/30' : 'bg-card/30 border-dashed border-white/10'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {q.quarter}
                        </span>
                        <h3 className="text-base font-semibold text-foreground">{q.subject}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${q.done ? 'bg-primary/15 text-primary' : 'bg-muted/30 text-muted-foreground'}`}>
                        {q.percentile}
                      </span>
                      <span className="text-xs text-muted-foreground">{q.grade}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{q.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SkillsPage;
