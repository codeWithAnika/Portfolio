import { ArrowUpRight } from 'lucide-react'
import { LinkedInIcon } from './SocialIcons'
import { site } from '../data/site'
import Section from './Section'

export default function Connect() {
  return (
    <Section id="connect" labelledBy="connect-heading">
      <div className="overflow-hidden rounded-2xl border border-line bg-card/80 p-6 backdrop-blur sm:p-10">
        <p className="font-mono text-[11px] tracking-[0.16em] text-azure uppercase">
          Professional
        </p>
        <h2
          id="connect-heading"
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Let&apos;s Connect
        </h2>
        <p className="mt-4 max-w-2xl text-mute">
          I&apos;m always interested in learning, collaborating, and connecting
          with people working across cybersecurity and technology.
        </p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-8"
        >
          <LinkedInIcon size={16} />
          Connect on LinkedIn
          <ArrowUpRight size={15} />
        </a>
      </div>
    </Section>
  )
}
