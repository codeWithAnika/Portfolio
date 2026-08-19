import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
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
        'fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-white/8 bg-void/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-[3.6rem] lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-[1.05rem] font-bold tracking-[0.18em] text-ink"
        >
          {site.shortName}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-md px-2.5 py-1.5 text-[13px] font-medium tracking-wide transition-colors',
                    isActive ? 'text-ink' : 'text-mute hover:text-ink',
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-cyan" />
                  ) : null}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {resumeExists ? (
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-mute uppercase transition-colors hover:border-cyan/40 hover:text-ink"
            >
              Resume
            </a>
          ) : null}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-mute transition-colors hover:text-ink"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-mute transition-colors hover:text-ink"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: motionDuration(reduce, 0.28) }}
            className="overflow-hidden border-t border-line bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => {
                const id = link.href.slice(1)
                const isActive = active === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-3 text-base',
                        isActive ? 'bg-card text-ink' : 'text-mute',
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-4 border-t border-line px-8 py-4">
              {resumeExists ? (
                <a
                  href={site.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] tracking-[0.14em] text-cyan uppercase"
                >
                  Resume
                </a>
              ) : null}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mute"
                aria-label="GitHub profile"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mute"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={20} />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
