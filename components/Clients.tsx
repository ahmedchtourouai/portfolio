import { clients } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Clients() {
  return (
    <Section id="clients" title="Selected AI & Data Engineering Missions" eyebrow="Client systems">
      <div className="space-y-5">
        {clients.map((client, index) => (
          <Reveal
            key={client.name}
            delay={index * 0.05}
            className="timeline-card rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300/80">
                  {client.businessContext}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-teal-200 hover:underline"
                  >
                    {client.name}
                  </a>
                </h3>
              </div>
              <span className="rounded-md border border-teal-300/15 bg-teal-300/10 px-2.5 py-1 text-xs font-medium text-teal-100">
                Enterprise mission
              </span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">System Built</p>
                <p className="mt-2 text-sm leading-6 text-slate-200/78">{client.systemBuilt}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">Contribution</p>
                <p className="mt-2 text-sm leading-6 text-slate-200/78">{client.contribution}</p>
              </div>
              <div className="rounded-lg border border-teal-300/15 bg-teal-300/10 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-200">Impact</p>
                <p className="mt-2 text-sm leading-6 text-slate-100">{client.impact}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {client.stack.map((technology) => (
                  <span
                    key={technology}
                    className="tech-badge rounded-md border border-white/10 bg-slate-950/60 text-slate-200/75"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
