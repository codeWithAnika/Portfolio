import { motion, useReducedMotion } from 'framer-motion'
import { learningTopics } from '../data/site'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Learning() {
  const reduce = useReducedMotion()

  return (
    <Section id="learning" labelledBy="learning-heading">
      <SectionHeading
        id="learning-heading"
        eyebrow="Growth"
        title="Currently Learning & Exploring"
        description="Areas I am actively studying. These are in progress — not claims of mastery."
      />

      <ul className="flex flex-wrap gap-2.5">
        {learningTopics.map((topic, index) => (
          <motion.li
            key={topic}
            initial={{ opacity: 0, y: reduce ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: motionDuration(reduce, 0.35),
              delay: reduce ? 0 : index * 0.04,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3.5 py-2 text-sm text-ink"
          >
            {topic}
            <span className="rounded-full bg-cyan/10 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-cyan uppercase">
              Exploring
            </span>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}
