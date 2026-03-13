'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope, HiTag, HiGiftTop, HiArrowRight, HiCheckCircle } from 'react-icons/hi2';

const perks = [
  { icon: HiTag, label: 'Subscriber-only discounts — up to 20% off new arrivals' },
  { icon: HiGiftTop, label: 'Free gift on your first order over $100' },
  { icon: HiCheckCircle, label: 'Early access when new products drop — before anyone else' },
];

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); setEmail(''); }
  };

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

          <div className="flex flex-col lg:flex-row items-stretch">

            {/* Left panel */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                  <HiEnvelope className="w-4 h-4" />
                  Stay in the loop
                </span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                  Good deals.<br />
                  <span className="text-primary">No nonsense.</span>
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8">
                  Join over 12,000 people who get our emails. We send deals, new product announcements, and kitchen tips. That&apos;s it — nothing else.
                </p>

                <ul className="flex flex-col gap-4">
                  {perks.map((p, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                        <p.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-white/70 text-sm">{p.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-white/10 self-stretch my-10" />

            {/* Right panel */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                {sent ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <HiCheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">You&apos;re in!</h3>
                    <p className="text-white/50 text-sm">Check your inbox — your first deal should be there shortly.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-white/80 text-lg font-medium mb-2">Drop your email below</p>
                    <p className="text-white/40 text-sm mb-8">We&apos;re not into spam. One email at a time, when it&apos;s actually worth it.</p>

                    <form onSubmit={handle} className="flex flex-col gap-4">
                      <div className="relative">
                        <HiEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          placeholder="you@email.com"
                          className="w-full bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm rounded-xl pl-12 pr-4 py-4 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-xl px-6 py-4 transition-all duration-200 group"
                      >
                        Subscribe — it&apos;s free
                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>

                    <p className="text-white/25 text-xs text-center mt-6">
                      12,000+ subscribers. Unsubscribe any time.
                    </p>
                  </>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};