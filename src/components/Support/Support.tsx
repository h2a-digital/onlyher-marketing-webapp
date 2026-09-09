'use client';

import { site } from '@/content/site';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SupportPresenter from './Support.presenter';
import type { SupportFieldErrors, SupportFormState, SupportFieldName } from './Support.model';

export function Support() {
  const presenter = new SupportPresenter();
  const [formData, setFormData] = useState<SupportFormState>({
    name: '',
    email: '',
    message: '',
    hp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<SupportFieldErrors>({});

  const updateField = (field: SupportFieldName, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    const result = await presenter.submitForm(formData);

    setIsSubmitting(false);
    if (result.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', hp: '' });
      setFieldErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } else if (result.fieldErrors) {
      setFieldErrors(result.fieldErrors);
    }
  };

  return (
    <section id="support" className="bg-[#090711] py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <div className="mb-4 text-4xl text-[#F13BB5]">◇</div>
            <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">Get in touch</h2>
            <p className="text-xl text-[#AAA1B8]">
              Questions about OnlyHer? We&apos;re here to help.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#15101F] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.hp}
                onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                  className={`w-full rounded-xl border bg-[#0D0915] px-4 py-3 text-white transition-colors placeholder:text-[#6F687B] focus:ring-2 focus:ring-[#F13BB5]/30 focus:ring-offset-2 focus:ring-offset-[#15101F] ${
                    fieldErrors.name
                      ? 'border-rose-500/70 focus:border-rose-500'
                      : 'border-white/10 focus:border-[#F13BB5]/50'
                  }`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="mt-2 text-sm text-rose-300">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  className={`w-full rounded-xl border bg-[#0D0915] px-4 py-3 text-white transition-colors placeholder:text-[#6F687B] focus:ring-2 focus:ring-[#F13BB5]/30 focus:ring-offset-2 focus:ring-offset-[#15101F] ${
                    fieldErrors.email
                      ? 'border-rose-500/70 focus:border-rose-500'
                      : 'border-white/10 focus:border-[#F13BB5]/50'
                  }`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {fieldErrors.email && (
                  <p id="email-error" className="mt-2 text-sm text-rose-300">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                  className={`w-full resize-none rounded-xl border bg-[#0D0915] px-4 py-3 text-white transition-colors placeholder:text-[#6F687B] focus:ring-2 focus:ring-[#F13BB5]/30 focus:ring-offset-2 focus:ring-offset-[#15101F] ${
                    fieldErrors.message
                      ? 'border-rose-500/70 focus:border-rose-500'
                      : 'border-white/10 focus:border-[#F13BB5]/50'
                  }`}
                  placeholder="Tell us how we can help..."
                  disabled={isSubmitting}
                />
                {fieldErrors.message && (
                  <p id="message-error" className="mt-2 text-sm text-rose-300">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-[#F13BB5] to-[#B529A0] px-8 py-4 font-bold text-white shadow-[0_12px_32px_rgba(241,59,181,0.18)] transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-semibold text-[#F576CD]"
                >
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="mb-4 text-center text-sm text-[#81798F]">Or email us directly at</p>
              <a
                href={`mailto:${site.company.email}`}
                className="block text-center text-lg font-semibold text-white transition-colors hover:text-[#F13BB5]"
              >
                {site.company.email}
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="mb-4 text-center text-sm font-semibold text-[#81798F]">
                Legal Information
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="/legal/privacy" className="font-medium text-[#AAA1B8] hover:text-white">
                  Privacy Policy
                </a>
                <a href="/legal/terms" className="font-medium text-[#AAA1B8] hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
