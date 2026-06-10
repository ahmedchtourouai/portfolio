import type { ReactNode } from "react"
import Reveal from "./Reveal"

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <Reveal>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300/80">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-6">{children}</div>
    </section>
  )
}
