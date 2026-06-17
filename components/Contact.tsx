import { profile } from "../lib/portfolio"
import TechLogoStrip from "./TechLogoStrip"
import ButtonLink from "./ui/ButtonLink"
import Reveal from "./ui/Reveal"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
     

      <Reveal>
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-title">Contact</h2>
      </Reveal>

      <div className="mt-6">
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
                className="form-field mt-2 w-full"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="form-field mt-2 w-full"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-200">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                className="form-field mt-2 w-full resize-y"
              />
            </label>

            <button className="btn btn-primary">
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
              <p className="text-slate-300/75">Phone available after form request.</p>
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
      </div>
       <div className="mb-8">
        <TechLogoStrip />
      </div>
    </section>
  )
}
