import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
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
            className="absolute inset-0 bg-black/65 backdrop-blur-md"
            aria-label="Close project details"
            onClick={onClose}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : 16 }}
            transition={{ duration }}
            className="relative z-[81] max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/10 bg-panel/95 p-5 shadow-2xl backdrop-blur-xl sm:rounded-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
                  {project.label} · {project.category}
                </p>
                <h2
                  id={titleId}
                  className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
                >
                  {project.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="rounded-md border border-line p-2 text-mute transition-colors hover:bg-card hover:text-ink"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <ModalBlock title="Overview">{project.overview}</ModalBlock>
              <ModalBlock title="Objective">{project.objective}</ModalBlock>
              {project.technologies.length > 0 ? (
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
                    Tools / Technologies
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-line bg-card px-2.5 py-1.5 text-sm text-ink"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div>
                <h3 className="text-[11px] tracking-wide text-faint uppercase">
                  Focus
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 text-xs text-mute"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
                  What I Worked On
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.workedOn.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-mute">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <ModalBlock title="Key Learning">{project.learning}</ModalBlock>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

function ModalBlock({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] tracking-[0.18em] text-faint uppercase">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mute">{children}</p>
    </div>
  )
}
