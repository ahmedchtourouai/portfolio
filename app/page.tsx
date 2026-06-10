import About from "../components/About"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
