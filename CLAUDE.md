# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Muhammad Owais Shah, showcasing AI engineering and frontend development work. Built as a modern React SPA with TypeScript, featuring an AI chat assistant, animated UI, and comprehensive project showcase.

## Development Commands

```bash
# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Tech Stack & Architecture

- **Framework**: React 18 + TypeScript + Vite (with SWC)
- **Styling**: Tailwind CSS with custom theme system
- **UI Components**: shadcn/ui (Radix UI primitives) - ~50 pre-built components in `src/components/ui/`
- **Routing**: React Router v6 with lazy-loaded pages
- **Animations**: Framer Motion for transitions and scroll effects
- **State Management**: TanStack Query for server state
- **Theme**: Dark/light mode via next-themes

## Project Structure

```
src/
├── components/          # Feature components (Hero, About, Skills, Contact, etc.)
│   ├── ui/             # shadcn/ui components (button, card, dialog, etc.)
│   ├── ChatWidget.tsx  # AI chat integration with N8N webhook
│   ├── Contact.tsx     # Contact form with Formspree
│   └── theme-provider.tsx
├── pages/              # Route pages (Home, AboutPage, ProjectsPage, etc.)
├── data/               # Static data (projects.ts)
├── lib/                # Utilities (utils.ts with cn() helper)
├── hooks/              # Custom React hooks
├── utils/              # Helper functions (imageOptimizer.ts)
└── assets/             # Images and static files
```

## Key Integrations

### AI Chat Widget (`src/components/ChatWidget.tsx`)
- Powered by N8N webhook: `https://muhammadowais4.app.n8n.cloud/webhook/d982511e-b82c-4f8a-92b7-54754638255d`
- Sends user messages via POST request
- Handles multiple response formats from webhook (response, message, output, text, reply)
- Includes animated greeting bubble and typing indicators

### Contact Form (`src/components/Contact.tsx`)
- Uses Formspree endpoint: `https://formspree.io/f/xvgvpljk`
- Submits contact form data via POST request
- Toast notifications for success/error feedback

## Important Conventions

### Path Aliases
- `@/` maps to `src/` directory (configured in vite.config.ts and tsconfig.json)
- Example: `import { Button } from "@/components/ui/button"`

### Component Patterns
- Use `cn()` utility from `@/lib/utils` for conditional className merging
- shadcn/ui components follow the pattern: `src/components/ui/[component-name].tsx`
- Page components are lazy-loaded in `App.tsx` for code splitting

### Styling
- Tailwind CSS with custom theme variables defined in `src/index.css`
- Theme colors use CSS variables: `hsl(var(--primary))`, `hsl(var(--background))`, etc.
- Custom animations defined in `tailwind.config.ts` (fade-in, gradient, gradient-move)
- Dark mode class strategy: `darkMode: ["class"]`

### Animation Patterns
- Use Framer Motion's `motion` components for animations
- Common pattern: `initial`, `animate`, `exit` props with AnimatePresence
- Scroll animations with `useInView` hook from Framer Motion
- Viewport-triggered animations: `whileInView` with `viewport={{ once: true }}`

## Adding shadcn/ui Components

This project uses shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

Configuration is in `components.json` with aliases pointing to `@/components`, `@/lib`, etc.

## Build Optimization

Vite is configured with manual code splitting:
- `vendor` chunk: React, React DOM, React Router
- `ui` chunk: Radix UI components and styling utilities
- `animations` chunk: Framer Motion

## Theme System

- Theme provider wraps the app in `App.tsx`
- Default theme: `dark` (stored in localStorage as `vite-ui-theme`)
- Toggle component: `src/components/ThemeToggle.tsx`
- Theme colors are HSL-based CSS variables that adapt to light/dark mode

## Data Management

- Project data is centralized in `src/data/projects.ts`
- Export interface `Project` defines the structure
- Images imported from `src/assets/projects/`

## SEO & Meta Tags

- SEO component in `src/components/SEO.tsx` using react-helmet-async
- Base meta tags in `index.html`
- HelmetProvider wraps app in `main.tsx`

## Custom Features

- **CustomCursor**: Custom animated cursor component (desktop only)
- **ScrollToTop**: Utility component that scrolls to top on route changes
- **Analytics**: Analytics tracking component loaded from remote
- **Animated Background**: Global gradient blobs with pulse animations in `App.tsx`
