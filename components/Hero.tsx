"use client"
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero(){
  const name = 'Ahmed Chtourou'
  const role = 'AI Engineer · Data Engineer · Researcher'
  const summary = `AI Engineer, Data Engineer, and Researcher specializing in Generative AI, Machine Learning, MLOps, and Cloud Data Platforms. Experienced in building and deploying production-grade LLM applications, multimodal AI systems, forecasting solutions, and scalable data architectures on Google Cloud and Azure.`
  const email = 'ahmedchtourou.ai@gmail.com'
  const linkedin = 'https://www.linkedin.com/in/ahmed-chtourou-933b43222/'
  const github = 'https://github.com/ahmedchtourouai/portfolio'
  const reduce = useReducedMotion()

  const headingVariants = {
    initial: { y: 24, opacity: 0 },
    enter: { y: 0, opacity: 1 }
  }

  return (
    <section id="hero" className="grid md:grid-cols-[280px_1fr] gap-12 items-start py-12">
      <motion.div initial={reduce ? {} : { scale: 0.97, opacity: 0 }} animate={reduce ? {} : { scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="sticky top-20 overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 shadow-xl shadow-indigo-950/20">
        <div className="relative aspect-[3/4]">
          <Image
            src="/imge_person.png"
            alt="Ahmed Chtourou portrait"
            fill
            className="object-cover"
            priority
            sizes="280px"
          />
        </div>
        <div className="p-3 space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-teal-300/80">AI Engineer</p>
          <h2 className="text-sm font-semibold text-white">Ahmed</h2>
        </div>
      </motion.div>
      <div className="space-y-6">
        <motion.div variants={headingVariants} initial="initial" animate="enter" transition={{delay:0.06}}>
          <p className="text-sm uppercase tracking-[0.32em] text-teal-300/80">AI / MLOps / Data</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-neon-grad">{name}</h1>
        </motion.div>
        <motion.p animate={{opacity:1}} initial={{opacity:0}} transition={{delay:0.12}} className="text-lg md:text-xl text-slate-200/80">{role}</motion.p>
        <motion.p className="glass p-6 rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.35)] max-w-xl text-slate-100/90" {...(reduce? {} : { initial: {opacity:0}, whileInView: {opacity:1}, transition:{duration:0.6} })}>{summary}</motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={github} aria-label="GitHub" className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-indigo-500 to-teal-400 text-sm font-semibold rounded-2xl shadow-lg shadow-indigo-500/10 hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-teal-300">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center px-5 py-3 border border-white/10 text-sm rounded-2xl hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-indigo-400">LinkedIn</a>
          <a href="AhmedCHRS.pdf" download className="inline-flex items-center justify-center px-5 py-3 border border-white/10 text-sm rounded-2xl hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-indigo-400">Download Resume</a>
        </div>
      </div>
    </section>
  )
}
