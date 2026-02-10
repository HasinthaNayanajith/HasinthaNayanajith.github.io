import React from 'react'

const skillCategories = [
  {
    title: 'JavaScript',
    skills: ['ReactJS', 'ExpressJS', 'ElectronJS', 'Next.js', 'Node.js'],
  },
  {
    title: 'PHP',
    skills: ['CodeIgniter', 'Laravel'],
  },
  {
    title: 'C#',
    skills: ['ASP .NET', 'WinForms'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS LightSail', 'AWS EC2', 'Docker'],
  },
  {
    title: 'CSS Frameworks',
    skills: ['Bootstrap', 'Tailwind CSS', 'PrimeReact'],
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b border-dark-border pb-4">
          TECH STACK
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold text-accent-primary">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-dark-text-muted border-l-2 border-dark-border pl-4 hover:border-accent-primary transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
