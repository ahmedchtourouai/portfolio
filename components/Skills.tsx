import { skillGroups } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Capabilities">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.05}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="font-semibold text-white">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-200/72">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="skill-tag rounded-md border border-teal-300/15 bg-teal-300/10 px-2.5 py-1 text-xs font-medium text-teal-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
