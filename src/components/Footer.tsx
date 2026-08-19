import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/6 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-ink">
            {site.shortName}
          </p>
          <p className="mt-2 text-sm text-mute">
            {site.name} · {site.locationShort}
          </p>
          <p className="mt-1 text-xs text-faint">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-5">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
            >
              <Mail size={15} />
              Email
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-ink"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
