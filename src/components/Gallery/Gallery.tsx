'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { gallery } from '@/content/gallery';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0F0A17] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,59,181,0.12),transparent_34%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            Step Into OnlyHer
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#AAA1B8]">
            Discover characters, share intimate conversations, call her, and shape a personality
            that matches your energy.
          </p>
        </motion.div>

        <div className="mx-auto max-w-sm">
          <div className="relative rounded-[3rem] border border-white/10 bg-[#11111A] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.55),0_0_60px_rgba(241,59,181,0.12)]">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2.5rem] bg-[#09090F]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[selectedIndex].src}
                    alt={gallery[selectedIndex].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 360px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute top-0 left-1/2 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-[#11111A]" />

            {/* Nav buttons */}
            <button
              onClick={() =>
                setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
              }
              type="button"
              className="absolute top-1/2 -left-16 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1B1526] text-[#D6CDDF] shadow-lg transition-colors hover:border-[#F13BB5]/30 hover:text-white sm:flex"
              aria-label="Previous app screenshot"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev + 1) % gallery.length)}
              type="button"
              className="absolute top-1/2 -right-16 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1B1526] text-[#D6CDDF] shadow-lg transition-colors hover:border-[#F13BB5]/30 hover:text-white sm:flex"
              aria-label="Next app screenshot"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                type="button"
                className={`transition-all ${
                  selectedIndex === index
                    ? 'h-3 w-8 rounded-full bg-[#F13BB5]'
                    : 'h-3 w-3 rounded-full bg-[#3C324A] hover:bg-[#6D2468]'
                }`}
                aria-label={`View app screenshot ${index + 1}: ${gallery[index].alt}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
