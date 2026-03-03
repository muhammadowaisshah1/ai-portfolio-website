'use client';

import { Button } from "./ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Muhammad Owais Shah
          </h1>

          {/* Titles */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Agentic AI Engineer • Full-Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Building intelligent systems with AI agents, automation workflows, and modern frontend technologies.
            Panaversity Fellow specializing in React.js, Next.js, Python, and Agentic AI Engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="mailto:syedowaisshah0101@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-owais-shah-1b39962b7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
