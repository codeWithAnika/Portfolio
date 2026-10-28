import { motion, useReducedMotion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { education, site } from '../data/site'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Education() {
  const reduce = useReducedMotion()

  return (
    <Section id="education" labelledBy="education-heading">
      <SectionHeading
        id="education-heading"
        eyebrow="Academic Background"
        title="Education"
        description="Formal academic qualifications in Cyber Security and foundational sciences. Displayed factually without inflated metrics or fabricated grades."
      />

      <div className="relative max-w-3xl pl-2 sm:pl-4">
        {/* Timeline track */}
        <div
          className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-cyan via-line to-line/50 sm:left-[19px]"
          aria-hidden="true"
        />

        <div className="grid gap-6">
          {education.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, x: reduce ? 0 : 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: motionDuration(reduce, 0.45),
                delay: reduce ? 0 : index * 0.08,
              }}
              className="relative pl-8 sm:pl-11"
            >
              {/* Timeline marker */}
              <span
                className={`absolute left-1 top-2.5 flex h-5 w-5 items-center justify-center rounded-full border sm:left-2 ${
                  entry.current
                    ? 'border-cyan bg-cyan/20 shadow-[0_0_14px_rgba(92,225,214,0.6)]'
                    : 'border-line bg-panel'
                }`}
                aria-hidden="true"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    entry.current ? 'bg-cyan' : 'bg-faint'
                  }`}
                />
              </span>

              <div
                className={`rounded-2xl border p-5 backdrop-blur-xl sm:p-6 ${
                  entry.current
                    ? 'border-cyan/30 bg-card/90 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                    : 'border-line bg-card/70'
                }`}
              >
                {/* Meta pills */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan">
                    <Calendar size={13} />
                    {entry.period}
                  </span>

                  {entry.current ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wide text-cyan uppercase">
                      <CheckCircle2 size={11} />
                      Current • {site.year}
                    </span>
                  ) : null}
                </div>

                {/* Degree & College */}
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {entry.credential}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-mute">
                  <GraduationCap size={15} className="shrink-0 text-cyan/70" />
                  {entry.institution}
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-faint">
                  <MapPin size={12} className="shrink-0" />
                  {entry.location}
                </p>

                {/* Coursework areas */}
                {entry.areas.length > 0 ? (
                  <div className="mt-4 border-t border-line/60 pt-3.5">
                    <p className="font-mono text-[10px] font-medium tracking-wider text-faint uppercase">
                      Coursework & Areas of Study
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {entry.areas.map((area) => (
                        <li
                          key={area}
                          className="rounded-lg border border-line bg-panel px-2.5 py-1 text-xs text-mute"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
