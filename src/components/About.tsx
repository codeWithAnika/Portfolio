import { motion, useReducedMotion } from 'framer-motion'
import {
  ShieldAlert,
  Search,
  Lock,
  Network,
  GraduationCap,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react'
import { site } from '../data/site'
import { focusAreas } from '../data/skills'
import { motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

const focusIcons = {
  soc: ShieldAlert,
  dfir: Search,
  appsec: Lock,
  netsec: Network,
}

export default function About() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.45)

  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="Profile & Specialization"
        title="About Me"
        description="Third-year B.Tech Cyber Security student focused on practical defense, security operations, and application resilience."
      />

      {/* Narrative & Profile Quick Specs */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
        <div className="space-y-4 text-base leading-relaxed text-mute sm:text-[1.05rem]">
          <p>
            I am a third-year undergraduate specializing in Cyber Security at{' '}
            <span className="font-medium text-ink">
              Shah & Anchor Kutchhi Engineering College
            </span>
            , Mumbai. My background is built upon hands-on lab work, academic engineering, and
            practical security internship experience.
          </p>
          <p>
            Rather than theoretical abstractions, I prioritize practical cybersecurity
            engineering: inspecting raw network packets, probing web applications and REST APIs for
            input sanitization and access-control flaws, parsing authentication logs for brute-force
            patterns, and conducting evidence analysis using industry-standard tools.
          </p>
          <p>
            I am preparing for cybersecurity internship opportunities in{' '}
            <span className="text-cyan">
              Security Operations (SOC), Digital Forensics (DFIR), and Application Security (AppSec)
            </span>
            , where I can apply rigorous investigative discipline and contribute to defensive
            security operations.
          </p>
        </div>

        {/* Profile Fact Sheet */}
        <aside className="h-fit rounded-2xl border border-line bg-card/80 p-6 backdrop-blur">
          <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-cyan uppercase">
            Academic & Professional Snapshot
          </p>

          <dl className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap size={16} className="mt-0.5 shrink-0 text-cyan" />
              <div>
                <dt className="text-xs text-faint">Academic Degree</dt>
                <dd className="text-sm font-medium text-ink">{site.degreeFull}</dd>
                <dd className="text-xs text-mute">{site.college}</dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar size={16} className="mt-0.5 shrink-0 text-cyan" />
              <div>
                <dt className="text-xs text-faint">Cohort Timeline</dt>
                <dd className="text-sm font-medium text-ink">{site.academicPeriod} (Current: {site.year})</dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
              <div>
                <dt className="text-xs text-faint">Location</dt>
                <dd className="text-sm font-medium text-ink">{site.locationShort}</dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers size={16} className="mt-0.5 shrink-0 text-cyan" />
              <div>
                <dt className="text-xs text-faint">Core Disciplines</dt>
                <dd className="text-sm font-medium text-cyan">
                  SOC • DFIR • AppSec • Network Analysis
                </dd>
              </div>
            </div>
          </dl>
        </aside>
      </div>

      {/* Cybersecurity Focus Cards */}
      <div className="mt-14">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-mono text-xs font-semibold tracking-[0.16em] text-cyan uppercase">
            Technical Focus Areas
          </h3>
          <span className="font-mono text-[11px] text-faint">Grounded in verified labs & coursework</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((card, index) => {
            const Icon = focusIcons[card.id as keyof typeof focusIcons] ?? ShieldAlert
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration, delay: reduce ? 0 : index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-line bg-card/75 p-5 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:bg-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan transition-colors group-hover:border-cyan/50 group-hover:bg-cyan/15">
                      <Icon size={18} />
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-faint uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-[11px] font-medium tracking-wide text-cyan">
                    {card.domain}
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold tracking-tight text-ink">
                    {card.title}
                  </h4>
                  <p className="mt-2.5 text-xs leading-relaxed text-mute">
                    {card.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-line/60 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {card.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line/80 bg-panel px-2 py-0.5 text-[10px] text-mute"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
