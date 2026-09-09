'use client';

import { motion } from 'framer-motion';
import { features } from '@/content/features';

export function Features() {
  return (
    <section id="features" className="bg-[#090711] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-4xl text-[#F13BB5]">◇</div>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            More personal than a chatbot
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#AAA1B8]">
            OnlyHer brings conversation, voice, personality, and customization together in one
            premium companion experience.
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
              className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#171120] to-[#100C18] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F13BB5]/30 hover:shadow-[0_24px_60px_rgba(109,36,104,0.2)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F13BB5]/20 bg-[#F13BB5]/10 text-2xl text-[#F576CD] transition-colors group-hover:bg-[#F13BB5]/15">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
              <p className="leading-relaxed text-[#AAA1B8]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
