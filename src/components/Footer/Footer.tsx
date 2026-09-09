'use client';

import { site } from '@/content/site';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={'/images/icon.png'}
                alt={`${site.app.name} logo`}
                loading="eager"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-slate-900">{site.app.name}</span>
            </div>
            <p className="max-w-sm text-slate-600">
              Track calories and macros with AI meal scanning, food search, barcode scans, and
              simple daily logging.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-bold text-slate-900">Legal</h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link href="/legal/privacy" className="transition-colors hover:text-slate-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="transition-colors hover:text-slate-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-slate-900">Contact</h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  href={`mailto:${site.company.email}`}
                  className="transition-colors hover:text-slate-900"
                >
                  {site.company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-emerald-100 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} {site.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
