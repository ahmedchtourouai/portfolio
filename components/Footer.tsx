import { profile } from "../lib/portfolio"

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6 text-center">
        <span>{profile.name}</span>
        <span aria-hidden="true">/</span>
        <span>Copyright {new Date().getFullYear()}</span>
        <span aria-hidden="true">/</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-teal-200 hover:text-teal-100"
          aria-label="LinkedIn profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
            <path d="M6.94 8.98H3.7V20h3.24V8.98ZM7.15 5.58C7.15 4.55 6.32 3.75 5.3 3.75S3.46 4.55 3.46 5.58c0 1.01.82 1.83 1.84 1.83s1.85-.82 1.85-1.83ZM20.55 13.68c0-3.01-1.61-4.41-3.76-4.41-1.73 0-2.51.95-2.94 1.62V8.98h-3.1V20h3.23v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.23l-.5-6.32Z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
