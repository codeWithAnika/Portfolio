import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'contact',
] as const

export function useActiveSection() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

export function useResumeExists(path: string) {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(path, { method: 'HEAD' })
      .then((response) => {
        const type = response.headers.get('content-type') ?? ''
        if (
          !cancelled &&
          response.ok &&
          !type.includes('text/html')
        ) {
          setExists(true)
        }
      })
      .catch(() => {
        /* Resume is optional until the PDF is added to /public */
      })

    return () => {
      cancelled = true
    }
  }, [path])

  return exists
}
