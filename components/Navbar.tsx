"use client"
import React from 'react'

export default function Navbar(){
  return (
    <header>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <nav className="w-full py-4 flex justify-between items-center px-6 md:px-16 lg:px-32" aria-label="Primary navigation">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-neon-grad">Ahmed Chtourou</div>
        <div className="flex gap-4" role="menubar">
          <a role="menuitem" href="#about" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400">About</a>
          <a role="menuitem" href="#skills" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400">Skills</a>
          <a role="menuitem" href="#experience" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400">Experience</a>
          <a role="menuitem" href="#projects" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400">Projects</a>
          <a role="menuitem" href="#contact" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400">Contact</a>
        </div>
      </nav>
    </header>
  )
}
