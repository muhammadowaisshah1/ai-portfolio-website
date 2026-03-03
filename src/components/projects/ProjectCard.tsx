'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';

const CATEGORY_BADGE: Record<string, string> = {
  'Workflow Automations (n8n)':
    'bg-violet-500/15 text-violet-300 border-violet-500/25',
  'Modern Full-Stack Development':
    'bg-blue-500/15 text-blue-300 border-blue-500/25',
  'Full-Stack Web Applications':
    'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  'Frontend + n8n Integration':
    'bg-amber-500/15 text-amber-300 border-amber-500/25',
};

export function ProjectCard({ project }: { project: Project }) {
  const isModernFrontend = project.category === 'Modern Full-Stack Development';
  const isFullStack = project.category === 'Full-Stack Web Applications';
  const isFrontendN8n = project.category === 'Frontend + n8n Integration';
  const isWorkflow = project.category === 'Workflow Automations (n8n)';
  const needsDetailPage = isWorkflow || isFullStack || isFrontendN8n;

  const badgeClass =
    CATEGORY_BADGE[project.category] ??
    'bg-primary/15 text-primary border-primary/25';

  return (
    <article
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-card/80
                 transition-[transform,border-color,box-shadow] duration-200
                 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(6,182,212,0.10)]"
    >
      {/* ── Thumbnail ───────────────────────────────────────────────────── */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />

        {/* Category badge — no backdrop-blur for performance */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-card/90 ${badgeClass}`}
        >
          {project.category}
        </span>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-bold text-[15px] leading-snug text-foreground line-clamp-2 transition-colors duration-150 group-hover:text-primary">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech stack pills */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* ── Buttons ───────────────────────────────────────────────────── */}
        <div className="flex gap-2 pt-1">
          {/* Modern Frontend → live link only */}
          {isModernFrontend && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white/10 text-muted-foreground hover:border-primary/40 hover:bg-primary/8 hover:text-primary transition-colors duration-150"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                Live Link
              </Button>
            </a>
          )}

          {/* Workflow / Full-Stack / Frontend+n8n → detail page */}
          {needsDetailPage && (
            <Link href={`/projects/${project.id}`} className="flex-1">
              <Button
                size="sm"
                className="w-full bg-primary/12 text-primary border border-primary/25 hover:bg-primary hover:text-primary-foreground transition-colors duration-150"
              >
                View Project
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </Link>
          )}

          {/* Frontend+n8n → extra live link icon */}
          {isFrontendN8n && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open live project"
            >
              <Button
                size="sm"
                variant="ghost"
                className="px-2.5 text-muted-foreground hover:text-primary hover:bg-primary/8 transition-colors duration-150"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
