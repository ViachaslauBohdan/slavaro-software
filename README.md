# Volska Landing

Marketing landing page for **Volska Landing** — same-day design and 48-hour landing delivery. Built with [Next.js](https://nextjs.org) and bootstrapped with [v0](https://v0.app).

## Deploy (preview / test only)

This project is meant for **preview (test) deployments**, not production. Use the Vercel CLI without `--prod`:

```bash
npm run deploy:preview
```

The command prints a unique **preview URL** (and `VERCEL_ENV=preview`). Metadata, sitemap, and robots use that deployment’s hostname automatically (`VERCEL_URL`). Search engines are **not** indexed on preview (`noindex`).

Do **not** run `vercel deploy --prod` unless you intentionally want a production deployment. In the Vercel dashboard, you can also disable or avoid wiring a production branch for this project.

Optional: set `NEXT_PUBLIC_SITE_URL` in `.env.local` or Vercel env if you need a fixed canonical URL for a specific preview.

### Readme screenshot

The image below is a static snapshot; run `npm run deploy:preview` and use the printed URL for the latest build, or open the current public deployment: [volska-landing.vercel.app](https://volska-landing.vercel.app).

[![Website preview — hero and above-the-fold](docs/readme-preview.png)](https://volska-landing.vercel.app)

## Repository name on GitHub

To rename the repository from `v0-vention-design-clone` to **`volska-landing`**: GitHub → **Settings** → **General** → Repository name → save. Then update your local remote:

```bash
git remote set-url origin git@github.com:ViachaslauBohdan/volska-landing.git
```

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS 4, Radix UI primitives
- **Forms:** React Hook Form, Zod
- **Analytics:** Vercel Analytics

## Prerequisites

- Node.js 20+ (recommended)
- npm, pnpm, or yarn

## Getting started

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables and fill in real values:

   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Optional. Fixed public URL for metadata/sitemap; if unset, uses `VERCEL_URL` on Vercel. |
| `RESEND_API_KEY` | API key for [Resend](https://resend.com) (contact form email) |
| `CONTACT_FROM_EMAIL` | Sender address for outbound emails (e.g. `Name <noreply@domain.com>`) |
| `CONTACT_TO_EMAIL` | Inbox that receives contact submissions |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token for notifications |
| `TELEGRAM_CHAT_ID` | Chat ID for Telegram notifications |

The contact API (`app/api/contact/route.ts`) sends email via Resend and optionally notifies Telegram. Configure the variables you need for your deployment.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | Run ESLint |
| `npm run deploy:preview` | Deploy to Vercel **preview** (no `--prod`) |

## Project layout

- `app/` — App Router pages, layout, `sitemap.ts`, `robots.ts`, and API routes
- `components/` — UI sections and shared components
- `docs/` — Repository assets (for example the README preview image)
- `marketing/` — Outreach copy and guides (not served by the app by default)

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can keep iterating in v0; merges to `main` may trigger deployment depending on your setup.

[Continue working on v0 →](https://v0.app/chat/projects/prj_FJNJ4WoFBtI2nKpydsvI1GJzqME9)

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [v0 Documentation](https://v0.app/docs)

<a href="https://v0.app/chat/api/kiro/clone/ViachaslauBohdan/volska-landing" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
