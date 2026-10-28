import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, CheckCircle2, Award, Layers } from 'lucide-react'
import { internship, experienceTracks } from '../data/practical'
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
        eyebrow="Hands-on Background"
        title="Experience & Practical Work"
        description="Verified cybersecurity internship experience paired with disciplined laboratory and academic engineering tracks."
      />

      {/* Featured Primary Internship Card */}
      <motion.article
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration }}
        className="relative mb-8 overflow-hidden rounded-3xl border border-cyan/30 bg-gradient-to-br from-card via-card to-cyan/5 p-6 shadow-xl backdrop-blur-xl sm:p-8 md:p-10"
      >
        {/* Accent strip */}
        <div className="absolute inset-y-0 left-0 w-1.5 bg-cyan shadow-[0_0_12px_rgba(92,225,214,0.6)]" aria-hidden="true" />

        <div className="pl-2 sm:pl-4">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 font-mono text-[11px] font-semibold tracking-[0.14em] text-cyan uppercase">
              <Briefcase size={13} />
              {internship.label}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] text-faint">
              <CheckCircle2 size={13} className="text-cyan" />
              {internship.status}
            </span>
          </div>

          {/* Role and Organization */}
          <div className="mt-4">
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {internship.role}
            </h3>
            <p className="mt-1 text-base font-medium text-cyan sm:text-lg">
              {internship.company}
            </p>
          </div>

          {/* Description */}
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute">
            {internship.description}
          </p>

          {/* Deliverables / Tasks */}
          <div className="mt-6 rounded-2xl border border-line/80 bg-panel/70 p-5">
            <h4 className="font-mono text-xs font-semibold tracking-[0.14em] text-cyan uppercase">
              Key Responsibilities & Deliverables
            </h4>
            <ul className="mt-3.5 space-y-2.5">
              {internship.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Credential Recognitions & Skills */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-5">
            <div>
              <p className="text-[11px] font-medium text-faint uppercase">
                Verified Recognitions
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {internship.recognitions.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/25 bg-cyan/8 px-3 py-1 text-xs font-medium text-cyan"
                  >
                    <Award size={13} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-medium text-faint uppercase">
                Domain Competencies
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {internship.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-panel px-2.5 py-1 text-xs text-mute"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Supporting Academic & Lab Tracks */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Layers size={16} className="text-cyan" />
          <h4 className="font-mono text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
            Supporting Educational & Laboratory Tracks
          </h4>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {experienceTracks.map((track, index) => (
            <motion.article
              key={track.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration, delay: reduce ? 0 : index * 0.06 }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-card/75 p-5 transition-colors hover:border-white/12 hover:bg-card-hover"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                  {track.label}
                </p>
                <h5 className="mt-2 font-display text-base font-semibold text-ink">
                  {track.title}
                </h5>
                <p className="mt-2.5 text-xs leading-relaxed text-mute">
                  {track.description}
                </p>
              </div>

              <div className="mt-4 border-t border-line/60 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {track.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded border border-line/80 bg-panel px-2 py-0.5 text-[10px] text-faint"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
