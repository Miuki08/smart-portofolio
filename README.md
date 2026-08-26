# Reina Fujimiya — Portfolio

A modern personal portfolio website for **Reina Fujimiya**.

Built as a single-page experience with a dark editorial interface, subtle motion, responsive layouts, and privacy-conscious public content.

## Preview

> after deploy finish

## Features

- Modern editorial dark interface
- Responsive design for mobile, tablet, and desktop
- Character artwork identity instead of a personal photograph
- Subtle motion and micro-interactions powered by Motion
- Bento-style skills layout
- Filterable project showcase
- Social and contact call-to-action section
- Static generation with Next.js App Router
- Privacy-conscious public portfolio content

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [Lucide](https://lucide.dev/)
- [Vercel](https://vercel.com/)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Miuki08/smart-portofolio.git
cd smart-portofolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the local production server after a successful build.

## Project Structure

```text
src/
├── app/
│   └── (portfolio)/
│       ├── _components/
│       │   ├── about/
│       │   ├── contact/
│       │   ├── hero/
│       │   ├── projects/
│       │   ├── skills/
│       │   └── site-header.tsx
│       └── page.tsx
├── config/
├── content/
├── lib/
└── types/
```

## Deployment

The project is ready to deploy on Vercel.

1. Import this repository in Vercel.
2. Select the Next.js framework preset.
3. Keep the default build settings.
4. Deploy.

After deployment, update `metadataBase` in `src/app/layout.tsx` with the production domain.

## Notes

- Replace placeholder social URLs in `src/config/site.ts`.
- Use only public-safe images and project screenshots.
- Do not commit environment files, secrets, API keys, or personal credentials.

## License

This project is intended as a personal portfolio. All rights reserved.