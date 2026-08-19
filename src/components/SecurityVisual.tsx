import { useReducedMotion } from 'framer-motion'

const accents = [
  { label: 'Network', status: 'Analysis', className: 'left-0 top-4 sm:left-[-1.25rem]' },
  { label: 'Forensics', status: 'Analysis', className: 'right-0 top-10 sm:right-[-1.5rem]' },
  { label: 'Security', status: 'Testing', className: 'bottom-16 left-0 sm:left-[-1.75rem]' },
  { label: 'Python', status: 'Development', className: 'bottom-6 right-0 sm:right-[-1.25rem]' },
] as const

export default function SecurityVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(92,225,214,0.14),transparent_62%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[-18px] rounded-full border border-cyan/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-[-36px] hidden rounded-full border border-white/6 sm:block"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 320 320"
        className="pointer-events-none absolute inset-[-8%] h-[116%] w-[116%] text-cyan/30"
        aria-hidden="true"
      >
        <circle cx="160" cy="160" r="148" fill="none" stroke="currentColor" strokeDasharray="3 10" />
        <circle cx="42" cy="88" r="3.5" fill="#5ce1d6" />
        <circle cx="278" cy="74" r="3" fill="#7aa8ff" />
        <circle cx="56" cy="246" r="3" fill="#a78bfa" />
        <circle cx="268" cy="252" r="3.5" fill="#5ce1d6" />
      </svg>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel photo-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 via-transparent to-azure/10" />
        <img
          src="/anika-vinit-talavadekar.jpg"
          alt="Anika Vinit Talavadekar"
          width={480}
          height={600}
          className="relative z-[1] aspect-[4/5] w-full object-cover object-top"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-void/70 to-transparent" />
      </div>

      {accents.map((item) => (
        <span
          key={`${item.label}-${item.status}`}
          className={`absolute z-[3] hidden rounded-full border border-line bg-panel/90 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-mute uppercase backdrop-blur sm:inline-flex ${item.className}`}
        >
          <span className={reduce ? 'mr-2 h-1.5 w-1.5 rounded-full bg-cyan' : 'lab-pulse mr-2'} />
          {item.label} {item.status}
        </span>
      ))}
    </div>
  )
}
