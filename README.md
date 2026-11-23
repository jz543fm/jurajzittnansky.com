# jurajzittnansky.com

[jurajzittnansky.com](https://jurajzittnansky.com)

CLI-inspired personal engineering portfolio for **Ing. Juraj Žittňanský** (Software & DevOps Engineer), built with **Astro**, **TypeScript**, and **Tailwind CSS**, and deployed on **Cloudflare**.

## Highlights

- **Interactive CLI Terminal**: Built-in terminal prompt (`help`, `man`, `whoami`, `focus`, `stack`, `projects`, `lang <code>`, `contact`, `clear`) with `↑/↓` command history and localized command responses.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Quick keyboard-first jump navigation across portfolio sections, GitHub projects, and one-click email copy.
- **Multi-language Localization (`i18n`)**: Client-side language switching across **9 languages** (`sk`, `en`, `sv`, `de`, `ar`, `ja`, `fr`, `it`, `pl`), covering UI copy, career history, tech stack categories, education, project descriptions, and terminal output, with `dir="rtl"` support for Arabic (`ar`).
- **Filterable Project Showcase & Bento UI**: Category filtering (`All`, `Kubernetes`, `Cybersecurity`, `Monitoring`, `Tooling`), scroll progress tracking, and bento-style cards with subtle terminal aesthetics.
- **Contact Form**: Built-in contact form with client/server handling and quick clipboard copy.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) with `@astrojs/cloudflare`
- **Language & Styling**: TypeScript, Tailwind CSS, `JetBrains Mono`, `Inter`
- **Localization & Data**: Centralized portfolio data and translation dictionaries in `src/data/portfolio.ts`
- **Container & Runtime Tooling**: Node.js, Podman / Docker


## Local Development

```bash
npm install
npm run dev      # Start local dev server
npm run build    # Build production bundle
npm run preview  # Preview production build locally
```