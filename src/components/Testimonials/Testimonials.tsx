'use client';

import { testimonials } from '@/content/testimonials';
import { motion } from 'framer-motion';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#090711] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(109,36,104,0.2),transparent_34%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 text-center"
        >
          <div className="mb-4 text-4xl text-[#F13BB5]">✷</div>
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            Connections That Feel Personal
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#AAA1B8]">
            A glimpse at why people make OnlyHer part of their everyday world.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#15101F]/90 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-[#C3BACD]">&quot;{testimonial.quote}&quot;</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-[#81798F]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
