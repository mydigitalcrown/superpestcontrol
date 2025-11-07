# Google Search Console Verification Setup

This document explains how Google Search Console verification is configured for this Next.js website.

## Verification Methods

This site supports **two verification methods** for Google Search Console:

### 1. HTML File Verification (Primary Method)
- **File location**: `/public/google857220722364cb08.html`
- **Accessible at**: `https://superpestcontrol.in/google857220722364cb08.html`
- **Content**: `google-site-verification: google857220722364cb08.html`

### 2. Meta Tag Verification (Secondary Method)
- **Configured in**: `src/app/layout.tsx`
- **Verification code**: `google857220722364cb08`
- Next.js automatically generates: `<meta name="google-site-verification" content="google857220722364cb08" />`

## Implementation Details

### Redirect Configuration
The site uses a catch-all redirect pattern to convert `.html` URLs to clean URLs (e.g., `/about.html` → `/about`). However, this was preventing Google from accessing the verification file.

**Solution**: Modified `next.config.ts` to exclude files starting with "google" from the redirect:

```typescript
{
  source: '/:path((?!google).+).html',
  destination: '/:path*',
  permanent: true,
}
```

**How it works**:
- `(?!google)` - Negative lookahead: path must NOT start with "google"
- `.+` - Match one or more characters
- Files like `google857220722364cb08.html` will NOT be redirected
- Files like `about.html` WILL be redirected to `/about`
- Files like `my-google-tips.html` WILL be redirected (doesn't start with "google")

### Static File Serving
Next.js automatically serves files from the `/public` folder at the root URL. The verification file is placed there and served directly when not caught by redirects.

## Verification Steps

To verify your site with Google Search Console:

1. **Using HTML File Method**:
   - Ensure the file exists in `/public/google[YOUR_CODE].html`
   - Verify it's accessible at `https://superpestcontrol.in/google[YOUR_CODE].html`
   - Click "Verify" in Google Search Console

2. **Using Meta Tag Method**:
   - Ensure the verification code is set in `src/app/layout.tsx`
   - Deploy the site
   - Wait for meta tag to be present in page source
   - Click "Verify" in Google Search Console

## Adding New Verification Files

If you need to add a new Google Search Console property:

1. Download the verification file from Google Search Console
2. Place it in the `/public` folder
3. Commit and deploy
4. The file will be automatically accessible (no code changes needed)

Alternatively, update the verification code in `src/app/layout.tsx`:

```typescript
verification: {
  google: "your-new-verification-code",
  yandex: "pest-control-mumbai-yandex",
},
```

## Testing

To test if the verification file is accessible:

```bash
# After deploying
curl https://superpestcontrol.in/google857220722364cb08.html
```

Expected response:
```
google-site-verification: google857220722364cb08.html
```

## Notes

- Google Search Console verification codes are **not sensitive** - they are meant to be public
- Both verification methods can coexist - Google will use whichever one it finds
- The redirect exclusion pattern only affects files in the root directory
- Sub-directory HTML files are not affected by this configuration
