import type { AnchorHTMLAttributes, ReactNode } from "react"

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: "primary" | "secondary"
}

export default function ButtonLink({
  children,
  variant = "secondary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary"
      ? "border-teal-300/40 bg-teal-300 text-slate-950 hover:bg-teal-200"
      : "border-white/10 bg-white/[0.03] text-white hover:border-teal-300/40 hover:bg-white/[0.07]"

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-950 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
