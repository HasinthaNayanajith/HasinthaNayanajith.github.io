'use client'

import React, { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold hover:text-accent-primary transition-colors">
          HN
        </a>
        <div className="flex gap-6">
          <a
            href="#experience"
            className="text-sm hover:text-accent-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm hover:text-accent-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm hover:text-accent-primary transition-colors"
          >
            Skills
          </a>
        </div>
      </div>
    </nav>
  )
}
