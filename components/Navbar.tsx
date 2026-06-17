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
        className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="self-start whitespace-nowrap text-base font-bold tracking-tight text-white">
          {profile.name}
        </a>
        <div className="-mx-5 flex w-[calc(100%+2.5rem)] items-center gap-3 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 lg:mx-0 lg:w-auto lg:flex-wrap lg:justify-end lg:overflow-visible lg:px-0 lg:pb-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link shrink-0 whitespace-nowrap text-xs text-slate-200/75 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-300 xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
