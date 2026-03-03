'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects, CATEGORIES, type FilterCategory } from '@/data/projects';

const CATEGORY_SHORT_LABEL: Record<string, string> = {
  'All': 'All',
  'Workflow Automations (n8n)': 'n8n Workflows',
  'Modern Full-Stack Development': 'Frontend',
  'Full-Stack Web Applications': 'Full-Stack',
  'Frontend + n8n Integration': 'Frontend + n8n',
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const countFor = (cat: FilterCategory) =>
    cat === 'All'
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="text-center mb-14 animate-fade-in">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent leading-tight">
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-world applications spanning AI automation, n8n workflows, and
            modern frontend development.
          </p>
        </div>

        {/* ── Category Filter ─────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 animate-fade-in">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  'relative text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200',
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-glow'
                    : 'bg-transparent text-muted-foreground border-white/10 hover:border-primary/35 hover:text-foreground hover:bg-white/4',
                ].join(' ')}
              >
                {CATEGORY_SHORT_LABEL[cat] ?? cat}
                <span
                  className={[
                    'ml-1.5 text-[10px] font-semibold',
                    isActive ? 'opacity-90' : 'opacity-60',
                  ].join(' ')}
                >
                  ({countFor(cat)})
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid ───────────────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-muted-foreground animate-fade-in">
            <p className="text-lg font-medium mb-2">No projects yet</p>
            <p className="text-sm">Check back soon — this category is coming up!</p>
          </div>
        )}

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div className="mt-20 relative rounded-2xl overflow-hidden border border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 pointer-events-none" />
          <div className="relative z-10 px-8 py-12 sm:px-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to collaborate. Let's build something amazing together.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 font-semibold"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
