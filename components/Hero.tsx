import React from 'react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            HASINTHA NAYANAJITH
          </h1>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-dark-text-muted">
              Full Stack Developer
            </p>
            <p className="text-lg text-dark-text-muted">
              3+ Years Experience | BEng Hons Software Engineering
            </p>
          </div>

          <p className="text-lg text-dark-text max-w-2xl leading-relaxed border-l-2 border-accent-primary pl-4">
            I build things that scale. From designing sleek front-end interfaces to
            architecting complex back-end systems, I focus on delivering high-quality
            code that creates value.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="https://github.com/HasinthaNayanajith"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-dark-border hover:border-accent-primary transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hasintha-nayanajith/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-dark-border hover:border-accent-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Hasintha.payoneer@gmail.com"
              className="px-6 py-3 border border-dark-border hover:border-accent-primary transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
