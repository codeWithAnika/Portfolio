import { ArrowUp, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { site } from '../data/site'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-[1] border-t border-white/6 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded border border-cyan/40 bg-cyan/10 font-mono text-xs text-cyan">
              A
            </span>
            <p className="font-display text-sm font-bold tracking-[0.14em] text-ink">
              {site.name}
            </p>
          </div>
          <p className="mt-1.5 text-xs text-mute">
            {site.role} • {site.locationShort}
          </p>
          <p className="mt-1 font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {site.name}. All verified coursework & projects grounded in academic records.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-mute transition-colors hover:text-ink"
              >
                <Mail size={14} />
                Email
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-mute transition-colors hover:text-ink"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-mute transition-colors hover:text-ink"
              >
                <LinkedInIcon size={14} />
                LinkedIn
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 rounded-lg border border-line bg-card/60 px-2.5 py-1 font-mono text-[11px] text-mute transition-colors hover:border-cyan/40 hover:text-cyan"
            aria-label="Back to top"
          >
            <ArrowUp size={13} />
            Top
          </button>
        </div>
      </div>
    </footer>
  )
}
