import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-lg font-bold">Hasintha Nayanajith</p>
            <p className="text-sm text-dark-text-muted">
              Full Stack Developer | Building scalable solutions
            </p>
          </div>

          <div className="flex flex-col gap-2 text-center md:text-right">
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://github.com/HasinthaNayanajith"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-accent-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hasintha-nayanajith/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-accent-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:Hasintha.payoneer@gmail.com"
                className="text-sm hover:text-accent-primary transition-colors"
              >
                Email
              </a>
            </div>
            <p className="text-xs text-dark-text-muted">
              © {new Date().getFullYear()} Hasintha Nayanajith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
