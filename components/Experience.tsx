import { experience } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Experience() {
  return (
    <Section id="experience" title="Experience \u2014 Missions" eyebrow="Mission-based experience">
      <div className="timeline relative space-y-6">
        {experience.map((item, index) => (
          <Reveal
            key={`${item.role}-${item.dates}`}
            delay={index * 0.05}
            className="timeline-item relative pl-10 md:pl-12"
          >
            <span className="timeline-dot" />
            <article className="timeline-card rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-xs text-slate-400">{item.dates}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-lg border border-teal-300/15 bg-teal-300/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-200">Mission</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{item.mission}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">Context</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200/78">{item.context}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">Challenge</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200/78">{item.challenge}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">Solution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200/78">{item.solution}</p>
                </div>
                <div className="rounded-lg border border-teal-300/15 bg-teal-300/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-200">Impact</p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">{item.impact}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-xs text-slate-200/75"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
