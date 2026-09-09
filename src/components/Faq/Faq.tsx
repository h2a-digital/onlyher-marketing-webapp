'use client';

import { faq } from '@/content/faq';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Analytics, EVT } from '@/utils/analytics';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(openIndex === index ? null : index);

    if (isOpening) {
      Analytics.instance.capture(EVT.FAQ_ITEM_OPENED, {
        question: faq[index].q,
        index,
      });
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#0F0A17] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,59,181,0.1),transparent_32%)]" />

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-4xl text-[#F13BB5]">?</div>
          <h2 id="faq-heading" className="mb-4 text-4xl font-black text-white md:text-5xl">
            Questions, Answered
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-medium text-[#AAA1B8]">
            Everything you need to know before meeting your new companion.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div
                  className={`overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#F13BB5]/35 bg-[#181121] shadow-lg shadow-[#6D2468]/15'
                      : 'border-white/10 bg-[#15101F] hover:border-[#F13BB5]/25 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus-visible:ring-2 focus-visible:ring-[#F13BB5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0A17] md:px-8 md:py-6"
                  >
                    <span className="flex-1 text-lg font-bold text-white md:text-xl">
                      {item.q}
                    </span>
                    <div
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-[#F13BB5]' : 'bg-white/10'
                      }`}
                    >
                      <svg
                        className={`h-5 w-5 transition-colors ${isOpen ? 'text-white' : 'text-[#AAA1B8]'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-base leading-relaxed text-[#AAA1B8] md:px-8 md:pb-8 md:text-lg">
                      {item.a}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-lg text-[#AAA1B8]">Still have questions?</p>
          <a
            href="#support"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F13BB5] to-[#B529A0] px-8 py-4 font-bold text-white shadow-[0_12px_32px_rgba(241,59,181,0.22)] transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#F13BB5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0A17] active:scale-95"
          >
            Get in Touch
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
