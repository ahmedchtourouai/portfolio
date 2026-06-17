"use client"

import { useMemo, useState } from "react"
import { projects } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

const aiAnswers = [
  {
    match: ["rag", "search", "retrieval", "jacquemus"],
    answer:
      "The enterprise search system combines source connectors, metadata-aware retrieval, LangGraph orchestration, grounded generation, and Langfuse traces for evaluation.",
  },
  {
    match: ["forecast", "forecasting", "mpbs", "vertex"],
    answer:
      "The forecasting platform uses BigQuery, Vertex AI, Optuna experiments, Dockerized training, and Cloud Build delivery to support repeatable retraining.",
  },
  {
    match: ["marketing", "multimodal", "kwore", "posts"],
    answer:
      "The multimodal pipeline extracts text and visual signals, builds embeddings, clusters content, and scales processing to more than 10K posts per week.",
  },
  {
    match: ["data", "erp", "bigquery", "satisfy"],
    answer:
      "The ERP data platform orchestrates ingestion with n8n, lands data in GCS, models it in BigQuery, and exposes analytics-ready outputs to Power BI.",
  },
]

function WorkAssistant() {
  const [question, setQuestion] = useState("")

  const answer = useMemo(() => {
    const normalized = question.toLowerCase()
    if (!normalized.trim()) {
      return "Try: RAG evaluation, forecasting MLOps, multimodal pipeline, or ERP data platform."
    }

    return (
      aiAnswers.find((item) => item.match.some((word) => normalized.includes(word)))?.answer ??
      "Ahmed's work centers on production AI systems: RAG, agents, MLOps, cloud data platforms, and deployment-ready analytics."
    )
  }, [question])

  return (
    <Reveal delay={0.16} className="mt-6">
      <div className="ai-widget">
        <label htmlFor="work-question" className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-300">
          Ask about my systems
        </label>
        <input
          id="work-question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask: how did the RAG pipeline work?"
          className="mt-3 w-full rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 font-mono text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300"
        />
        <p className="mt-3 font-mono text-xs leading-6 text-slate-200/75">&gt; {answer}</p>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Mini case studies">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.05}
            className="project-card flex min-h-[520px] flex-col rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300/80">
              {project.context}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-200/78">
              <p>
                <span className="font-semibold text-teal-100">Problem: </span>
                {project.problem}
              </p>
              <p>
                <span className="font-semibold text-teal-100">Architecture: </span>
                {project.architecture}
              </p>
              <p>
                <span className="font-semibold text-teal-100">AI/Data approach: </span>
                {project.approach}
              </p>
              <p>
                <span className="font-semibold text-teal-100">Implementation: </span>
                {project.implementation}
              </p>
              <p>
                <span className="font-semibold text-teal-100">Deployment: </span>
                {project.deployment}
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-teal-100">{project.impact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="tech-badge rounded-md border border-white/10 bg-slate-950/60 text-slate-200/75"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <WorkAssistant />
    </Section>
  )
}
