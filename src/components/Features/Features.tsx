'use client';

import { motion } from 'framer-motion';
import { features } from '@/content/features';

export function Features() {
  return (
    <section id="features" className="bg-[#f8fff7] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-5xl">🍲</div>
          <h2 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl">
            Everything you need to track calories effortlessly
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            AppyDiet turns nutrition tracking into a clear process: scan a meal, log it fast, and
            watch calories and macros update automatically.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-[0_20px_50px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#62C743]/30 hover:bg-[#fbfffa]"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="leading-relaxed text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
