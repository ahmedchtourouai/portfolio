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
    <section id={id} className="scroll-mt-24 py-16">
      <Reveal>
        {eyebrow ? (
          <p className="section-eyebrow">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="section-title">
          {title}
        </h2>
      </Reveal>
      <div className="mt-6">{children}</div>
    </section>
  )
}
