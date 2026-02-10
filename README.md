# Hasintha Nayanajith - Portfolio

A modern, tech-savvy portfolio website built with Next.js, TypeScript, and Tailwind CSS. Deployed at [hasinthanayanajith.github.io](https://hasinthanayanajith.github.io)

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom dark theme)
- **Deployment**: GitHub Pages

## Design Principles

- Dark color scheme with minimal color palette
- Light borders instead of shadows
- Clean, tech-savvy aesthetic
- Fully responsive design
- Tailwind-inspired utility-first CSS

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Automatic deployment**:
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at `https://hasinthanayanajith.github.io`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with intro
│   ├── Experience.tsx     # Experience & Education
│   ├── Projects.tsx       # Project showcase
│   ├── Skills.tsx         # Tech stack
│   └── Footer.tsx         # Footer with links
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
└── next.config.js         # Next.js configuration
```

## Features

- Responsive navigation with scroll effects
- Comprehensive project portfolio with 6+ major projects
- Professional experience timeline
- Education history
- Tech stack showcase
- Social links (GitHub, LinkedIn, Email)
- SEO optimized with metadata
- Fast static site generation

## Color Palette

- Background: `#0a0a0a`
- Surface: `#141414`
- Border: `#2a2a2a`
- Text: `#e5e5e5`
- Text Muted: `#a3a3a3`
- Accent Primary: `#60a5fa`
- Accent Secondary: `#3b82f6`

## Contact

- **Email**: Hasintha.payoneer@gmail.com
- **GitHub**: [github.com/HasinthaNayanajith](https://github.com/HasinthaNayanajith)
- **LinkedIn**: [linkedin.com/in/hasintha-nayanajith](https://linkedin.com/in/hasintha-nayanajith)

---

Built with Next.js | Deployed on GitHub Pages
