import { ArrowUpRight, Shield, Database, Code2 } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import type { Project } from '../data/projects'
import { cn } from '../lib/cn'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const isSecurity = project.projectType === 'cybersecurity'
  const isDatabase = project.label === 'DATABASE PROJECT'
  const Icon = isSecurity ? Shield : isDatabase ? Database : Code2

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-card/85 p-5 transition-all duration-300 sm:p-6',
        isSecurity
          ? 'border-cyan/25 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-cyan/50 hover:shadow-[0_12px_40px_rgba(92,225,214,0.14)]'
          : 'border-line hover:border-white/15 hover:bg-card-hover',
      )}
    >
      {/* Background visual gradient */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80',
          isSecurity
            ? 'from-cyan/10 via-transparent to-transparent'
            : isDatabase
              ? 'from-azure/10 via-transparent to-transparent'
              : 'from-violet/10 via-transparent to-transparent',
        )}
      />

      <div className="relative">
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-3">
          <span
            className={cn(
              'flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase',
              isSecurity ? 'text-cyan' : isDatabase ? 'text-azure' : 'text-violet',
            )}
          >
            <Icon size={13} />
            {project.domain}
          </span>

          <span
            className={cn(
              'rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase',
              isSecurity
                ? 'border-cyan/30 bg-cyan/10 text-cyan'
                : 'border-line bg-panel/90 text-faint',
            )}
          >
            {project.label}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink sm:text-[1.25rem]">
          {project.title}
        </h3>

        {/* Concise Overview */}
        <p className="mt-2.5 text-xs leading-relaxed text-mute">
          {project.description}
        </p>

        {/* Structured Technical Highlights */}
        <div className="mt-4 space-y-2 rounded-xl border border-line/70 bg-panel/75 p-3.5 text-xs">
          <div>
            <span className="font-mono text-[10px] font-semibold text-faint uppercase">
              Technical Challenge:
            </span>
            <p className="mt-0.5 text-mute">{project.problem}</p>
          </div>

          <div className="border-t border-line/60 pt-2">
            <span className="font-mono text-[10px] font-semibold text-faint uppercase">
              {project.securityRelevance ? 'Defensive Security Relevance:' : 'Implementation Approach:'}
            </span>
            <p
              className={cn(
                'mt-0.5 font-medium',
                project.securityRelevance ? 'text-cyan/90' : 'text-ink/90',
              )}
            >
              {project.securityRelevance ?? project.solution}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line/80 bg-panel px-2.5 py-1 text-[11px] font-medium text-ink"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action CTAs */}
      <div className="relative mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line/60 pt-4">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-cyan/40 hover:text-cyan"
        >
          View Technical Breakdown
          <ArrowUpRight size={13} />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository on GitHub`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel px-2.5 py-1.5 text-xs text-mute transition-colors hover:border-cyan/40 hover:text-ink"
            >
              <GitHubIcon size={14} />
              Repository
              <ArrowUpRight size={12} />
            </a>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/10 px-2.5 py-1.5 text-xs text-cyan transition-colors hover:bg-cyan/20"
            >
              Live Demo
              <ArrowUpRight size={12} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
