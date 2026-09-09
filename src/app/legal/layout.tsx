import { ReactNode } from 'react';
import { Header, Footer } from '@/components';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#090711] pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,59,181,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(109,36,104,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="legal-document prose prose-lg prose-invert max-w-none rounded-3xl border border-white/10 bg-[#120D1A]/95 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur md:p-12">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
