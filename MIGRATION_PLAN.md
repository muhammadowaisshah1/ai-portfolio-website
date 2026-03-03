# Next.js 15 Migration Plan

## Overview
Migrating from React 18 + Vite SPA to Next.js 15 with App Router while preserving all functionality, integrations, and improving performance.

## Current Stack
- React 18.3.1 + TypeScript
- Vite 5.4.19 with SWC
- React Router v6.30.1
- Tailwind CSS + shadcn/ui
- Framer Motion animations
- TanStack Query for state
- next-themes for theming
- react-helmet-async for SEO

## Target Stack
- Next.js 15.1.11 (App Router)
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui (preserved)
- Framer Motion (preserved)
- TanStack Query (preserved)
- next-themes (preserved)
- Next.js Metadata API (replaces react-helmet-async)

## Migration Strategy

### Phase 1: Project Setup
1. Install Next.js 15 and dependencies
2. Create Next.js configuration
3. Set up App Router structure
4. Configure Tailwind CSS for Next.js
5. Update TypeScript configuration

### Phase 2: Routing Migration
**Current React Router structure:**
```
/ → Home
/about → AboutPage
/skills → SkillsPage
/experience → ExperiencePage
/projects → ProjectsPage
/projects/:id → ProjectDetailPage
/contact → ContactPage
* → NotFound
```

**Next.js App Router structure:**
```
app/
├── layout.tsx (root layout with providers)
├── page.tsx (home)
├── about/page.tsx
├── skills/page.tsx
├── experience/page.tsx
├── projects/
│   ├── page.tsx
│   └── [id]/page.tsx
├── contact/page.tsx
└── not-found.tsx
```

### Phase 3: Component Classification

**Server Components (default):**
- All page components (can fetch data directly)
- Footer
- Static sections (About, Experience, Education)
- SEO metadata (via Metadata API)

**Client Components (need 'use client'):**
- Navbar (useState for mobile menu)
- ChatWidget (useState, useEffect, event handlers)
- Contact form (useState, form handling)
- CustomCursor (useEffect, mouse events)
- ThemeToggle (useTheme hook)
- ThemeProvider (context provider)
- Hero (animations with Framer Motion)
- Skills (useState for selected skill)
- All components using Framer Motion
- All components with interactivity

### Phase 4: Key Migrations

#### 4.1 SEO Migration
**Before (react-helmet-async):**
```tsx
<SEO title="..." description="..." />
```

**After (Metadata API):**
```tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: { ... },
  twitter: { ... }
}
```

#### 4.2 Image Optimization
**Before:**
```tsx
<img src={profileImg} alt="..." />
```

**After:**
```tsx
import Image from 'next/image'
<Image src={profileImg} alt="..." width={500} height={500} />
```

#### 4.3 Navigation
**Before (React Router):**
```tsx
import { Link, useNavigate } from 'react-router-dom'
```

**After (Next.js):**
```tsx
import Link from 'next/link'
import { useRouter } from 'next/navigation'
```

#### 4.4 Path Aliases
Preserved: `@/` → `src/` (configured in tsconfig.json and next.config.js)

### Phase 5: Integration Preservation

#### 5.1 N8N Chat Webhook
- Remains unchanged (client-side fetch)
- ChatWidget stays as Client Component
- Webhook URL: `https://muhammadowais4.app.n8n.cloud/webhook/d982511e-b82c-4f8a-92b7-54754638255d`

#### 5.2 Formspree Contact Form
- Remains unchanged (client-side POST)
- Contact component stays as Client Component
- Endpoint: `https://formspree.io/f/xvgvpljk`

#### 5.3 Theme System
- next-themes already compatible with Next.js
- ThemeProvider wraps app in root layout
- No changes needed

#### 5.4 Analytics
- Move to Next.js Script component for optimization
- Or use Next.js built-in analytics

### Phase 6: Performance Optimizations

1. **Automatic Code Splitting**: Next.js handles this by default
2. **Image Optimization**: Use next/image for all images
3. **Font Optimization**: Use next/font for Google Fonts
4. **Static Generation**: Generate static pages where possible
5. **Streaming**: Use Suspense for loading states

### Phase 7: File Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (home)
│   ├── about/page.tsx
│   ├── skills/page.tsx
│   ├── experience/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── contact/page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── ui/ (shadcn components)
│   ├── Navbar.tsx (client)
│   ├── Footer.tsx (server)
│   ├── Hero.tsx (client - animations)
│   ├── ChatWidget.tsx (client)
│   ├── Contact.tsx (client)
│   ├── CustomCursor.tsx (client)
│   ├── ThemeToggle.tsx (client)
│   ├── theme-provider.tsx (client)
│   └── ... (other components)
├── lib/
│   └── utils.ts
├── data/
│   └── projects.ts
├── public/
│   └── assets/ (images, icons)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Phase 8: Configuration Files

#### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add external image domains if needed
  },
  // Preserve existing optimizations
}
module.exports = nextConfig
```

#### tailwind.config.ts
- Keep existing configuration
- Ensure content paths include app directory

### Phase 9: Testing Checklist

- [ ] All routes accessible
- [ ] Theme switching works
- [ ] Chat widget functional (N8N webhook)
- [ ] Contact form submits (Formspree)
- [ ] Custom cursor works on desktop
- [ ] All animations smooth
- [ ] Images optimized and loading
- [ ] Mobile responsive
- [ ] SEO metadata correct
- [ ] Build succeeds without errors
- [ ] Production build optimized

### Phase 10: Deployment

1. Update build scripts in package.json
2. Test production build locally
3. Deploy to Vercel (recommended for Next.js)
4. Verify all integrations work in production

## Benefits After Migration

1. **Performance**: Automatic code splitting, image optimization, font optimization
2. **SEO**: Better SEO with Metadata API and SSR
3. **Developer Experience**: File-based routing, better TypeScript support
4. **Scalability**: Server Components reduce client bundle size
5. **Modern Features**: React Server Components, Streaming, Suspense
6. **Deployment**: Optimized for Vercel with zero-config

## Risks & Mitigation

1. **Risk**: Framer Motion animations may have hydration issues
   - **Mitigation**: Use 'use client' directive, test thoroughly

2. **Risk**: Custom cursor may cause layout shift
   - **Mitigation**: Keep as client component, test on different devices

3. **Risk**: Theme flash on initial load
   - **Mitigation**: Use next-themes suppressHydrationWarning

4. **Risk**: External integrations may fail
   - **Mitigation**: Test webhooks and forms in development first

## Timeline Estimate

- Phase 1-2: Setup & Routing (30 minutes)
- Phase 3-4: Component Migration (45 minutes)
- Phase 5: Integration Testing (15 minutes)
- Phase 6-7: Optimization & Structure (20 minutes)
- Phase 8-9: Configuration & Testing (20 minutes)
- **Total**: ~2.5 hours

## Rollback Plan

Keep current Vite setup in separate branch. If critical issues arise:
1. Revert to Vite version
2. Debug Next.js issues separately
3. Re-attempt migration with fixes
