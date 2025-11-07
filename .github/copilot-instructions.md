# Copilot Instructions — Super Pest Control

Essential knowledge for AI agents working in this Next.js 15 SEO-focused pest control website.

## Project Architecture
- **Framework**: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- **Scale**: 100+ location pages (`pest-control-in-{location}/`) + service pages (`ant-control-mumbai/`)
- **Pattern**: Heavy SEO optimization with extensive JSON-LD structured data
- **Deployment**: Vercel/Netlify ready with `vercel.json` and `netlify.toml` configs

## Essential Files & Patterns
- `src/app/layout.tsx` — Global metadata template with Mumbai-focused keywords & canonical schema
- `src/components/Header.tsx` — Shared header with mobile menu (client component, `useState`)
- `next.config.ts` — Critical: `trailingSlash: false` + 300+ `.html` → clean URL redirects
- `tailwind.config.ts` — Brand colors: primary.500 (#f97316 orange), secondary.500 (#3b82f6 blue)
- `src/app/sitemap.ts` — Programmatic sitemap generation (must update when adding pages)

## Location Page Structure
Every `pest-control-in-{location}/` follows this pattern:
```
├── layout.tsx          # Static metadata + canonical URL
└── page.tsx           # Client component with inline JSON-LD @graph
```

**Required schema types**: LocalBusiness, Service, BreadcrumbList, FAQPage with consistent geo coords and phone +91-8097941077

## Adding New Location Pages (Exact Steps)
1. Create `src/app/pest-control-in-{location}/` directory
2. Copy `layout.tsx` from existing location, update metadata
3. Copy `page.tsx` template, update schema `@graph` entries (especially geo coordinates)
4. **Critical**: Add route to `src/app/sitemap.ts` locations array
5. Add `.html` redirect in `next.config.ts` only if migrating legacy pages

## Component Conventions
- **Header Usage**: Import `Header` component when possible vs. inline duplication
- **Client State**: All location pages are `'use client'` with `useState` (historical pattern)
- **Icons**: Emoji-based design (🐛📞✓) — no icon libraries. Use `fix-all-emojis.js` for bulk fixes
- **Navigation**: E10-style pill nav with backdrop-blur and gradient hover states

## SEO Requirements
- **Canonical domain**: `https://superpestcontrol.in` (consistent across all pages)
- **Phone consistency**: +91-8097941077 in all schema markup
- **Schema validation**: Google Rich Results Test for all new pages
- **URL structure**: No trailing slashes, clean semantic paths

## Development Workflow
```bash
npm install              # Install dependencies  
npm run dev              # Dev server (localhost:3000)
npm run build            # Production build
npm run start            # Serve production build
npm run lint             # ESLint validation
```

## Mass Edit Strategy
- **Bulk changes**: Use Node.js scripts like `fix-all-emojis.js` for consistent modifications
- **Sitemap updates**: Programmatically update `src/app/sitemap.ts` when adding multiple pages
- **Validation**: Test sample pages before bulk deployment

## Critical Gotchas
- Many pages are client components by historical pattern — only convert to server components if removing client hooks
- Watch trailing slashes in schema ID values (must match `trailingSlash: false` config)
- Extensive redirect rules in `next.config.ts` — be careful not to break existing `.html` migrations
- Production optimizations (`optimizeCss`, image formats) are tuned for Vercel deployment
