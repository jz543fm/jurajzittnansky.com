# jurajzittnansky.com

CLI-inspired personal engineering portfolio built with **Astro**, **TypeScript**, and **Tailwind CSS**, deployed as a static site on **Cloudflare**.

## Highlights

- **CLI / Terminal Feel**: Interactive `zsh`-style prompt (`help`, `man`, `whoami`, `focus`, `stack`, `projects`, `lang <code>`, `clear`) with `↑/↓` history and subtle terminal accents (`$`, `█`).
- **Command Palette (`⌘K` / `Ctrl+K`)**: Fast keyboard-driven navigation across sections, GitHub projects, and clipboard actions.
- **Multi-language (`i18n`)**: Support for **8 languages** (`sk`, `en`, `de`, `ar`, `ja`, `fr`, `it`, `pl`) including localized project descriptions and RTL handling where needed.
- **Project Filtering & Bento UI**: Filterable project grid (`Kubernetes`, `Cybersecurity`, `Monitoring`, `Tooling`), scroll progress indicator, and spotlight card hover effects.

## Tech Stack

- **Framework**: Astro (static output with `@astrojs/cloudflare`)
- **Styling**: Tailwind CSS + `JetBrains Mono` & `Inter`
- **Tooling**: Node.js, TypeScript, Podman / Docker

## Local Development

```bash
npm install
npm run dev      # local dev server
npm run build    # static production build to dist/
npm run preview  # preview built site locally
