import { experience } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Selected work">
      <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-4">
        {experience.map((item, index) => (
          <Reveal key={`${item.client}-${item.role}`} delay={index * 0.04} className="relative pl-10 md:pl-12">
            <span className="absolute left-[7px] top-7 h-3 w-3 rounded-full border border-teal-200 bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.45)] md:left-[11px]" />
            <article className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-teal-300/30">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}{" "}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-200 underline-offset-4 hover:underline"
                      >
                        @ {item.client}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-slate-300/75">{item.dates}</p>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-200/80">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="before:mr-2 before:text-teal-300 before:content-['-']">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-xs text-slate-200/75"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
