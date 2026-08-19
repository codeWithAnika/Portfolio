import { useReducedMotion } from 'framer-motion'
import { motionDuration } from '../lib/motion'

interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const reduce = useReducedMotion()

  return (
    <div className="mb-10 md:mb-14">
      {eyebrow ? (
        <p
          className="mb-3 font-mono text-[11px] font-medium tracking-[0.22em] text-cyan uppercase"
          style={{
            transitionDuration: `${motionDuration(reduce, 0.4)}s`,
          }}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-[2.35rem] md:text-[2.7rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute md:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
