import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { cn } from '../lib/cn'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

const visualAccent: Record<Project['filter'], string> = {
  cybersecurity: 'from-cyan/12 via-transparent to-transparent',
  database: 'from-cyan/8 via-azure/8 to-transparent',
  development: 'from-azure/14 via-transparent to-transparent',
}

const visualLabel: Record<Project['filter'], string> = {
  cybersecurity: 'text-cyan',
  database: 'text-cyan',
  development: 'text-azure',
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const collaborative = project.id === 'collaborative-web'

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card/85 transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/12 hover:bg-card-hover hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90',
          visualAccent[project.filter],
        )}
      />
      <div className="relative flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="font-display text-3xl font-semibold leading-none text-white/12">
            {project.number}
          </p>
          <span
            className={cn(
              'rounded-full border border-line bg-panel/80 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase',
              visualLabel[project.filter],
            )}
          >
            {project.label}
          </span>
        </div>

        <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-mute uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink sm:text-[1.35rem]">
          {project.title}
        </h3>
        {collaborative ? (
          <p className="mt-2 text-xs text-azure">Collaborative work with a team member</p>
        ) : null}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
          {project.description}
        </p>

        {project.technologies.length > 0 ? (
          <div className="mt-5">
            <p className="text-[11px] text-faint">Technologies</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-4">
          <p className="text-[11px] text-faint">Focus</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {project.focus.slice(0, 4).map((item) => (
              <li
                key={item}
                className="rounded-full border border-line/80 px-2 py-0.5 text-xs text-mute"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md border border-line px-3 py-2 text-sm text-ink transition-colors hover:border-cyan/40 hover:text-cyan"
        >
          View Details
          <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  )
}
