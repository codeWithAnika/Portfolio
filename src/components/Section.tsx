import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export default function Section({
  id,
  children,
  className,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative z-[1] border-t border-white/6 px-5 py-20 sm:px-8 md:py-24 lg:px-10',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
