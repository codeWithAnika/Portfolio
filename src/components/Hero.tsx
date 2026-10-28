import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, FolderGit2, Mail, MapPin, GraduationCap, FileText } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { site } from '../data/site'
import { fadeUp, motionDuration, stagger } from '../lib/motion'
import { useResumeExists } from '../lib/hooks'
import SecurityVisual from './SecurityVisual'

export default function Hero() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.55)
  const resumeExists = useResumeExists(site.resumePath)

  return (
    <section
      id="home"
      className="relative z-[1] overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28 md:pb-20 lg:px-10"
      aria-label="Introduction"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduce ? fadeUp : stagger}
        >
          {/* Professional Status Pill */}
          <motion.div
            variants={fadeUp}
            transition={{ duration }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/8 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-cyan uppercase"
          >
            <span className={reduce ? 'h-1.5 w-1.5 rounded-full bg-cyan' : 'lab-pulse'} aria-hidden="true" />
            Cybersecurity Student • Mumbai, India
          </motion.div>

          {/* Primary Name Heading */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.05 }}
            className="mt-4 font-display text-[2.65rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Anika Talavadekar
          </motion.h1>

          {/* Core Specialization Subtitle */}
          <motion.p
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.09 }}
            className="mt-3 font-mono text-base font-medium tracking-wide text-cyan sm:text-lg md:text-xl"
          >
            Cybersecurity Student | SOC • DFIR • AppSec
          </motion.p>

          {/* Factual Professional Overview */}
          <motion.p
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.13 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-[1.05rem]"
          >
            Third-year B.Tech Cyber Security student at Shah & Anchor Kutchhi Engineering College,
            Mumbai. Building verified hands-on competence across security operations, digital
            forensics and incident response, web & API security, and network traffic analysis
            through disciplined lab work and security assessments.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              <FolderGit2 size={16} />
              View Projects
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="View Anika's GitHub profile"
            >
              <GitHubIcon size={16} />
              View GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Connect with Anika on LinkedIn"
            >
              <LinkedInIcon size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>

            {resumeExists ? (
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Download Resume PDF"
              >
                <FileText size={16} />
                Resume
              </a>
            ) : null}
          </motion.div>
        </motion.div>

        {/* Hero Security Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: reduce ? 0 : 0.18 }}
          className="flex justify-center lg:justify-end"
        >
          <SecurityVisual />
        </motion.div>
      </div>

      {/* Fact-based Telemetry Cards */}
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay: reduce ? 0 : 0.28 }}
        className="mx-auto mt-12 grid w-full max-w-6xl gap-3 sm:grid-cols-3"
      >
        <div className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur">
          <p className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            <GraduationCap size={13} className="text-cyan" />
            Education & Program
          </p>
          <p className="mt-1.5 text-sm font-medium text-ink">{site.degree}</p>
          <p className="mt-0.5 text-xs text-mute">{site.college}</p>
        </div>

        <div className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur">
          <p className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            <MapPin size={13} className="text-cyan" />
            Location & Timeline
          </p>
          <p className="mt-1.5 text-sm font-medium text-ink">{site.locationShort}</p>
          <p className="mt-0.5 text-xs text-mute">Cohort {site.academicPeriod} • {site.year}</p>
        </div>

        <div className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur">
          <p className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            Internship Background
          </p>
          <p className="mt-1.5 text-sm font-medium text-ink">Future Interns</p>
          <p className="mt-0.5 text-xs text-mute">Cyber Security Intern (Completed)</p>
        </div>
      </motion.div>
    </section>
  )
}
