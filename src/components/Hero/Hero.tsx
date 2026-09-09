'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AppStoreButtons } from '../ui';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#f8fff5] to-[#eefbe9]"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#62C743]/18 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#55C936]/12 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm backdrop-blur-xl"
            >
              <span className="text-2xl">🥗</span>
              <span className="text-sm font-semibold text-slate-900">AI Calorie Tracking</span>
            </motion.div>

            <h1 className="mb-6 text-5xl leading-tight font-black text-slate-900 md:text-6xl lg:text-7xl">
              <span className="whitespace-nowrap">Track every meal</span>
              <br />
              <span className="bg-gradient-to-r from-[#A8E981] via-[#62C743] to-[#55C936] bg-clip-text text-transparent">
                in seconds
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-xl font-medium text-slate-600 md:text-2xl lg:mx-0">
              Take a picture of your meal and let AI estimate calories, protein, carbs, and fat in
              seconds.
            </p>

            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <AppStoreButtons />
              </motion.div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="font-semibold text-slate-700">Calorie and macro guidance</span>
              </div>
              {/* <div className="flex items-center gap-2 text-gray-700">
                <span className="text-xl">🔒</span>
                <span className="font-semibold">100% Private</span>
              </div> */}
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-xl">⚡</span>
                <span className="font-semibold">Food logging in seconds</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="relative rounded-[3rem] bg-[#11111A] p-3 shadow-2xl">
                <div className="aspect-[9/19] overflow-hidden rounded-[2.5rem] bg-[#09090F]">
                  <Image
                    src="/screenshots/home.PNG"
                    alt="AppyDiet main home dashboard"
                    width={360}
                    height={760}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-0 left-1/2 h-6 w-1/3 -translate-x-1/2 rounded-b-2xl bg-[#11111A]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-semibold tracking-wider uppercase">Scroll</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
