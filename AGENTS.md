# Project rules

- Keep video manual metadata in `src/data/videoManuals.ts` and uploaded media in CDN asset pointers so the library can grow without bundling videos in the application.
- Manual videos use native user-initiated playback with no preloading and pause other manual players on play to avoid competing audio and unnecessary downloads.
- Register public pages in the shared canonical route list and Vercel static HTML rewrites so sitemap entries and prerendered delivery stay aligned.