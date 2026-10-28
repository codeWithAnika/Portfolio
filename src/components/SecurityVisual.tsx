import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Terminal, Cpu, Network } from 'lucide-react'

const capabilities = [
  { label: 'SOC', detail: 'Threat Detection', icon: ShieldCheck },
  { label: 'DFIR', detail: 'Forensic Triage', icon: Terminal },
  { label: 'AppSec', detail: 'API & Web Testing', icon: Cpu },
  { label: 'NetSec', detail: 'Traffic Analysis', icon: Network },
] as const

export default function SecurityVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[25rem] lg:max-w-[27rem]">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-cyan/15 via-azure/10 to-transparent blur-2xl"
        aria-hidden="true"
      />

      {/* Decorative radar reticle */}
      <svg
        viewBox="0 0 360 360"
        className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-cyan/20 opacity-80"
        aria-hidden="true"
      >
        <circle
          cx="180"
          cy="180"
          r="165"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle
          cx="180"
          cy="180"
          r="135"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line x1="180" y1="0" x2="180" y2="360" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 6" />
        <line x1="0" y1="180" x2="360" y2="180" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 6" />
        <circle cx="50" cy="95" r="3" fill="#5ce1d6" />
        <circle cx="310" cy="80" r="2.5" fill="#7aa8ff" />
        <circle cx="65" cy="285" r="2.5" fill="#a78bfa" />
        <circle cx="300" cy="275" r="3" fill="#5ce1d6" />
      </svg>

      {/* Main framed photo card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-panel/90 p-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {/* Top telemetry bar */}
        <div className="mb-2.5 flex items-center justify-between rounded-2xl border border-white/6 bg-void/80 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.14em] text-mute uppercase">
          <span className="flex items-center gap-1.5 text-cyan">
            <span className={reduce ? 'h-1.5 w-1.5 rounded-full bg-cyan' : 'lab-pulse'} aria-hidden="true" />
            Verified Profile
          </span>
          <span className="text-[9px] text-faint">B.Tech CS • Yr 3</span>
        </div>

        {/* Real photo container */}
        <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-card">
          <img
            src="/anika-vinit-talavadekar.jpg"
            alt="Anika Talavadekar"
            width={480}
            height={600}
            loading="eager"
            className="aspect-[4/5] w-full object-cover object-top filter brightness-[0.98] contrast-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />

          {/* Overlay identity badge */}
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-void/85 p-3 backdrop-blur-md">
            <p className="font-display text-sm font-semibold tracking-wide text-ink">
              Anika Talavadekar
            </p>
            <p className="mt-0.5 font-mono text-[10px] tracking-[0.12em] text-cyan uppercase">
              Cybersecurity Student
            </p>
            <p className="mt-1 text-[11px] leading-tight text-mute">
              Shah & Anchor Kutchhi Engineering College
            </p>
          </div>
        </div>

        {/* Quick focus badges below photo */}
        <div className="mt-2.5 grid grid-cols-2 gap-1.5">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                className="flex items-center gap-2 rounded-xl border border-line bg-card/60 px-2.5 py-1.5 transition-colors hover:border-cyan/30"
              >
                <Icon size={13} className="shrink-0 text-cyan" />
                <div className="min-w-0">
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-ink uppercase">
                    {item.label}
                  </p>
                  <p className="truncate text-[10px] text-mute">{item.detail}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
