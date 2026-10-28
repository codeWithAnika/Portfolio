import { motion, useReducedMotion } from 'framer-motion'
import { Shield, Terminal, Code } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

const groupIcons = {
  security: Shield,
  tools: Terminal,
  programming: Code,
}

export default function Skills() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.45)

  return (
    <Section id="skills" labelledBy="skills-heading">
      <SectionHeading
        id="skills-heading"
        eyebrow="Technical Competencies"
        title="Skills & Technologies"
        description="Categorized tools and technologies actively exercised through cybersecurity coursework, practical labs, and security projects. Displayed without artificial proficiency percentages."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.id as keyof typeof groupIcons] ?? Shield
          return (
            <motion.article
              key={group.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration, delay: reduce ? 0 : index * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-card/80 p-6 backdrop-blur transition-[border-color,background-color] duration-200 hover:border-cyan/30 hover:bg-card-hover"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {group.title}
                    </h3>
                    <p className="text-xs text-mute">{group.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                    Competencies & Tools
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-line bg-panel/90 px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-cyan/40 hover:bg-cyan/5 hover:text-cyan"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-line/60 pt-3">
                <p className="font-mono text-[10px] text-faint">
                  {group.items.length} verified technologies
                </p>
              </div>
            </motion.article>
          )
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-cyan/15 bg-gradient-to-r from-cyan/5 via-card/40 to-transparent p-4 sm:p-5">
        <p className="flex items-center gap-2 font-mono text-[11px] text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
          <span>
            <strong className="font-medium text-ink">Authentic Practice Note:</strong> All skills reflect active hands-on application in laboratory simulations, academic environments, or internship tasks—not claimed production masteries.
          </span>
        </p>
      </div>
    </Section>
  )
}
