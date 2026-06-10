import { navItems, profile } from "../lib/portfolio"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-teal-300 focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="text-base font-bold tracking-tight text-white">
          {profile.name}
        </a>
        <div className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200/75 underline-offset-4 transition hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
