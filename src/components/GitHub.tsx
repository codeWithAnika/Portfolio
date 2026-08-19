import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { site } from '../data/site'
import Section from './Section'

export default function GitHubSection() {
  return (
    <Section id="github" labelledBy="github-heading">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-card via-card to-azure/10 p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan/10 blur-3xl" />
        <p className="font-mono text-[11px] tracking-[0.16em] text-cyan uppercase">
          Repositories
        </p>
        <h2
          id="github-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Code, Projects & Experiments
        </h2>
        <p className="mt-4 max-w-2xl text-mute">
          Explore my GitHub for projects, experiments, coursework, and
          development work.
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          <GitHubIcon size={16} />
          View GitHub
          <ArrowUpRight size={15} />
        </a>
        <p className="mt-4 font-mono text-xs text-faint">
          github.com/{site.githubUsername}
        </p>
      </div>
    </Section>
  )
}
