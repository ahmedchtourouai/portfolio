"use client"
import React from 'react'

export default function Footer(){
  return (
    <footer className="w-full py-8 mt-16 text-center text-sm text-indigo-200/60">
      <div>© {new Date().getFullYear()} Ahmed Chtourou — AI Engineer · Data Engineer</div>
    </footer>
  )
}
