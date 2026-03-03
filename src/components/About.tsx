'use client';

import React from "react";
import { Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 bg-background text-foreground" id="about">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            From History to High-Impact Tech
          </p>
        </div>

        {/* My Journey */}
        <div className="mb-20 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              My foundation is non-technical—I studied{" "}
              <span className="text-primary font-semibold">Muslim History</span>{" "}
              at the University of Sindh. However, in 2023, I took a pivotal
              turn in my career by clearing the rigorously selective{" "}
              <span className="text-primary font-semibold">
                Panaversity entrance exam
              </span>
              .
            </p>
            <p>
              This achievement opened doors to the{" "}
              <span className="text-primary font-semibold">
                Governor of Sindh's Certified Agentic & Robotics AI Engineers
                Program
              </span>
              , where I immersed myself in cutting-edge technologies: HTML, CSS,
              TypeScript, Next.js, Python, and Agents SDK.
            </p>
            <p>
              I didn't just learn—I{" "}
              <span className="text-primary font-semibold">
                delivered real prototypes and outcomes
              </span>
              , consistently ranking in the{" "}
              <span className="text-primary font-semibold">70th–90th percentile</span>{" "}
              across all technical quarters.
            </p>
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Academic Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quarter: "Quarter 1",
                subject: "HTML/CSS & TypeScript",
                percentile: "90th",
                grade: "A-grade",
                achievement:
                  "Built modular, responsive UIs and reusable component libraries.",
              },
              {
                quarter: "Quarter 2",
                subject: "Next.js",
                percentile: "70th",
                grade: "Distinction",
                achievement:
                  "Optimized SSR routing, improving page load time by 25%.",
              },
              {
                quarter: "Quarter 3",
                subject: "Python & AI Agents SDK",
                percentile: "79th",
                grade: "Distinction",
                achievement:
                  "Built custom AI agents with decision logic and API integrations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-sm text-primary font-semibold mb-2">
                  {item.quarter}
                </div>
                <div className="text-lg font-bold mb-2">{item.subject}</div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {item.percentile}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {item.grade}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {item.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Drives Me */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                description:
                  "Building systems that solve real, scalable problems—combining AI agents, smart frontends, and automation workflows.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Consistently ranking among Pakistan's emerging leaders in AI, robotics, and web development through rigorous training.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "Not just writing code—delivering systems merging frontend, backend, AI logic, and automation seamlessly.",
              },
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-300 text-center animate-fade-in"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-muted-foreground">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl italic leading-relaxed">
            "I don't just write code—I deliver working systems that combine
            frontend, backend, AI logic, and automation. Teams needing someone
            to own technology from UI to agent to automation will find in me a{" "}
            <span className="text-primary font-semibold">rare hybrid</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
