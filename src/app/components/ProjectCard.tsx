'use client';

import React, { useRef } from 'react';

export interface ProjectData {
  id: string;
  code: string;
  title: string;
  description: string;
  tags: string[];
  layout: 'wide' | 'tall' | 'half';
  badge?: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      className="group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary md:p-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(242,169,59,0.14), transparent 60%)',
        }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">{project.code}</span>
        {project.badge && (
          <span className="rounded-full border border-warning px-3 py-1 font-mono-tech text-[11px] uppercase tracking-widest text-warning">
            {project.badge}
          </span>
        )}
      </div>

      <div className="relative mt-10 flex flex-1 flex-col justify-end">
        <h3 className="text-xl font-bold leading-tight text-foreground md:text-2xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border bg-secondary px-3 py-1 font-mono-tech text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}