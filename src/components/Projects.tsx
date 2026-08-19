import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from '../data/projects'
import { cn } from '../lib/cn'
import { motionDuration } from '../lib/motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState<'all' | ProjectFilter>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.35)

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.filter === filter),
    [filter],
  )

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Projects"
        title="Selected Work"
        description="Academic projects and security assessments across cybersecurity and database development."
      />

      <div
        className="mb-8 inline-flex max-w-full flex-wrap gap-1 rounded-full border border-line bg-panel/80 p-1"
        role="group"
        aria-label="Filter projects"
      >
        {projectFilters.map((item) => {
          const isActive = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(item.id)}
              className={cn(
                'rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors',
                isActive
                  ? 'bg-cyan/15 text-cyan'
                  : 'text-mute hover:text-ink',
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
              transition={{ duration }}
            >
              <ProjectCard project={project} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
