'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

/** Accepts a full YouTube URL or a bare video ID — returns the bare ID. */
function extractVideoId(raw: string): string {
  const patterns = [
    /[?&]v=([^&#\s]+)/,       // watch?v=ID
    /youtu\.be\/([^?&#\s]+)/, // youtu.be/ID
    /embed\/([^?&#\s]+)/,     // embed/ID
  ];
  for (const re of patterns) {
    const m = raw.match(re);
    if (m) return m[1];
  }
  return raw.trim();
}

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center space-y-5">
          <p className="text-5xl">🔍</p>
          <h1 className="text-3xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground text-sm">
            This project doesn't exist or has been moved.
          </p>
          <Link href="/projects">
            <Button variant="outline" className="border-white/10 hover:border-primary/40 hover:bg-primary/8 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isFrontendN8n = project.category === 'Frontend + n8n Integration';
  const isFullStack = project.category === 'Full-Stack Web Applications';
  const videoId = project.youtubeId ? extractVideoId(project.youtubeId) : null;
  const hasVideo = !!videoId;

  return (
    <div className="min-h-screen pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* ── Back nav ──────────────────────────────────────────────────── */}
        <div className="mb-8">
          <Link href="/projects">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-white/5 -ml-3 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-150 group-hover:-translate-x-0.5" />
              All Projects
            </Button>
          </Link>
        </div>

        {/* ── Category badge ─────────────────────────────────────────────── */}
        <div className="mb-5">
          <span className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 border border-primary/25 px-3 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>

        {/* ── 1. H1 Title ────────────────────────────────────────────────── */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-tight bg-gradient-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent">
          {project.title}
        </h1>

        {/* ── 2. YouTube embed (16:9) ─────────────────────────────────────── */}
        <div className="mb-10">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-card/50">
            <div className="aspect-video">
              {hasVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&color=white`}
                  title={project.title}
                  className="w-full h-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    placeholder="blur"
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-white/50 bg-black/50 px-3 py-1.5 rounded-full border border-white/10">
                      Video coming soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── 3. Project Description ─────────────────────────────────────── */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            About This Project
          </h2>
          <div className="space-y-4">
            {project.fullDescription.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ── 4. Tech Stack + Features ────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {project.technologies.length > 0 && (
            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
              <h3 className="text-[11px] font-semibold text-foreground uppercase tracking-widest mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
              <h3 className="text-[11px] font-semibold text-foreground uppercase tracking-widest mb-4">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Live Link button ─────────────────────────────────────────────── */}
        {project.liveUrl && (isFrontendN8n || isFullStack) && (
          <div className="flex items-center gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-[box-shadow] duration-200 font-semibold"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {isFrontendN8n ? 'Live Link' : 'View Live Project'}
              </Button>
            </a>
            <Link href="/projects">
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Projects
              </Button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
