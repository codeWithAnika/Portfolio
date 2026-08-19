import { useState, type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { site } from '../data/site'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Section id="contact" labelledBy="contact-heading">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Have an opportunity or idea?"
            description="This site is static, so the form opens your email client with the message filled in. You can also write directly."
          />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/8 px-4 py-2 text-sm text-cyan transition-colors hover:border-cyan/50 hover:text-ink"
          >
            <Mail size={16} />
            {site.email}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-card/80 p-5 backdrop-blur sm:p-7"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="text-[11px] tracking-wide text-faint uppercase">
                Name
              </span>
              <input
                required
                name="name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-panel px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-cyan/50"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-wide text-faint uppercase">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-panel px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-cyan/50"
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-wide text-faint uppercase">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 w-full resize-y rounded-lg border border-line bg-panel px-3 py-2.5 text-ink outline-none transition-colors placeholder:text-faint focus:border-cyan/50"
                placeholder="What would you like to discuss?"
              />
            </label>
            <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
              Send Message
            </button>
            {submitted ? (
              <p className="text-sm text-mute" role="status">
                Your email client should open with this message. If it does not,
                write to {site.email}.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </Section>
  )
}
