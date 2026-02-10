import React from 'react'

const experiences = [
  {
    period: '2024 Jan – Present',
    title: 'Full Stack Developer',
    company: 'Cyclomax International Pvt Ltd.',
  },
  {
    period: '2023 July – 2024 Jan',
    title: 'Intern',
    company: 'Cyclomax International Pvt Ltd.',
  },
]

const education = [
  {
    period: '2024-2025',
    title: 'BEng. Hons in Software Engineering',
    institution: 'London Metropolitan University – UK',
  },
  {
    period: '2022-2024',
    title: 'HND in Computing - Software Engineering',
    institution: 'Pearson UK',
  },
  {
    period: '2021-2022',
    title: 'Foundation Dip. In Software Engineering',
    institution: 'ESOFT LK | Assured by Pearson UK',
  },
  {
    period: '2020',
    title: 'GCE Ordinary Level – 7A\'s 2B\'s',
    institution: 'Maliyadeva College – Kurunegala LK',
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-dark-border pb-4">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm text-accent-primary">{exp.period}</p>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-dark-text-muted">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-dark-border pb-4">
              EDUCATION
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm text-accent-primary">{edu.period}</p>
                  <h3 className="text-lg font-semibold">{edu.title}</h3>
                  <p className="text-dark-text-muted">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
