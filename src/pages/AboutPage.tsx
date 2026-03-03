'use client';

import { GraduationCap, Award, TrendingUp, Target, Lightbulb } from "lucide-react";
import Image from "next/image";
// import profileImg from "@/assets/Gemini_Generated_Image_a7ua5ca7ua5ca7ua (1).png";
import profileImg from "@/assets/about-section.png";

const AboutPage = () => {
  const quarters = [
    {
      quarter: "Quarter 1",
      subject: "HTML/CSS & TypeScript",
      percentile: "90th",
      grade: "A-grade",
      achievement: "Built modular, responsive UIs and reusable component libraries.",
    },
    {
      quarter: "Quarter 2",
      subject: "Next.js",
      percentile: "70th",
      grade: "B-grade",
      achievement:
        "Developed dynamic server-rendered pages, optimized routing, improved page load time by 25%.",
    },
    {
      quarter: "Quarter 3",
      subject: "Python & AI Agents SDK",
      percentile: "79th",
      grade: "A-grade",
      achievement:
        "Built custom agents with decision logic, SDK integrations; deployed prototype automating tasks via APIs.",
    },
    {
      quarter: "Quarter 4",
      subject: "Advanced MCB & OpenAI Agent Kit",
      percentile: "Ongoing",
      grade: "In Progress",
      achievement:
        "Working on full workflow automation, backend integrations, scaling reliability.",
    },
  ];

  return (
    <div className="min-h-screen py-20 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            <span className="gradient-text">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From history graduate to AI engineer — my journey in tech
          </p>
        </div>

        {/* Profile & Journey */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {/* Left: Profile Image */}
          <div className="flex justify-center items-start">
            <div className="relative">
              <Image
                src={profileImg}
                alt="Muhammad Owais Shah"
                width={400}
                height={400}
                className="rounded-2xl w-full max-w-md glass-card shadow-[0_0_30px_5px_rgba(96,165,250,0.5)] hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right: Journey & What I Offer */}
          <div className="space-y-6">
            {/* My Journey */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-primary size-12" />
                My Journey
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Coming from a non-technical background in
                <strong> BS History at the (University of Sindh)</strong>, my transition into
                technology began in <strong>2023</strong> after successfully clearing the
                <strong> highly selective Panaversity entrance exam</strong>. Since then, I've immersed
                myself in <strong>Next.js, TypeScript, Python, N8N,</strong> and the
                <strong> OpenAI Agents SDK</strong> — building not just skills, but
                <strong> real-world intelligent systems and automation workflows</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                As a <strong>Certified Panaversity Fellow</strong> under the
                <strong> (Governor of Sindh's Agentic & Robotics AI Engineers Program)</strong>,
                I'm part of Pakistan's next generation of innovators shaping the future of
                <strong> AI, robotics, web development,</strong> and
                <strong> intelligent system automation</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I design and develop <strong>AI-powered web applications, workflow automation pipelines,</strong>
                and <strong>custom agent systems</strong> that integrate logic, data, and design — delivering
                <strong> scalable, automation-ready, and business-focused digital solutions</strong>
                that help clients achieve efficiency, reliability, and measurable impact.
              </p>
            </div>

            {/* What I Offer */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-amber-400 size-12" />
                What I Offer
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Frontend + backend + automation skills all in one</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Build full websites, develop autonomous agents using SDKs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Automate workflows using N8N and API logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    Deliver working systems that combine UI, agents, and automation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground flex justify-center items-center gap-2">
            <GraduationCap className="text-primary" />
            Academic Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quarters.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-sm text-primary font-semibold mb-2">
                  {item.quarter}
                </div>
                <div className="text-lg font-bold text-foreground mb-2">
                  {item.subject}
                </div>
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
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                description:
                  "Building systems that solve real, scalable problems — combining AI agents, smart frontends, and automation workflows.",
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
                  "Not just writing code — delivering working systems that merge frontend, backend, AI logic, and automation seamlessly.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow text-center animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl text-foreground italic leading-relaxed">
            "I don't just write code — I deliver working systems that combine frontend,
            backend, AI logic, and automation. Teams needing someone to own technology from
            UI to agent to automation will find in me a{" "}
            <span className="text-primary font-semibold">rare hybrid</span>."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
