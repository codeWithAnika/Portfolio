import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, ShieldCheck, Network, Terminal, CheckCircle } from 'lucide-react'
import { certifications, type CertificationItem } from '../data/site'
import { motionDuration } from '../lib/motion'
import { cn } from '../lib/cn'
import Section from './Section'
import SectionHeading from './SectionHeading'

const filterCategories = [
  { id: 'all', label: 'All Certifications' },
  { id: 'Palo Alto Networks', label: 'Palo Alto Networks' },
  { id: 'Cisco', label: 'Cisco' },
  { id: 'Foundations', label: 'CTF & Foundations' },
] as const

const issuerIcons = {
  'Palo Alto Networks': ShieldCheck,
  'Cisco': Network,
  'CTF & Foundations': Award,
  'Programming & Systems': Terminal,
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.35)

  const filtered = certifications.filter((item: CertificationItem) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'Palo Alto Networks') return item.issuer === 'Palo Alto Networks'
    if (activeFilter === 'Cisco') return item.issuer === 'Cisco'
    if (activeFilter === 'Foundations') {
      return item.issuer === 'CTF & Foundations' || item.issuer === 'Programming & Systems'
    }
    return true
  })

  return (
    <Section id="certifications" labelledBy="certifications-heading">
      <SectionHeading
        id="certifications-heading"
        eyebrow="Verified Credentials"
        title="Certifications & Training"
        description="Completed coursework and certifications across security operations, networking, cloud security, and systems engineering. Displayed without fabricated credential IDs or dates."
      />

      {/* Filter Tabs */}
      <div
        className="mb-8 inline-flex max-w-full flex-wrap gap-1 rounded-2xl border border-line bg-panel/80 p-1.5 backdrop-blur"
        role="group"
        aria-label="Filter certifications by issuer"
      >
        {filterCategories.map((tab) => {
          const isActive = activeFilter === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(tab.id)}
              className={cn(
                'rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200',
                isActive
                  ? 'bg-cyan/15 text-cyan shadow-[inset_0_0_10px_rgba(92,225,214,0.15)]'
                  : 'text-mute hover:text-ink',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Structured Certification Cards */}
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cert: CertificationItem, index: number) => {
          const Icon = issuerIcons[cert.issuer] ?? Award
          return (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: reduce ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration, delay: reduce ? 0 : index * 0.03 }}
              className="group flex flex-col justify-between rounded-2xl border border-line bg-card/80 p-5 transition-[border-color,background-color] duration-200 hover:border-cyan/35 hover:bg-card-hover"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10 text-cyan">
                    <Icon size={16} />
                  </span>

                  <span className="font-mono text-[10px] tracking-wider text-faint uppercase">
                    {cert.category}
                  </span>
                </div>

                <p className="mt-3.5 font-mono text-[10px] font-semibold tracking-wider text-cyan uppercase">
                  {cert.issuer}
                </p>

                <h3 className="mt-1 font-display text-sm font-semibold leading-snug text-ink sm:text-[0.95rem]">
                  {cert.name}
                </h3>
              </div>

              <div className="mt-4 flex items-center gap-1.5 border-t border-line/60 pt-3 font-mono text-[10px] text-faint">
                <CheckCircle size={12} className="text-cyan/70" />
                Verified Coursework Completion
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
