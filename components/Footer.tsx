import { profile } from "../lib/portfolio"

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="border-t border-white/10 pt-6">
        Copyright {new Date().getFullYear()} {profile.name}. AI Engineer / Data Engineer.
      </div>
    </footer>
  )
}
