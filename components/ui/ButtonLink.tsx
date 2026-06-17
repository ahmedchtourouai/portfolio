import type { AnchorHTMLAttributes, ReactNode } from "react"

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: "primary" | "ghost"
}

export default function ButtonLink({
  children,
  variant = "ghost",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
