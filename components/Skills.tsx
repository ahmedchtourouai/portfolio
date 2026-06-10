"use client"
import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'ML / AI Development', items: ['PyTorch','TensorFlow','Keras','scikit-learn','Transformers','Diffusers','LLMs','RAG','Embeddings'] },
  { title: 'Data Engineering', items: ['BigQuery','SQL','Spark','n8n','ETL/ELT','Data Modeling'] },
  { title: 'Cloud & MLOps', items: ['Google Cloud (Vertex AI)','Azure (AzureML)','Docker','Kubernetes','MLflow','Cloud Build'] },
  { title: 'Tools & Languages', items: ['Python','SQL','Git','Docker','Jira','Confluence'] },
]

export default function Skills(){
  return (
    <section id="skills" className="mt-12">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0,y:20}} className="text-3xl font-semibold">Skills</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {skillGroups.map((g)=> (
          <motion.div key={g.title} whileHover={{y:-6}} className="glass p-4 rounded-lg">
            <h3 className="font-medium mb-3">{g.title}</h3>
            <ul className="space-y-2 text-sm text-indigo-100/80">
              {g.items.map(i => (
                <li key={i} className="flex justify-between items-center">
                  <span>{i}</span>
                  <div className="w-24 h-2 bg-white/6 rounded ml-4">
                    <div className="h-2 bg-gradient-to-r from-indigo-500 to-teal-400 rounded" style={{width: Math.floor(Math.random()*60)+30 + '%'}} />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
