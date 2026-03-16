'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PERKS = [
  {
    num: '01',
    title: 'Free UK Shipping',
    body: 'On every order over 50 pounds. No discount code needed, no small print. Delivered straight to your door.',
  },
  {
    num: '02',
    title: '2-Year Warranty',
    body: 'Every LAZAK product is backed by a full 2-year manufacturer warranty. We stand completely behind what we make.',
  },
  {
    num: '03',
    title: '30-Day Returns',
    body: 'Changed your mind? Return within 30 days on us. Clean, simple, zero questions asked.',
  },
  {
    num: '04',
    title: '4.8 Star Rating',
    body: 'Over 10,000 verified customers rate us highly for quality, durability, and fast shipping. Honest reviews only.',
  },
  {
    num: '05',
    title: 'UK-Based Support',
    body: 'Real people answering every message promptly. Our team resolves issues fast and treats every customer with care.',
  },
  {
    num: '06',
    title: 'Secure Checkout',
    body: 'Fully encrypted payments with zero data stored on our servers. Shop with complete confidence every time.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header block */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
                Why LAZAK
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tighter uppercase"
            >
              Built Around<br />
              <span className="text-[#34B4FF]">You.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/45 text-lg leading-relaxed max-w-md"
          >
            Every detail in the LAZAK range is considered from the perspective
            of the person using it daily. That is how we build and why customers keep coming back.
          </motion.p>
        </div>

        {/* Numbered list */}
        <div className="border-t border-white/10">
          {PERKS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="grid grid-cols-[56px_1fr_1fr] md:grid-cols-[72px_1fr_1fr] gap-6 md:gap-10 py-7 border-b border-white/10 group cursor-default hover:border-[#34B4FF]/40 transition-colors duration-300"
            >
              <span className="text-[11px] font-black uppercase tracking-widest text-white/20 group-hover:text-[#34B4FF] transition-colors duration-300 pt-0.5">
                {p.num}
              </span>
              <h3 className="text-white font-black text-sm uppercase tracking-[0.1em] group-hover:text-[#34B4FF] transition-colors duration-300 pt-0.5">
                {p.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
