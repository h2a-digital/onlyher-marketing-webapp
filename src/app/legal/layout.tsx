import { ReactNode } from 'react';
import { Header, Footer } from '@/components';

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-white pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(98,199,67,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(85,201,54,0.06),transparent_30%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-slate max-w-none rounded-3xl border border-emerald-100 bg-white p-8 shadow-[0_30px_90px_rgba(16,24,40,0.08)] backdrop-blur md:p-12">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
