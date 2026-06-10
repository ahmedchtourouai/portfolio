"use client"
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="mt-12">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0,y:20}} className="text-3xl font-semibold">About</motion.h2>
      <motion.div whileInView={{opacity:1, y:0}} initial={{opacity:0,y:20}} className="mt-6 glass p-6 rounded-xl max-w-3xl">
        <p>
          AI Engineer, Data Engineer, and Researcher with experience in Generative AI, MLOps, and Cloud Data Platforms. I build and deploy production-grade LLM applications, multimodal systems and scalable data architectures on Google Cloud and Azure. Domain expertise spans Retail, Marketing, Supply Chain, Manufacturing, Knowledge Management and Healthcare.
        </p>
        <div className="mt-4 text-sm text-indigo-200/60">
          <strong>Education:</strong>
          <ul className="ml-4 list-disc">
            <li>PhD Candidate in Artificial Intelligence — National School of Engineering of Sfax (ENIS) (2026 – Present)</li>
            <li>Engineering Diploma in Computer Science — National School of Electronics and Telecommunications of Sfax (2021 - 2024)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
