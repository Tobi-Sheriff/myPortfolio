# myPortfolio

Personal portfolio site for Sheriff Salami Oluwatobiloba — full-stack developer.
Built with React, Tailwind CSS, and Framer Motion, deployed on Vercel.

## Tech stack

- **React 18** + **React Router** — SPA with client-side routing
- **Tailwind CSS v4** — utility-first styling, theme tokens in [src/styles/theme.css](src/styles/theme.css)
- **Framer Motion** — scroll reveals, page transitions, the hero's cursor-tracking spotlight
- **Vite 6** — dev server and bundler
- **react-icons** / **lucide-react** — brand and UI icons

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

## Project structure

```
src/
  main.jsx                   # entry point
  App.jsx                    # router + route-transition animation
  pages/                     # route-level components (composition only)
  components/
    layout/                  # Navbar, Footer
    sections/                # Hero, Skills, Projects, Contact
    ui/                      # reusable primitives — Button, GlassCard, Ticker, etc.
  data/                      # content (skills, projects, copy) kept out of JSX
  hooks/                     # useActiveSection (scroll-spy)
  styles/theme.css           # Tailwind entry + design tokens
```

See [docs/design/](docs/design/) for the reasoning behind larger design and
architecture decisions.

## Deployment

Pushes to `main` run lint + build in CI (`.github/workflows/deploy.yml`) and
deploy to Vercel on success; other branches get a Vercel preview deployment.
