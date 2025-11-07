# Copilot Instructions — Super Pest Control

Concise, actionable notes for an AI coding agent to be productive in this repository.

## Tech Stack & Structure
- **Framework**: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- **Commands**: See `package.json` — `dev`, `build`, `start`, `lint`
- **Big picture**: Marketing site with 100+ location pages under `src/app/` (folders like `pest-control-in-{location}`) and service pages (e.g. `ant-control-mumbai`)

## Key Files to Review First
- `src/app/layout.tsx` — global metadata, canonical URL, site-wide JSON-LD example
- `next.config.ts` — trailingSlash=false, image formats, compression, extensive `.html` to clean URL redirects
- `src/app/sitemap.ts` and `src/app/robots.ts` — sitemap/robots generation and route lists
- `src/components/Header.tsx` — shared header pattern (mobile menu uses `useState`). Many pages still duplicate header/footer inline
- `tailwind.config.ts` — brand colors (primary.500 orange, secondary.500 blue) and content globs

## SEO & Schema Rules
- Every location/service page should include an `@graph` JSON-LD with: LocalBusiness, Service, BreadcrumbList, FAQPage entries
- Use `src/app/layout.tsx` as the canonical schema example
- Canonical domain: `https://superpestcontrol.in`
- Canonical phone: `+91-80979-41077` (use consistently across all pages)

## Routing & Redirects
- `trailingSlash: false` is enforced in `next.config.ts`
- Legacy `.html` pages redirect to clean routes in `next.config.ts`
- Language redirects: `/hi` and `/mr` redirect to `/`

## Adding a New Location/Service Page
1. Create `src/app/pest-control-in-{location}/` directory
2. Add `layout.tsx` with `export const metadata` (title, description, canonical) and JSON-LD `@graph` entries
3. Add `page.tsx` with content; keep interactive parts as client components (`'use client'`)
4. Update `src/app/sitemap.ts` to include the new route
5. Add `.html` redirect in `next.config.ts` only when migrating legacy HTML pages

## Component & Styling Conventions
- Prefer importing `src/components/Header.tsx` when practical
- Keep UI state local (React `useState`) — no global state library
- Follow Tailwind utilities and brand colors from `tailwind.config.ts`
- Design uses emoji icons (no icon libraries) — phone emoji, checkmarks, shields

## Developer Workflow
```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Serve production build
npm run lint             # Run ESLint
```

## Validation & Automation
- Validate structured data with Google Rich Results Test and Schema.org validator
- For mass edits (many location pages), prefer scripted changes (Node codemod) and update `src/app/sitemap.ts` programmatically

## Important Notes & Gotchas
- Many pages are client components by historical pattern — convert to server components only if removing client hooks
- Watch trailing slashes when generating schema `@id` values
- Prefer minimal, low-risk edits to many files; commit small, verifiable changes
- Production deployment targets Vercel/Netlify with optimizations in `next.config.ts`
# Copilot Instructions for Super Pest Control Website

## Project Overview
Next.js 15 SEO-optimized website for Super Pest Control Mumbai - a local pest control service provider. Uses App Router with extensive location-based pages and heavy SEO/schema markup.

## Architecture & Structure

### Page Organization Pattern
- **Location Pages**: 100+ `pest-control-in-{location}` directories under `src/app/`
- **Service Pages**: Both generic (`ant-control/`) and location-specific (`ant-control-mumbai/`)
- All pages use **client components** (`'use client'`) with inline state management
- Most pages have separate `layout.tsx` for metadata and `page.tsx` for content

### Metadata Strategy
- Root `layout.tsx` contains extensive global metadata with Mumbai-focused keywords
- Individual pages use either:
  - `export const metadata` in `layout.tsx` files for static pages
  - Inline `<script type="application/ld+json">` for dynamic schema markup
- Always include structured data (`@graph` patterns) for LocalBusiness, Service, FAQPage, BreadcrumbList

### Component Patterns
- **Header Component**: Reusable `src/components/Header.tsx` with mobile menu state
  - Props: `subtitle` (optional, defaults to "Mumbai's #1 Choice")
  - Fixed position with backdrop blur, orange/blue gradient branding
- **Inline Components**: Most pages duplicate header/footer inline (not importing shared components)
- **Navigation**: E10-style pill navigation with gradient active states

## SEO & Schema Requirements

### Required Schema Types
Every location/service page must include:
```typescript
"@graph": [
  { "@type": "LocalBusiness", "@id": "{url}#localbusiness" },
  { "@type": "Service", "@id": "{url}#service" },
  { "@type": "BreadcrumbList", "@id": "{url}#breadcrumb" },
  ## Copilot instructions — Super Pest Control (concise)

  These notes are focused on immediate, actionable knowledge for an AI coding agent working in this repo.

  - Framework: Next.js 15 (App Router), TypeScript, TailwindCSS v4. See `package.json` scripts (`dev`, `build`, `start`, `lint`).
  - Big picture: a server-rendered marketing site with 100+ location pages under `src/app/` (directories like `pest-control-in-{location}`) plus service pages (e.g. `ant-control/`, `ant-control-mumbai/`).

  - Routing & redirects: `next.config.ts` uses `trailingSlash: false` and contains many `.html` → clean URL redirects (language redirects `/hi` & `/mr` to `/`). Edit `next.config.ts` when migrating legacy `.html` pages.

  - SEO & structured data: pages must include @graph entries for LocalBusiness, Service, BreadcrumbList, FAQPage. Global metadata lives in `src/app/layout.tsx` (openGraph, canonical) and many pages include inline `<script type="application/ld+json">`.

  - Adding a location/service page (exact steps):
    1. Create `src/app/pest-control-in-{location}/`.
   2. Add a `layout.tsx` containing `export const metadata` and the canonical URL.
   3. Add `page.tsx` with content and include the required `@graph` JSON-LD.
   4. Update `src/app/sitemap.ts` to include the route.
   5. Add a redirect entry in `next.config.ts` only if you need `.html` compatibility.

  - Component patterns: header is a shared component at `src/components/Header.tsx` (client component, `useState` for mobile menu). Note: many pages historically duplicate header/footer inline — prefer importing `Header` where safe.

  - Styling: main brand colors are in `tailwind.config.ts` (primary.500 = `#f97316`, secondary.500 = `#3b82f6`). Use existing utility classes (e.g., `backdrop-blur-xl`, gradient CTAs) to match design.

  - Important constants and conventions:
    - Canonical domain: `https://superpestcontrol.in` (see `src/app/layout.tsx` alternates).
    - Canonical phone: `+91-80979-41077` (use project phone consistently).
    - Sitemap and robots live in `src/app/sitemap.ts` and `src/app/robots.ts`.

  - Developer workflows (quick):
    - Install deps: `npm install`
    - Dev server: `npm run dev` (localhost:3000)
    - Build: `npm run build`; serve: `npm run start`
    - Lint: `npm run lint` (ESLint + Next config)

  - Validation & deployment notes:
    - Validate structured data with Google Rich Results Test and Schema.org validator.
    - Production deployment targets Vercel/Netlify; `next.config.ts` optimizations (image formats, compress, `experimental.optimizeCss`) are tuned for Vercel.

  - When changing many pages (mass edits): prefer scripted changes (node script or codemod) and update `src/app/sitemap.ts` programmatically.

  - Assumptions & edge-cases the agent should mind:
    - Many pages are client components by historical pattern. Convert to server components only if you remove client-only hooks.
    - Watch trailing slashes and canonical URLs when generating schema `@id` values.

  If any part of this is unclear or you want fuller examples (e.g., a template `layout.tsx` and `page.tsx` for a new location), tell me which example and I will add it next. 
1. Create `src/app/pest-control-in-{location}/` directory
