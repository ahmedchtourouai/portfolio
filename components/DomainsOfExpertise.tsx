import { domainsOfExpertise } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function DomainsOfExpertise() {
  return (
    <Section id="domains" title="Domains of Expertise" eyebrow="Technical focus">
      <div className="grid gap-4 md:grid-cols-2">
        {domainsOfExpertise.map((domain, index) => (
          <Reveal
            key={domain.code}
            delay={index * 0.05}
            className="domain-card rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="approach-code">{domain.code}</span>
              <span className="domain-icon" aria-hidden="true">
                {domain.code.slice(2)}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">{domain.title}</h3>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-200/78">
              <p>
                <span className="font-semibold text-teal-100">Problem: </span>
                {domain.problem}
              </p>
              <p>
                <span className="font-semibold text-teal-100">Systems: </span>
                {domain.systems}
              </p>
              <p>
                <span className="font-semibold text-teal-100">Scope: </span>
                {domain.scope}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {domain.stack.map((tool) => (
                <span
                  key={tool}
                  className="tech-badge rounded-md border border-white/10 bg-slate-950/60 text-slate-200/75"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
