"use client"
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Agent-based Enterprise Search (Jacquemus)',
    desc: 'Agentic search integrating Confluence and vector search to improve internal knowledge retrieval and automate ticket creation.',
    tech: ['LangChain','LangGraph','OpenAI','Elasticsearch']
  },
  {
    title: 'Multimodal Marketing Insights (Kwore)',
    desc: 'Multimodal pipeline for social media analysis and auto-labeling using LLM agents, handling 10k+ posts/week.',
    tech: ['PyTorch','BigQuery','AzureML','LLMs']
  },
  {
    title: 'Forecasting & Retraining Platform (MPBS)',
    desc: 'Demand and revenue forecasting pipelines on Vertex AI with CI/CD and automated retraining.',
    tech: ['Vertex AI','BigQuery','Cloud Build','Optuna']
  },
  {
    title: 'Data Platform & ETL (OliveSoft)',
    desc: 'Data architecture on BigQuery with n8n workflows, staging layers and Power BI dashboards for operations.',
    tech: ['n8n','BigQuery','GCS','Power BI']
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map(p => (
          <motion.article key={p.title} whileHover={{scale:1.02}} className="glass p-4 rounded-lg cursor-pointer">
            <h3 className="font-medium text-lg">{p.title}</h3>
            <p className="text-sm mt-2 text-indigo-100/80">{p.desc}</p>
            <div className="mt-3 flex gap-2 flex-wrap text-xs text-indigo-200/70">
              {p.tech.map(t => <span key={t} className="px-2 py-1 bg-white/3 rounded">{t}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
