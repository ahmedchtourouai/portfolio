import About from "../components/About"
import Certifications from "../components/Certifications"
import Clients from "../components/Clients"
import Contact from "../components/Contact"
import DomainsOfExpertise from "../components/DomainsOfExpertise"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <DomainsOfExpertise />
      <Skills />
      <Experience />
      <Clients />
      <Certifications />
      <Contact />
    </div>
  )
}
