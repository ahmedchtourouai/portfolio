"use client"
import { motion } from 'framer-motion'

const items = [
  {
    role: 'Generative AI Engineer — Internal Commercial Support',
    company: 'OliveSoft',
    dates: 'Dec 2025 – Present',
    bullets: [
      'Built 10+ POCs around agentic AI and LLM-based solutions improving automation and decision workflows.',
      'Defined GenAI best practices for prompt engineering, evaluation frameworks and production readiness.',
      'Implemented evaluation pipelines and delivered technical demos to stakeholders.'
    ]
  },
  {
    role: 'Generative AI Engineer — Jacquemus (contract)',
    company: 'Jacquemus / OliveSoft',
    dates: 'Sep 2025 – Dec 2025',
    bullets: [
      'Developed an agent-based enterprise search system integrating Confluence, improving retrieval efficiency by 35%.',
      'Built LLM evaluation framework and observability using Langfuse for latency, cost and quality metrics.'
    ]
  },
  {
    role: 'Data Scientist',
    company: 'MPBS',
    dates: 'Mar 2025 – Dec 2025',
    bullets: [
      'Delivered demand and revenue forecasts on GCP Vertex AI improving forecast accuracy by 20%.',
      'Automated retraining and CI/CD pipelines via Cloud Build, reducing operational bottlenecks by 30%.'
    ]
  },
  {
    role: 'AI Engineer',
    company: 'Kwore',
    dates: 'Feb 2024 – Mar 2025',
    bullets: [
      'Led R&D on multimodal data analysis for marketing insights improving decision-making by 25%.',
      'Built scalable pipeline handling 10K+ posts/week with GCS ingestion and BigQuery transformations.'
    ]
  },
  {
    role: 'Data Engineer',
    company: 'OliveSoft — Satisfy Running',
    dates: 'Feb 2024 – Present',
    bullets: [
      'Designed and implemented automated n8n workflows to extract and orchestrate ERP data into GCS.',
      'Built multi-layer data architecture on BigQuery and delivered interactive Power BI dashboards.'
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" className="mt-12">
      <h2 className="text-3xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {items.map((it, idx) => (
          <motion.div key={it.role} initial={{opacity:0,x: idx%2?100:-100}} whileInView={{opacity:1,x:0}} className="glass p-4 rounded-lg">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">{it.role} — {it.company}</h3>
                <p className="text-sm text-indigo-200/60">{it.dates}</p>
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm text-indigo-100/80">
              {it.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
