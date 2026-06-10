import { projects } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Case studies">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.04}
            className="flex min-h-[260px] flex-col rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300/80">
              {project.context}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-200/78">{project.description}</p>
            <p className="mt-4 text-sm font-medium text-teal-100">{project.impact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-slate-950/60 px-2 py-1 text-xs text-slate-200/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
