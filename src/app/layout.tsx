import type { Metadata } from 'next';
import { site } from '@/content/site';
import { Toast, AnalyticsHost } from '@/components';
import { env } from '../../env';

import '../styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(env.SITE_URL),
  title: {
    default: `${site.app.name} - ${site.app.tagline}`,
    template: `%s | ${site.app.name}`,
  },
  description:
    'Meet your perfect AI girlfriend. Chat, flirt, roleplay, make immersive voice calls, and create a virtual companion with a personality made for you.',
  keywords: [
    'AI girlfriend',
    'virtual companion',
    'AI companion',
    'AI girlfriend chat',
    'AI voice calls',
    'romantic AI chat',
    'custom AI girlfriend',
    'AI roleplay',
    'OnlyHer',
    'AI Girlfriend: OnlyHer',
  ],
  authors: [{ name: site.company.name, url: 'https://h2adigital.com' }],
  creator: site.company.name,
  applicationName: site.app.name,
  category: 'Entertainment',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: env.SITE_URL,
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Choose your girl, start a natural conversation, call her, and build an AI companion experience that feels uniquely yours.',
    siteName: site.app.name,
    images: [
      {
        url: '/icon0.svg',
        width: 512,
        height: 512,
        alt: `${site.app.name} app icon`,
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.app.name} - ${site.app.tagline}`,
    description:
      'Chat, flirt, call, and create a connection with an AI girlfriend who matches your personality.',
    images: ['/icon0.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'y9xUcPL8jCrDt5sfUnOKnqs3J-4APi3Iw7f4JQbCJGE',
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    { rel: 'icon', url: '/icon0.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/icon0.svg', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <AnalyticsHost />
        <Toast />
      </body>
    </html>
  );
}
