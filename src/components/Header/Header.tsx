'use client';

import { site } from '@/content/site';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-emerald-100 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-[#BFF0A8]"
          >
            <Image
              src={'/images/icon.png'}
              alt={`${site.app.name} logo`}
              loading="eager"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-slate-900">{site.app.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={(e) => scrollToSection(e, '#download')}
              className="rounded-full bg-gradient-to-r from-[#62C743] to-[#55C936] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
            >
              Download App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="-mx-4 border-t border-emerald-100 bg-white/95 px-4 py-4 shadow-md backdrop-blur-md sm:-mx-6 sm:px-6 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-base font-medium text-slate-600 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={(e) => scrollToSection(e, '#download')}
                className="rounded-full bg-gradient-to-r from-[#62C743] to-[#55C936] px-6 py-3 text-center text-base font-semibold text-white"
              >
                Download App
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
