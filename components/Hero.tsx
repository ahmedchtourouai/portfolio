import Image from "next/image"
import portrait from "../public/imge_person.png"
import { highlights, profile } from "../lib/portfolio"
import ButtonLink from "./ui/ButtonLink"
import Reveal from "./ui/Reveal"

export default function Hero() {
  return (
    <section className="grid gap-8 py-10 md:grid-cols-[300px_1fr] md:items-center lg:gap-14">
      <Reveal className="mx-auto w-full max-w-[300px] md:mx-0">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
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
          <div className="border-t border-white/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
              {profile.title}
            </p>
            <p className="mt-1 font-semibold text-white">{profile.shortName}</p>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300/90">
            AI / MLOps / Data Platforms
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
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
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <p className="text-sm font-medium leading-6 text-slate-100">{item}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={profile.github} variant="primary">
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.resume} download>
            Download Resume
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
