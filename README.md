# Zirey

A personal portfolio styled as a nostalgic desktop, built with the existing Next.js / React / TypeScript setup. No new dependencies, external fonts, trackers, or remote assets.

Pages: `/`, `/cv`, `/testimonials`, `/logbook`, `/projects`, `/contact`. Each uses the shared retro desktop frame. Projects now occupies the former placeholder page.

## Personalize

- Edit `app/page.tsx` for your introduction and `app/_components/desktop.tsx` for branding.
- Edit studies, interests, and technologies in `app/cv/page.tsx`. Add only genuine, permissioned feedback to `app/testimonials/page.tsx`; it currently has an intentional empty state.
- Edit the flagship projects and smaller experiments in `app/projects/page.tsx`. Project descriptions use the supplied personal brief; no other project repositories were available in this workspace to support further detail.
- Add undated topic notes to the `entries` array in `app/logbook/page.tsx`. Add dates only when known.
- Set `CONTACT_EMAIL=you@your-domain.com` in `.env.local` or your host’s environment settings. It is intentionally unset until you supply an address. This address becomes public on the contact page. Contact opens the visitor’s mail app; there is no submission service.
- Visual styles live in `app/globals.css`; the appended portfolio content section handles the project layouts, CV, logbook, and mobile adjustments. The postcard markup remains in `app/page.tsx`.

## Runtime and security

Use a supported Node.js version compatible with the installed Next.js release. Existing dependencies and lockfile are retained. Standard commands remain `npm ci`, `npm run dev`, `npm run build`, and `npm start`; none were executed during this setup.

Deploy with the Next.js server behind HTTPS. This is not a static export: the root layout uses dynamic rendering so every response can receive a fresh script/style nonce. `proxy.ts` sets a restrictive Content Security Policy and prevents nonce-bearing responses from shared caching. Development permits the eval/styles/websocket behavior needed by Next.js; production does not. `next.config.ts` adds anti-framing, MIME-sniffing protection, referrer and permissions policies, and production HSTS. Preserve these headers through your hosting proxy.

Security header reference: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
Nonce reference: https://nextjs.org/docs/app/guides/content-security-policy

No authentication, database, user-supplied HTML, uploads, or write endpoints are included. Keep dependencies patched. These controls are a baseline, not a security certification. At the owner’s request, no application execution, build, lint, tests, browser checks, or dependency audit were performed. Runtime, visual rendering, and deployed headers remain unverified.
