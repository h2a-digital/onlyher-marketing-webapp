'use client';

import { motion } from 'framer-motion';
import { how } from '@/content/how';

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-b from-[#120A1A] to-[#090711] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-4xl text-[#F13BB5]">✦</div>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">Three Simple Steps</h2>
          <p className="mx-auto max-w-2xl text-xl text-[#AAA1B8]">
            From first hello to a connection that feels completely your own.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {how.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full rounded-3xl border border-white/10 bg-[#15101F] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F13BB5] to-[#6D2468] text-2xl font-bold text-white shadow-[0_8px_24px_rgba(241,59,181,0.2)]">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="leading-relaxed text-[#AAA1B8]">{step.description}</p>
              </div>

              {/* Connection line (desktop only) */}
              {index < how.length - 1 && (
                <div className="absolute top-14 left-full -z-10 hidden h-0.5 w-full bg-[#F13BB5]/20 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
