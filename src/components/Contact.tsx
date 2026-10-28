import { useState, type FormEvent } from 'react'
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Globe,
  Send,
  MapPin,
  Clock,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { site } from '../data/site'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subjectType, setSubjectType] = useState('Cybersecurity Internship')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText(site.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`[${subjectType}] Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Type: ${subjectType}\n\nMessage:\n${message}\n\n— Sent via Portfolio`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading
        id="contact-heading"
        eyebrow="Direct Communication"
        title="Contact & Professional Links"
        description="Available for cybersecurity internship opportunities, SOC/DFIR/AppSec trainee programs, and technical collaborations."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        {/* Recruiter Information Hub */}
        <div className="space-y-4">
          {/* Quick status bar */}
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-cyan/20 bg-cyan/5 p-4 text-xs font-mono">
            <span className="flex items-center gap-2 text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" aria-hidden="true" />
              Available for Cybersecurity Internships
            </span>
            <span className="text-faint">•</span>
            <span className="flex items-center gap-1.5 text-mute">
              <MapPin size={13} className="text-cyan" />
              {site.locationShort}
            </span>
            <span className="text-faint">•</span>
            <span className="flex items-center gap-1.5 text-mute">
              <Clock size={13} className="text-cyan" />
              IST (UTC+5:30)
            </span>
          </div>

          {/* Email card with copy & mailto */}
          <div className="rounded-2xl border border-line bg-card/80 p-5 backdrop-blur transition-colors hover:border-cyan/35">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-faint uppercase">
                    Primary Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-0.5 block text-sm font-medium text-ink transition-colors hover:text-cyan sm:text-base"
                  >
                    {site.email}
                  </a>
                  <p className="mt-1 text-xs text-mute">
                    Click to launch default mail client
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-mute transition-colors hover:border-cyan/40 hover:text-ink"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-cyan" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-line bg-card/80 p-5 backdrop-blur transition-[border-color,background-color] hover:border-cyan/35 hover:bg-card-hover"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                <LinkedInIcon size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-faint uppercase">
                  LinkedIn Network
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink group-hover:text-cyan sm:text-base">
                  linkedin.com/in/anika-talavadekar-b83969376
                </p>
                <p className="mt-0.5 text-xs text-mute">
                  Professional credentials & networking
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
          </a>

          {/* GitHub Profile Card */}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-line bg-card/80 p-5 backdrop-blur transition-[border-color,background-color] hover:border-cyan/35 hover:bg-card-hover"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                <GitHubIcon size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-faint uppercase">
                  Source Code & Labs
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink group-hover:text-cyan sm:text-base">
                  github.com/{site.githubUsername}
                </p>
                <p className="mt-0.5 text-xs text-mute">
                  Cybersecurity task repositories & coursework
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
          </a>

          {/* Deployed Portfolio Card */}
          <a
            href={site.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-line bg-card/80 p-5 backdrop-blur transition-[border-color,background-color] hover:border-cyan/35 hover:bg-card-hover"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                <Globe size={18} />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-faint uppercase">
                  Live Portfolio
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink group-hover:text-cyan sm:text-base">
                  {site.liveUrl.replace('https://', '').replace(/\/$/, '')}
                </p>
                <p className="mt-0.5 text-xs text-mute">
                  Production Vercel deployment
                </p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-mute transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
          </a>
        </div>

        {/* Dispatch Message Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between rounded-3xl border border-line bg-card/80 p-6 backdrop-blur sm:p-8"
        >
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-ink">
              Send a Direct Message
            </h3>
            <p className="mt-1 text-xs text-mute">
              Generates a pre-formatted email directly addressed to {site.email}.
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="font-mono text-[11px] font-medium tracking-wide text-faint uppercase">
                  Your Name *
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Jane Doe / Recruiter"
                  className="mt-1.5 w-full rounded-xl border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-cyan/50"
                />
              </label>

              <label className="block">
                <span className="font-mono text-[11px] font-medium tracking-wide text-faint uppercase">
                  Your Email *
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="recruiter@company.com"
                  className="mt-1.5 w-full rounded-xl border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-cyan/50"
                />
              </label>

              <label className="block">
                <span className="font-mono text-[11px] font-medium tracking-wide text-faint uppercase">
                  Inquiry Purpose
                </span>
                <select
                  value={subjectType}
                  onChange={(event) => setSubjectType(event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan/50"
                >
                  <option value="Cybersecurity Internship">Cybersecurity Internship Opportunity</option>
                  <option value="SOC / DFIR / AppSec Role">SOC / DFIR / AppSec Trainee Role</option>
                  <option value="Technical Collaboration">Technical Project Collaboration</option>
                  <option value="General Inquiry">General Professional Networking</option>
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-[11px] font-medium tracking-wide text-faint uppercase">
                  Message *
                </span>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Please describe the opportunity or inquiry details..."
                  className="mt-1.5 w-full resize-y rounded-xl border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-cyan/50"
                />
              </label>
            </div>
          </div>

          <div className="mt-6 border-t border-line/60 pt-5">
            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              <Send size={15} />
              Open In Email Client
            </button>

            {submitted ? (
              <p className="mt-3 text-center text-xs text-cyan" role="status">
                Opening default mail application. You can also write directly to{' '}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Section>
  )
}
