import { motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, Compass, GraduationCap, MapPin } from 'lucide-react'
import { site } from '../data/site'
import { fadeUp, motionDuration } from '../lib/motion'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function About() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.5)

  return (
    <Section id="about" labelledBy="about-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration }}
      >
        <SectionHeading id="about-heading" eyebrow="Introduction" title="About Me" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-mute">
            <p>
              I&apos;m an aspiring Cybersecurity and Digital Forensics student in
              the B.Tech Cyber Security program at Shah and Anchor Kutchhi
              Engineering College, Mumbai. I build my skills through academic
              projects, security labs, practical exercises, and internship
              experience.
            </p>
            <p>
              My work includes ethical hacking exercises, vulnerability
              assessment, web application security testing, phishing analysis,
              network analysis, and digital forensics labs. I have worked with
              Kali Linux, Burp Suite, Wireshark, Nmap, FTK Imager, Scapy, Linux,
              and Windows.
            </p>
            <p>
              I&apos;m interested in DFIR, cyber investigations, web security,
              network security, and protecting modern IT environments, and I&apos;m
              looking for opportunities to continue developing my cybersecurity
              skills through practical work and collaboration.
            </p>
          </div>

          <aside className="rounded-2xl border border-line bg-card/80 p-6 backdrop-blur">
            <p className="font-mono text-[11px] tracking-[0.16em] text-cyan uppercase">
              Profile Snapshot
            </p>
            <dl className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
                <div>
                  <dt className="text-xs text-faint">Location</dt>
                  <dd className="mt-0.5 text-sm text-ink">{site.locationShort}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <GraduationCap size={16} className="mt-0.5 shrink-0 text-cyan" />
                <div>
                  <dt className="text-xs text-faint">Program</dt>
                  <dd className="mt-0.5 text-sm text-ink">{site.degreeFull}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <CalendarDays size={16} className="mt-0.5 shrink-0 text-cyan" />
                <div>
                  <dt className="text-xs text-faint">Academic Period</dt>
                  <dd className="mt-0.5 text-sm text-ink">{site.academicPeriod}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Compass size={16} className="mt-0.5 shrink-0 text-cyan" />
                <div>
                  <dt className="text-xs text-faint">Focus</dt>
                  <dd className="mt-0.5 text-sm text-ink">
                    Cybersecurity • DFIR • Web Security
                  </dd>
                </div>
              </div>
            </dl>
          </aside>
        </div>
      </motion.div>
    </Section>
  )
}
