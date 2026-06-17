import Image from "next/image"
import portrait from "../public/imge_person.png"
import { highlights, profile } from "../lib/portfolio"
import ButtonLink from "./ui/ButtonLink"
import Reveal from "./ui/Reveal"

export default function Hero() {
  return (
    <section id="hero" className="hero-mesh relative grid overflow-hidden rounded-2xl px-1 py-16 md:grid-cols-[300px_1fr] md:items-center md:gap-8 lg:gap-14">
      <Reveal className="mx-auto w-full max-w-[300px] md:mx-0">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/40 backdrop-blur-sm">
          <div className="relative aspect-[3/4]">
            <Image
              src={portrait}
              alt="Portrait of Ahmed Chtourou"
              fill
              priority
              sizes="(min-width: 768px) 300px, 80vw"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </Reveal>

      <div className="relative z-10">
        <Reveal>
          <p className="section-eyebrow">
            Production AI / MLOps / Data Platforms
          </p>
          <h1 className="hero-name mt-4 max-w-4xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-slate-200/85 md:text-xl">
            {profile.roles.join(" / ")}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200/80 md:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="hero-stat">
              <p className="text-sm font-medium leading-6 text-slate-100">{item}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={profile.linkedin} variant="primary" target="_blank" rel="noreferrer">
            View LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.resume} download>
            Download Resume
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
