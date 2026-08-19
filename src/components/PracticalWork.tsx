import { motion, useReducedMotion } from 'framer-motion'
import { practicalWork } from '../data/practical'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function PracticalWork() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.45)

  return (
    <Section id="practical" labelledBy="practical-heading">
      <SectionHeading
        id="practical-heading"
        eyebrow="Labs"
        title="Learning by Doing"
        description="Hands-on academic and laboratory activities. These are coursework and lab exercises, not professional engagements."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {practicalWork.map((card, index) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, delay: reduce ? 0 : index * 0.05 }}
            className="rounded-2xl border border-line bg-card/80 p-5 backdrop-blur"
          >
            <p className="font-mono text-[11px] tracking-[0.2em] text-faint">
              {card.number}
            </p>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">
              {card.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-2 font-mono text-[12px] tracking-wide text-mute"
                >
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
