'use client';

import { ArrowRight, Sparkles, Code2, ExternalLink, Linkedin, Mail, ChevronDown, Zap, Brain, Workflow } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "@/assets/profile-hero.png";
import { projects } from "@/data/projects";
import { useEffect, useRef, useState, useMemo } from "react";

/* ─── Typing Animation Hook ─────────────────────────────────────── */
const useTypingEffect = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
};

/* ─── Single shared Scroll Reveal using one observer ─────────────── */
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

/* ─── Service Card (lightweight) ─────────────────────────────────── */
const ServiceCard = ({ title, description, icon: Icon, delay }: { title: string; description: string; icon: any; delay: string }) => (
  <div
    style={{ animationDelay: delay }}
    className="group relative p-8 rounded-2xl glass-card transition-colors duration-300 hover:border-primary/30 animate-fade-in opacity-0"
  >
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
    </div>
  </div>
);

/* ─── Featured Project Card (no per-card observer) ───────────────── */
const FeaturedProjectCard = ({ project, delay }: { project: typeof projects[0]; delay: string }) => (
  <div style={{ animationDelay: delay }} className="group animate-fade-in opacity-0">
    <div className="relative rounded-2xl overflow-hidden glass-card transition-colors duration-300 hover:border-primary/30">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 backdrop-blur-sm text-primary border border-primary/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-muted/50 text-muted-foreground border border-white/5">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              Live Demo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <Link href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors">
            Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   MAIN HOME COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
const Home = () => {
  const typedText = useTypingEffect([
    'Agentic AI Engineer',
    'Full-Stack Developer',
    'Automation Architect',
    'n8n Workflow Expert',
  ], 80, 50, 1800);

  const featuredProjects = projects.slice(0, 4);

  // Dynamic stats from real data
  const totalProjects = projects.length;
  const automationCount = useMemo(
    () => projects.filter(p => p.category === 'Workflow Automations (n8n)').length,
    []
  );

  const servicesSection = useScrollReveal();
  const projectsSection = useScrollReveal();
  const statsSection = useScrollReveal();

  return (
    <div className="min-h-screen overflow-hidden">

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
         ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12">
        {/* Background — static gradients only, no animated blurs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(189_94%_43%/0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,hsl(260_80%_60%/0.06),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(hsl(189_94%_43%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(189_94%_43%/0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="stagger-children">
              {/* Status badge */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/60 border border-white/10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    Available for Opportunities
                  </span>
                </div>
              </div>

              {/* Heading */}
              <div>
                <h3 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight">
                  <span className="text-foreground">Hi, I&apos;m</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-primary">
                   Muhammad Owais Shah
                  </span>
                </h3>
              </div>

              {/* Typing subtitle */}
              <div>
                <div className="text-xl md:text-2xl text-muted-foreground font-light">
                  I&apos;m a{' '}
                  <span className="text-primary font-semibold">
                    {typedText}
                    <span className="animate-pulse ml-0.5 text-primary">|</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  I design AI-powered agents, n8n automation workflows, and
                  modern Next.js frontends — turning complex ideas into
                  production-ready intelligent systems.
                </p>
              </div>

              {/* CTA Buttons */}
              <div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link href="/projects">
                    <button className="group relative h-12 px-8 text-sm font-semibold rounded-full bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_hsl(189_94%_43%/0.35)]">
                      <span className="relative z-10 flex items-center gap-2">
                        Explore My Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="h-12 px-8 text-sm font-semibold rounded-full border border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>

              {/* Social icons */}
              <div>
                <div className="flex items-center gap-3 pt-2 mt-2">
                  <a href="mailto:syedowaisshah1010@gmail.com"
                    className="p-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-colors duration-300"
                    aria-label="Email">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-owais-shah-1b39962b7" target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-colors duration-300"
                    aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Profile Image */}
            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-full max-w-[520px] aspect-square">
                {/* Static glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/10 rounded-full blur-[80px] scale-90" />

                {/* Static decorative ring */}
                <div className="absolute inset-0 rounded-full border border-primary/15" />
                <div className="absolute inset-6 rounded-full border border-dashed border-purple-400/10" />

                {/* Main image */}
                <div className="absolute inset-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                  <Image
                    src={profileImage}
                    alt="Muhammad Owais Shah"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>

                {/* Status card — static position, no float animation */}
                <div className="absolute -bottom-2 -left-4 z-20 p-4 rounded-2xl glass-card shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Open to Work</div>
                      <div className="text-xs text-emerald-400">Available Now</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
        </div> */}
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS SECTION — DYNAMIC
         ════════════════════════════════════════════════════════════ */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <div
            ref={statsSection.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-700 ${statsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">90th</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Percentile Rank</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">2+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{totalProjects}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{automationCount}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Automations</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHAT I DO — SERVICES
         ════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(189_94%_43%/0.04),transparent_70%)] pointer-events-none" />

        <div
          ref={servicesSection.ref}
          className={`container mx-auto relative transition-all duration-700 ${servicesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" />
              Services
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              End-to-end solutions combining AI intelligence, automation workflows, and pixel-perfect frontends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              title="AI & Agents"
              description="Building intelligent agents with Python, OpenAI SDK, and LLMs — systems that think, decide, and automate complex workflows autonomously."
              icon={Brain}
              delay="0s"
            />
            <ServiceCard
              title="Full-Stack Web Development"
              description="Crafting fast, responsive web experiences with Next.js, React, TypeScript, and Tailwind — pixel-perfect UI with blazing performance."
              icon={Code2}
              delay="0.15s"
            />
            <ServiceCard
              title="Workflow Automation"
              description="Designing end-to-end n8n automation pipelines — connecting APIs, databases, and AI into seamless business workflows."
              icon={Workflow}
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FEATURED PROJECTS
         ════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div
          ref={projectsSection.ref}
          className={`container mx-auto transition-all duration-700 ${projectsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Portfolio
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-lg">
                A selection of projects showcasing AI agents, automation systems, and modern web applications.
              </p>
            </div>
            <Link href="/projects">
              <button className="group h-10 px-6 text-sm font-semibold rounded-full border border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} delay={`${index * 0.1}s`} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA SECTION
         ════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="container mx-auto">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-card to-purple-500/10" />

            <div className="relative p-10 md:p-16 text-center">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Ready to Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                  Extraordinary?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Need an AI engineer who ships end-to-end — from intelligent agents
                and automation pipelines to polished, production-grade frontends?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <button className="group relative h-12 px-8 text-sm font-semibold rounded-full bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_hsl(189_94%_43%/0.35)]">
                    <span className="relative z-10 flex items-center gap-2">
                      Start a Conversation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="h-12 px-8 text-sm font-semibold rounded-full border border-white/15 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    Learn About Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
