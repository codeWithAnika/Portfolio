import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { site, navLinks } from '../data/site'
import { useActiveSection, useResumeExists } from '../lib/hooks'
import { cn } from '../lib/cn'
import { motionDuration } from '../lib/motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()
  const resumeExists = useResumeExists(site.resumePath)
  const reduce = useReducedMotion()
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter,box-shadow] duration-300',
        scrolled || open
          ? 'border-b border-white/8 bg-void/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        {/* Brand logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-[1.1rem] font-bold tracking-[0.14em] text-ink"
          aria-label="Anika Talavadekar - Home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan transition-colors group-hover:border-cyan group-hover:bg-cyan/20">
            A
          </span>
          <span>{site.shortName}</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/8 bg-panel/60 p-1 backdrop-blur lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-200',
                    isActive
                      ? 'bg-cyan/15 text-cyan shadow-[inset_0_0_12px_rgba(92,225,214,0.15)]'
                      : 'text-mute hover:text-ink',
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop action links */}
        <div className="hidden items-center gap-2 lg:flex">
          {resumeExists ? (
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/8 px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.12em] text-cyan uppercase transition-colors hover:border-cyan hover:bg-cyan/15"
            >
              <FileText size={13} />
              Resume
            </a>
          ) : null}

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-lg border border-line bg-card/60 p-2 text-mute transition-colors hover:border-cyan/40 hover:text-ink"
          >
            <GitHubIcon size={17} />
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-lg border border-line bg-card/60 p-2 text-mute transition-colors hover:border-cyan/40 hover:text-ink"
          >
            <LinkedInIcon size={17} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-line bg-card/60 p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: motionDuration(reduce, 0.25) }}
            className="overflow-hidden border-t border-line bg-void/98 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="px-5 py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const id = link.href.slice(1)
                  const isActive = active === id
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                          isActive
                            ? 'border border-cyan/25 bg-cyan/10 text-cyan'
                            : 'text-mute hover:bg-card hover:text-ink',
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <span>{link.label}</span>
                        {isActive ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                        ) : null}
                      </a>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-4 flex flex-col gap-2.5 border-t border-line pt-4">
                {resumeExists ? (
                  <a
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan/30 bg-cyan/10 py-2.5 font-mono text-xs font-medium tracking-[0.14em] text-cyan uppercase"
                    onClick={() => setOpen(false)}
                  >
                    <FileText size={15} />
                    Download Resume PDF
                  </a>
                ) : null}

                <div className="flex items-center justify-around gap-2 pt-1">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-card/60 py-2.5 text-xs text-mute transition-colors hover:text-ink"
                  >
                    <GitHubIcon size={16} />
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-card/60 py-2.5 text-xs text-mute transition-colors hover:text-ink"
                  >
                    <LinkedInIcon size={16} />
                    LinkedIn
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
