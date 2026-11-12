# Project rules

- Form notifications use server-side Microsoft Graph through the linked Azure Graph gateway connection; save submissions before sending so provider failures never lose leads.

- Keep video manual metadata in `src/data/videoManuals.ts` and uploaded media in CDN asset pointers so the library can grow without bundling videos in the application.
- Manual videos use native user-initiated playback with no preloading and pause other manual players on play to avoid competing audio and unnecessary downloads.
- Register public pages in the shared canonical route list and Vercel static HTML rewrites so sitemap entries and prerendered delivery stay aligned.
- Case study detail pages use the existing case study layout and CDN image pointers; register each in App and SEO while retaining the section's noindex status until publication is requested.