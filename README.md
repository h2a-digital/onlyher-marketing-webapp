# AppyDiet Marketing Website

> A modern, responsive marketing website for the AppyDiet AI calorie counter and food tracking app.

## Overview

AppyDiet is a high-performance marketing site built with Next.js 16 and the App Router. It showcases the AppyDiet mobile app, which identifies foods from meal photos, estimates calories and macros, and makes nutrition tracking feel effortless.

**Live Site:** [https://onlyher.h2adigital.com](https://onlyher.h2adigital.com)

## Features

- Modern dark premium design
- Fully responsive layout
- Accessible semantic markup
- Framer Motion animations with reduced-motion support
- Interactive gallery with meal tracking preview cards
- Contact form with honeypot and SMTP integration
- Hash-based navigation
- Privacy Policy and Terms of Service pages

## Tech Stack

- Next.js 16 with App Router
- TypeScript 5
- Tailwind CSS v4
- Framer Motion
- PostHog analytics
- Supabase and SMTP integrations

## Project Structure

```text
onlyher-marketing-webapp/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── services/
│   └── utils/
├── env.ts
├── next.config.ts
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://onlyher.h2adigital.com
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
SMTP_HOST=smtp.mail.me.com
SMTP_PORT=587
SMTP_USER=your_email@icloud.com
SMTP_PASS=your_app_specific_password
CONTACT_FROM=noreply@yourdomain.com
CONTACT_TO=support@h2adigital.com
SUPABASE_URL=https://your-project.supabase.co
```

## Development

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Support

- Email: support@h2adigital.com
- Website: [https://onlyher.h2adigital.com](https://onlyher.h2adigital.com)
- Company: H2A Digital
