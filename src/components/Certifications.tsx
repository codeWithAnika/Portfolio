import { motion, useReducedMotion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/site'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

function issuerFromTitle(title: string) {
  if (title.startsWith('Cisco')) return 'Cisco'
  if (title.startsWith('Palo Alto Networks')) return 'Palo Alto Networks'
  if (title.startsWith('Saylor Academy')) return 'Saylor Academy'
  if (title.startsWith('EduPyramids')) return 'EduPyramids'
  if (title.startsWith('Root Access')) return 'Root Access'
  return null
}

export default function Certifications() {
  const reduce = useReducedMotion()

  return (
    <Section id="certifications" labelledBy="certifications-heading">
      <SectionHeading
        id="certifications-heading"
        eyebrow="Credentials"
        title="Certifications"
        description="Courses and certifications I have completed. Dates, scores, and credential IDs are not listed unless they are on file."
      />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, index) => {
          const issuer = issuerFromTitle(item)
          return (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: motionDuration(reduce, 0.35),
                delay: reduce ? 0 : index * 0.03,
              }}
              className="group rounded-2xl border border-line bg-card/80 p-4 transition-colors hover:border-white/12 hover:bg-card-hover"
            >
              <Award size={16} className="text-cyan/80" />
              {issuer ? (
                <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-faint uppercase">
                  {issuer}
                </p>
              ) : null}
              <p className="mt-1.5 text-sm leading-snug text-ink">{item}</p>
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
