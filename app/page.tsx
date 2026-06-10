"use client"
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

export default function Page(){
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} className="px-6 md:px-16 lg:px-32 py-12">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </motion.main>
  )
}
