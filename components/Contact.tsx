import { profile } from "../lib/portfolio"
import ButtonLink from "./ui/ButtonLink"
import Section from "./ui/Section"
import Reveal from "./ui/Reveal"

export default function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Get in touch">
      <Reveal className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[1fr_0.8fr] md:p-6">
        <form action={`https://formsubmit.co/${profile.email}`} method="POST" className="space-y-4">
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={profile.siteUrl} />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="block">
            <span className="text-sm font-medium text-slate-200">Your name</span>
            <input
              required
              name="name"
              autoComplete="name"
              className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-200">Email</span>
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-200">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-slate-950/70 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20"
            />
          </label>

          <button className="inline-flex min-h-11 items-center justify-center rounded-lg border border-teal-300/40 bg-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950">
            Send message
          </button>
        </form>

        <aside className="rounded-lg border border-white/10 bg-slate-950/60 p-5">
          <h3 className="font-semibold text-white">Direct links</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300/80">
            Open to AI engineering, data engineering, MLOps, and applied research conversations.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <a className="block text-teal-100 underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="block text-teal-100 underline-offset-4 hover:underline" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
            <a
              className="block text-teal-100 underline-offset-4 hover:underline"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profile
            </a>
          </div>
          <ButtonLink href={profile.resume} download className="mt-6 w-full">
            Download resume
          </ButtonLink>
        </aside>
      </Reveal>
    </Section>
  )
}
