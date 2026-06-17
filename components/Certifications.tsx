import { certifications } from "../lib/portfolio"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" eyebrow="Credentials">
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <Reveal
            key={cert.title}
            delay={index * 0.04}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <article className="flex gap-4">
              <img src={cert.logo} alt="" aria-hidden="true" className="h-12 w-12 shrink-0 object-contain" />
              <div>
                <h3 className="font-semibold leading-6 text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-300/75">
                  {cert.issuer} / {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-teal-200 underline-offset-4 hover:underline"
                >
                  View credential
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
