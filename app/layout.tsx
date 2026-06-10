import type { Metadata } from "next"
import "../styles/globals.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export const metadata: Metadata = {
  title: "Ahmed Chtourou - AI Engineer",
  description:
    "Portfolio of Ahmed Chtourou, AI Engineer, Data Engineer, and Researcher building GenAI and cloud data systems.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
