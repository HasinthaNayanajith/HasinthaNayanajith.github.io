import React from 'react'

const projects = [
  {
    title: 'Electronic Document Management System – EDMS',
    client: 'National Water Supply and Drainage Board (NWSDB) | Funded by JICA',
    description:
      'Contributed as a Primary Developer to design and develop this comprehensive digital system to replace manual paper-based workflows for a national utility provider, ensuring secure storage and retrieval of critical infrastructure documents.',
    link: 'https://www.waterboard.lk/electronic-document-management-system-edmsproject-at-nwsdb/',
    tags: ['Enterprise', 'Document Management', 'Government'],
  },
  {
    title: 'Vehicle Auction & Export Management System',
    client: 'Lion Royal Car - Japan',
    description:
      'A specialized ERP and auction management platform hosted on AWS (Purchasing, Transporting, Selling, Shipping & Tracking) to streamline the procurement and global export of used vehicles from major Japanese auction houses (USS, TAA, ARAI).',
    tags: ['ERP', 'AWS', 'Auction Platform', 'International'],
  },
  {
    title: 'School Management System',
    client: 'Royal International School - Kurunegala',
    description:
      'Engineered a comprehensive School Management System (SMS) to automate student enrolment, grading, and administrative workflows for a leading international school. Orchestrated the end-to-end deployment strategy, including configuring Apache HTTP Servers and hosting the platform on VPN-secured private servers to ensure data privacy and internal-only access.',
    tags: ['Education', 'ERP', 'VPN Security', 'Apache'],
  },
  {
    title: 'Service Centre Management – Billing Module & Touch Panel',
    client: 'Jayasekara Auto Motors | Automotive Service & Parts Provider',
    description:
      'A robust billing and invoicing engine for a high-volume automotive service centre to automate service costs, parts, inventory pricing, and tax calculations. Plus, specialized touch-screen interface for workshop technicians to manage the "Work-in-Progress" (WIP) lifecycle—allowing for real-time tracking of job start/pause/end times and automated labour cost calculation.',
    tags: ['Point of Sale', 'Touch Interface', 'Automotive', 'Inventory'],
  },
  {
    title: 'Online Dental Appointing System & Backend',
    client: 'SAKUKI Dental Hospital – Kurunegala',
    description:
      'Developed a user-facing web application for real-time appointment booking, allowing patients to view doctor availability and select specialized dental services. Plus, a comprehensive dashboard for hospital staff to manage daily queues, patient medical histories, and doctor schedules.',
    link: 'https://bestdentist.lk/',
    tags: ['Healthcare', 'Appointment System', 'Dashboard'],
  },
  {
    title: 'Wholesale Stock Management System',
    client: 'BS Traders Pvt Ltd. - Kandy',
    description:
      'An inventory, accounts and sales management system, developed and deployed on AWS LightSail.',
    tags: ['Inventory', 'AWS LightSail', 'Accounting'],
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b border-dark-border pb-4">
          PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-dark-border p-6 hover:border-accent-primary transition-colors duration-200"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-accent-primary mb-3">{project.client}</p>
              <p className="text-dark-text-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 border border-dark-border text-dark-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-secondary transition-colors text-sm inline-flex items-center gap-1"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
