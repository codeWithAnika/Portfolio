import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Shield, Code2, Layers, CheckCircle2 } from 'lucide-react'
import {
  cybersecurityProjects,
  developmentProjects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from '../data/projects'
import { cn } from '../lib/cn'
import { motionDuration } from '../lib/motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.35)

  const showCybersecurity = activeCategory === 'all' || activeCategory === 'cybersecurity'
  const showDevelopment = activeCategory === 'all' || activeCategory === 'development'

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Practical Engineering"
        title="Technical Projects"
        description="Curated engineering projects organized by discipline: verified cybersecurity systems and threat detection pipelines appear first, followed by functional full-stack and database projects."
      />

      {/* Category Filter Controls */}
      <div
        className="mb-10 inline-flex max-w-full flex-wrap gap-1.5 rounded-2xl border border-line bg-panel/80 p-1.5 backdrop-blur"
        role="group"
        aria-label="Filter projects by discipline"
      >
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium transition-all duration-200',
                isActive
                  ? 'bg-cyan/15 text-cyan shadow-[inset_0_0_12px_rgba(92,225,214,0.15)]'
                  : 'text-mute hover:text-ink',
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.2 font-mono text-[10px]',
                  isActive ? 'bg-cyan/25 text-cyan' : 'bg-card text-faint',
                )}
              >
                {cat.count}
              </span>
            </button>
          )
        })}
      </div>

      <div className="space-y-16">
        {/* SECTION A: CYBERSECURITY PROJECTS (ALWAYS FIRST) */}
        {showCybersecurity && (
          <section
            aria-labelledby="cybersecurity-projects-title"
            className="space-y-6"
          >
            <div className="flex flex-col gap-2 rounded-2xl border border-cyan/25 bg-gradient-to-r from-cyan/10 via-card/60 to-transparent p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/15 text-cyan">
                  <Shield size={20} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan uppercase">
                      Section A • Primary Focus
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.2 font-mono text-[10px] text-cyan">
                      <CheckCircle2 size={10} />
                      Verified
                    </span>
                  </div>
                  <h3
                    id="cybersecurity-projects-title"
                    className="mt-1 font-display text-2xl font-bold tracking-tight text-ink"
                  >
                    Cybersecurity Projects
                  </h3>
                  <p className="mt-1 text-xs text-mute">
                    Digital Forensics • SIH Criminal Intelligence • Unidirectional Threat Detection • Telemetry Triage
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs text-cyan">
                {cybersecurityProjects.length} Verified Security Systems
              </div>
            </div>

            {/* Cybersecurity Grid */}
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {cybersecurityProjects.map((project) => (
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
          </section>
        )}

        {/* SECTION B: OTHER DEVELOPMENT PROJECTS (ALWAYS AFTER CYBERSECURITY) */}
        {showDevelopment && (
          <section
            aria-labelledby="development-projects-title"
            className="space-y-6 pt-4"
          >
            <div className="flex flex-col gap-2 rounded-2xl border border-line bg-card/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-panel text-mute">
                  <Code2 size={20} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-faint uppercase">
                      Section B • Supporting Disciplines
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-line bg-panel px-2 py-0.2 font-mono text-[10px] text-faint">
                      <Layers size={10} />
                      Full-Stack & Systems
                    </span>
                  </div>
                  <h3
                    id="development-projects-title"
                    className="mt-1 font-display text-2xl font-bold tracking-tight text-ink"
                  >
                    Other Development Projects
                  </h3>
                  <p className="mt-1 text-xs text-mute">
                    Database Schema Normalization • Responsive Web Platforms • Collaborative Engineering
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs text-mute">
                {developmentProjects.length} Software Engineering Projects
              </div>
            </div>

            {/* Development Projects Grid */}
            <motion.div layout className="grid gap-6 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {developmentProjects.map((project) => (
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
          </section>
        )}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
