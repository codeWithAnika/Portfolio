import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X, ArrowUpRight, Shield, CheckCircle } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import type { Project } from '../data/projects'
import { motionDuration } from '../lib/motion'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const reduce = useReducedMotion()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const duration = motionDuration(reduce, 0.28)

  useEffect(() => {
    if (!project) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [project, onClose])

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            aria-label="Close project details"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : 16 }}
            transition={{ duration }}
            className="relative z-[81] max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-panel/95 p-6 shadow-2xl backdrop-blur-xl sm:rounded-3xl sm:p-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-line/70 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-cyan uppercase">
                    {project.domain}
                  </span>
                  <span className="text-faint">•</span>
                  <span className="font-mono text-[11px] text-faint uppercase">
                    {project.label}
                  </span>
                </div>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
                >
                  {project.title}
                </h2>
                <p className="mt-1 text-xs text-mute">{project.category}</p>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="rounded-xl border border-line bg-card p-2 text-mute transition-colors hover:text-ink"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6">
              {/* Problem & Solution */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-card/60 p-4">
                  <h3 className="font-mono text-[11px] font-semibold tracking-wider text-faint uppercase">
                    Problem / Challenge
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-mute">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-line bg-card/60 p-4">
                  <h3 className="font-mono text-[11px] font-semibold tracking-wider text-faint uppercase">
                    Implemented Solution
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-mute">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Security Relevance (if present) */}
              {project.securityRelevance ? (
                <div className="rounded-2xl border border-cyan/20 bg-cyan/5 p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    <Shield size={16} className="text-cyan" />
                    <h3 className="font-mono text-xs font-semibold tracking-wider text-cyan uppercase">
                      Security Relevance & Alignment
                    </h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink/90 sm:text-sm">
                    {project.securityRelevance}
                  </p>
                </div>
              ) : null}

              {/* Technologies */}
              <div>
                <h3 className="font-mono text-[11px] font-semibold tracking-wider text-faint uppercase">
                  Technologies & Utilities
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I Worked On */}
              <div>
                <h3 className="font-mono text-[11px] font-semibold tracking-wider text-faint uppercase">
                  Technical Work Performed
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.workedOn.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-mute sm:text-sm">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Learning */}
              <div className="rounded-2xl border border-line bg-panel p-4">
                <h3 className="font-mono text-[11px] font-semibold tracking-wider text-faint uppercase">
                  Key Technical Takeaway
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-mute sm:text-sm">
                  {project.learning}
                </p>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line/70 pt-5">
              <div className="flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-cyan/40 hover:text-cyan"
                  >
                    <GitHubIcon size={15} />
                    View Repository on GitHub
                    <ArrowUpRight size={13} />
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs font-medium text-cyan transition-colors hover:bg-cyan/20"
                  >
                    Live Demo
                    <ArrowUpRight size={13} />
                  </a>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-line px-4 py-2 text-xs text-mute transition-colors hover:text-ink"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
