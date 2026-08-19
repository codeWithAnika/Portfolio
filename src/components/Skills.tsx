import { useReducedMotion, motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.4)

  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Capabilities"
        title="Skills"
        description="Tools and technologies I am working with through coursework, labs, and development projects. These reflect current hands-on experience, not claimed mastery."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.id}
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration, delay: reduce ? 0 : index * 0.04 }}
            className="rounded-2xl border border-line bg-card/80 p-5 backdrop-blur sm:p-6"
          >
            <h3 className="font-mono text-[11px] tracking-[0.16em] text-cyan uppercase">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
