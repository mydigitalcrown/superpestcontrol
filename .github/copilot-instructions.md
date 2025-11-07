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
  { "@type": "FAQPage", "@id": "{url}#faq" }
]
```

### URL & Redirect Strategy
- **No trailing slashes**: `trailingSlash: false` in `next.config.ts`
- **HTML redirects**: Extensive `.html` to clean URL redirects in `next.config.ts`
- **Language redirects**: `/hi` and `/mr` redirect to English pages (no i18n)
- **Canonical URLs**: Always `https://superpestcontrol.in/{path}`

### Sitemap Generation
- Dynamic sitemap in `src/app/sitemap.ts`
- Core pages: priority 0.8-1.0, daily/weekly frequency
- Location pages: priority 0.7, monthly frequency
- robots.txt in `src/app/robots.ts` with crawler-specific rules

## Styling & Design

### Tailwind Configuration
- Custom orange theme: `primary.500: '#f97316'` (main brand color)
- Custom blue theme: `secondary.500: '#3b82f6'`
- Extended Tailwind v4 in `tailwind.config.ts`
- Backdrop blur effects: `backdrop-blur-xl` on headers
- Gradient patterns: `from-orange-500 via-orange-600 to-red-500`

### Design System
- **Logo**: 🐛 emoji in gradient orange circle (`bg-gradient-to-br`)
- **Buttons**: Orange gradient CTAs, pill-shaped navigation
- **Cards**: White backgrounds with subtle shadows, hover scale effects
- **Mobile**: Responsive breakpoints at `sm:`, `md:`, `lg:`
- **Icons**: Emoji-based (📞, ✅, 🛡️, ⚡) - no icon libraries

## Development Workflow

### Key Commands
```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build with Next.js optimization
npm run start        # Serve production build
npm run lint         # ESLint with Next.js config
```

### File Creation Patterns
When adding new location pages:
1. Create `src/app/pest-control-in-{location}/` directory
2. Add `layout.tsx` with metadata (use existing as template)
3. Add `page.tsx` with full content + schema markup
4. Update `src/app/sitemap.ts` to include new route
5. Consider adding redirect in `next.config.ts` if migrating from HTML

### State Management
- React `useState` for UI state (mobile menus, tabs, accordions)
- No external state libraries - keep state local to components
- Form handling uses controlled components

## Performance Optimizations

### Next.js Config Settings
- Image optimization: WebP/AVIF formats with custom device sizes
- Compression enabled (`compress: true`)
- CSS optimization: `experimental.optimizeCss: true`
- No powered-by header for security

### Best Practices
- Use Next.js `<Link>` for internal navigation
- Use Next.js `<Image>` for images (currently using standard img tags in many places)
- Keep client components minimal - extract static content to server components when possible
- Lazy load heavy content sections

## Testing & Validation
- Check schema markup with Google Rich Results Test
- Validate structured data with Schema.org validator
- Test mobile menu functionality (state-based visibility)
- Verify canonical URLs and Open Graph tags

## Common Gotchas
- Pages are client components by default (historical pattern) - new pages can be server components unless needing interactivity
- Schema markup uses string interpolation for dynamic URLs - watch for trailing slashes
- **Correct phone number**: Always use `+91-80979-41077` (some older pages may have incorrect numbers)
- FAQ data arrays defined inline per page - consider extracting to shared file if pattern repeats
- Navigation active states determined by comparing href to current path (duplicate logic across pages)
