import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { site } from '../data/site'
import { fadeUp, motionDuration, stagger } from '../lib/motion'
import SecurityVisual from './SecurityVisual'

export default function Hero() {
  const reduce = useReducedMotion()
  const duration = motionDuration(reduce, 0.55)

  return (
    <section
      id="home"
      className="relative z-[1] overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28 md:pb-24 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(280px,0.92fr)] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduce ? fadeUp : stagger}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration }}
            className="font-mono text-[11px] font-medium tracking-[0.18em] text-cyan uppercase"
          >
            Cyber Security • Digital Forensics • Ethical Hacking
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.05 }}
            className="mt-5 font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.65rem]"
          >
            Cyber Security Student. Digital Forensics & Security.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.1 }}
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-mute"
          >
            I&apos;m Anika Vintal Talavadekar, a third-year B.Tech Cyber Security
            student at Shah and Anchor Kutchhi Engineering College, building
            hands-on academic, lab, and project experience across cybersecurity,
            digital forensics, ethical hacking, web application security, and
            network security.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration, delay: reduce ? 0 : 0.16 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-sm text-mute transition-colors hover:text-ink"
            >
              <GitHubIcon size={16} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-2 text-sm text-mute transition-colors hover:text-ink"
            >
              <LinkedInIcon size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: reduce ? 0 : 0.18 }}
          className="flex justify-center lg:justify-end"
        >
          <SecurityVisual />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, delay: reduce ? 0 : 0.28 }}
        className="mx-auto mt-12 grid w-full max-w-6xl gap-3 sm:grid-cols-3"
      >
        <div className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur">
          <p className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            <MapPin size={12} />
            Location
          </p>
          <p className="mt-1.5 text-sm text-ink">{site.locationShort}</p>
        </div>
        <div className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur">
          <p className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            Program
          </p>
          <p className="mt-1.5 text-sm text-ink">{site.degree}</p>
        </div>
        <div className="rounded-2xl border border-line bg-card/70 p-4 backdrop-blur">
          <p className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
            Academic period
          </p>
          <p className="mt-1.5 text-sm text-ink">{site.academicPeriod}</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: reduce ? 0 : 0.34 }}
        className="mx-auto mt-5 flex w-full max-w-6xl items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-2 font-mono text-[10px] leading-relaxed tracking-[0.12em] text-cyan uppercase sm:w-fit"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
        Open to cybersecurity opportunities • collaboration • continuous learning
      </motion.p>
    </section>
  )
}
