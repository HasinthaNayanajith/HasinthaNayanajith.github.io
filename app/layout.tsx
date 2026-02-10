import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hasintha Nayanajith | Full Stack Developer',
  description: 'Full Stack Developer with 3+ years of experience building scalable systems. Experienced in React, Express, CodeIgniter, Electron, and AWS Cloud.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, TypeScript, AWS, Software Engineer',
  authors: [{ name: 'Hasintha Nayanajith' }],
  openGraph: {
    title: 'Hasintha Nayanajith | Full Stack Developer',
    description: 'Full Stack Developer with 3+ years of experience building scalable systems.',
    url: 'https://hasinthanayanajith.github.io',
    siteName: 'Hasintha Nayanajith Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
