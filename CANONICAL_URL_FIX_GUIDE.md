# Canonical URL Fix Guide

## Issue Summary
Google Search Console reports **106 non-canonical URL errors** out of 145 pages. This means 73% of your pages are not properly indexed due to missing canonical URL metadata.

## Root Cause Analysis

### What are Canonical URLs?
Canonical URLs tell search engines which version of a URL is the "primary" or "canonical" version when multiple URLs might show similar content. They're defined in the `<link rel="canonical">` HTML tag.

### Why This Matters for SEO
- **Google indexing**: Without canonical URLs, Google may not index your pages properly
- **Duplicate content**: Multiple URLs for the same content can dilute SEO value
- **Search rankings**: Non-canonical pages get lower priority in search results

### Technical Issue
Your Next.js pages need to export canonical URLs in their metadata. Missing this metadata causes Google Search Console to flag them as "non-canonical URLs."

## Current Status
- ✅ **145 total pages** building successfully
- ❌ **106 pages** missing canonical URL metadata
- ✅ **39 pages** already have proper canonical URLs
- 🎯 **Only 23 pages** successfully indexed by Google

## Solution Approach

### Required Metadata Structure
Each page needs this metadata export:

```typescript
export const metadata = {
  // ... existing metadata
  alternates: {
    canonical: 'https://superpestcontrol.in/page-url'
  }
}
```

### Safe Implementation Strategy

#### Phase 1: High-Priority Pages (10 pages)
Fix the most important pages first:
1. Home page
2. Main service pages (commercial, residential)
3. Top city pages (Mumbai, Pune locations)

#### Phase 2: Service Pages (20 pages)
Fix all pest control service pages:
- Ant control, bed bug control, cockroach control, etc.

#### Phase 3: Location Pages (76 pages)
Fix all location-specific pages:
- All "pest-control-in-[location]" pages

### Implementation Steps

1. **Manual Approach** (Recommended)
   - Edit 5-10 pages at a time
   - Test build after each batch
   - Verify metadata in browser dev tools

2. **Semi-Automated Approach**
   - Create a smaller script for 10 pages max
   - Include build testing in the script
   - Rollback capability built-in

3. **Validation Checklist**
   - [ ] Page builds without errors
   - [ ] Canonical URL appears in page source
   - [ ] URL matches the page's actual URL
   - [ ] No duplicate canonical tags

## Priority Page List

### Immediate Fixes Needed (Top 10)
1. `/` (Home page)
2. `/commercial`
3. `/pest-control-in-mumbai`
4. `/commercial-pest-control-mumbai`
5. `/pest-control-in-pune`
6. `/ant-control-mumbai`
7. `/cockroach-control-mumbai`
8. `/bed-bug-control-mumbai`
9. `/pest-control-in-andheri`
10. `/pest-control-in-bandra`

### Testing Command
After each fix, run:
```bash
npm run build
```

### Verification Steps
1. Build succeeds ✅
2. Check page source for `<link rel="canonical">`
3. Submit updated sitemap to Google Search Console
4. Monitor indexing status

## Expected Results
- **Immediate**: Build continues to work
- **1-2 days**: Google starts recognizing canonical URLs
- **1-2 weeks**: More pages get indexed
- **1 month**: Significant improvement in search rankings

## Risk Mitigation
- Work in small batches (5-10 pages)
- Keep git commits separate for easy rollback
- Test each batch thoroughly
- Monitor build status continuously

## Next Steps
1. Start with the top 10 priority pages
2. Add canonical URLs manually to avoid corruption
3. Test and validate each page
4. Gradually expand to all 106 pages
5. Monitor Google Search Console for improvements