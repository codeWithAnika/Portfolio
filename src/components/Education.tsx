import { motion, useReducedMotion } from 'framer-motion'
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
        eyebrow="Studies"
        title="Education"
      />

      <div className="relative max-w-3xl pl-2 sm:pl-4">
        <div
          className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-cyan/50 via-line to-line sm:left-[15px]"
          aria-hidden="true"
        />
        <div className="grid gap-6">
          {education.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, x: reduce ? 0 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: motionDuration(reduce, 0.45),
                delay: reduce ? 0 : index * 0.06,
              }}
              className="relative pl-8 sm:pl-10"
            >
              <span
                className={`absolute left-0 top-2 h-3 w-3 rounded-full border ${
                  entry.current
                    ? 'border-cyan bg-cyan shadow-[0_0_12px_rgba(92,225,214,0.45)]'
                    : 'border-line bg-panel'
                }`}
                aria-hidden="true"
              />
              <div className="rounded-2xl border border-line bg-card/80 p-5 backdrop-blur sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-cyan uppercase">
                    {entry.period}
                  </p>
                  {entry.current ? (
                    <span className="rounded-full border border-cyan/25 bg-cyan/10 px-2.5 py-1 text-[11px] text-cyan">
                      Current: {site.year}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {entry.institution}
                </h3>
                <p className="mt-1.5 text-mute">{entry.credential}</p>

                {entry.areas.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.areas.map((area) => (
                      <li key={area} className="chip">
                        {area}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
