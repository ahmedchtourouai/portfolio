import Reveal from "./ui/Reveal"

const approachItems = [
  {
    code: "P-01",
    title: "Ship at Speed",
    description:
      "Move quickly from idea to working prototype, then iterate with clear engineering checkpoints, measurable feedback, and production constraints in mind.",
  },
  {
    code: "P-02",
    title: "Enterprise Discipline",
    description:
      "Design AI and data systems with maintainable architecture, observability, documentation, and delivery practices that teams can operate reliably.",
  },
  {
    code: "P-03",
    title: "Security by Design",
    description:
      "Treat access control, data privacy, prompt safety, secrets management, and secure integrations as first-class parts of every AI workflow.",
  },
  {
    code: "P-04",
    title: "Built to Scale",
    description:
      "Build pipelines, retrieval systems, automations, and dashboards that can grow from proof of concept to real workloads without rewriting the core.",
  },
  {
    code: "P-05",
    title: "Made to Fit",
    description:
      "Adapt the solution to business context, team workflows, data maturity, and existing cloud or analytics environments instead of forcing generic tools.",
  },
  {
    code: "P-06",
    title: "Proof of Impact",
    description:
      "Connect delivery to measurable outcomes such as retrieval quality, forecasting accuracy, automation coverage, reporting speed, and user adoption.",
  },
]

const domains = [
  {
    title: "Retail & Fashion",
    icon: "RF",
    items: ["Product intelligence systems", "Semantic search & recommendation engines", "Brand knowledge assistants"],
  },
  {
    title: "Healthcare / Medical AI",
    icon: "HM",
    items: ["Diagnostic support systems", "Multimodal AI pipelines", "Structured + unstructured data fusion"],
  },
  {
    title: "Industry / Manufacturing",
    icon: "IM",
    items: ["Operational analytics platforms", "Predictive maintenance systems", "Data pipeline automation"],
  },
  {
    title: "Supply Chain & Logistics",
    icon: "SL",
    items: ["Demand forecasting systems", "Real-time orchestration", "KPI dashboards"],
  },
  {
    title: "Marketing & Digital Intelligence",
    icon: "MI",
    items: ["Social media intelligence pipelines", "Multimodal content scoring", "Marketing funnel prediction systems"],
  },
]

export default function ApproachExpertise() {
  return (
    <section id="approach" className="scroll-mt-24 py-16">
      <Reveal>
        <p className="section-eyebrow">Approach + Expertise</p>
        <h2 className="section-title">How I Turn AI Ideas Into Production Systems</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200/75">
          I work at the intersection of applied AI, cloud data platforms, and product delivery: fast enough to validate,
          disciplined enough to scale, and practical enough to create business value.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {approachItems.map((item, index) => (
            <Reveal
              key={item.code}
              delay={index * 0.05}
              className="approach-card rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="approach-code">{item.code}</span>
                <span className="approach-icon" aria-hidden="true">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200/72">{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="expertise-panel rounded-lg border border-teal-300/15 p-5">
          <p className="section-eyebrow">Domains of Expertise</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Where AI Systems Create Leverage</h3>
          <div className="mt-5 grid gap-3">
            {domains.map((domain, index) => (
              <Reveal
                key={domain.title}
                delay={0.16 + index * 0.05}
                className="domain-card rounded-lg border border-white/10 bg-slate-950/50 p-4"
              >
                <div className="flex gap-3">
                  <span className="domain-icon" aria-hidden="true">
                    {domain.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{domain.title}</h4>
                    <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-200/72">
                      {domain.items.map((item) => (
                        <li key={item} className="pl-4 before:-ml-4 before:mr-2 before:text-teal-300 before:content-['-']">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
