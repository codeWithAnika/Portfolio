import { motion, useReducedMotion } from 'framer-motion'
import { experienceTracks, internship } from '../data/practical'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Experience() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.45)

  return (
    <Section id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Background"
        title="Experience & Practical Work"
        description="Professional internship experience alongside academic, laboratory, and project-based work."
      />

      <motion.article
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration }}
        className="relative mb-6 overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/8 via-card to-card p-6 sm:p-8"
      >
        <div className="absolute bottom-0 left-0 top-0 w-1 bg-cyan" aria-hidden="true" />
        <p className="pl-4 font-mono text-[11px] tracking-[0.16em] text-cyan uppercase">
          {internship.label}
        </p>
        <h3 className="mt-3 pl-4 font-display text-2xl font-semibold text-ink">
          {internship.title}
        </h3>
        <p className="mt-4 max-w-3xl pl-4 text-sm leading-relaxed text-mute">
          {internship.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2 pl-4">
          {internship.recognitions.map((item) => (
            <li
              key={item}
              className="rounded-full border border-cyan/25 bg-cyan/8 px-3 py-1 text-xs text-cyan"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.article>

      <div className="grid gap-4 md:grid-cols-3">
        {experienceTracks.map((track, index) => (
          <motion.article
            key={track.id}
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, delay: reduce ? 0 : index * 0.06 }}
            className="rounded-2xl border border-line bg-panel/70 p-5"
          >
            <p className="font-mono text-[11px] tracking-[0.16em] text-faint uppercase">
              {track.label}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              {track.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              {track.description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
