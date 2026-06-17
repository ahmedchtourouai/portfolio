import { education, profile } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function About() {
  return (
    <Section id="about" title="About" eyebrow="Profile">
      <Reveal className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p className="text-base leading-8 text-slate-200/85">
            {profile.about}
          </p>
        </div>
        <aside className="rounded-lg border border-white/10 bg-slate-950/60 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300/90">
            Education
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200/80">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </Reveal>
    </Section>
  )
}
