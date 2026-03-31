'use client';
import React from 'react';
import { motion } from 'framer-motion';

const VALUES = [
  {
    num: '01',
    title: 'Chosen with Care',
    body: 'Every product we carry is tested and trusted before it ever reaches you. If we wouldn’t use it in our own homes, we won’t ask you to. That’s what makes us a trusted kitchenware brand.',
  },
  {
    num: '02',
    title: 'Built to Last',
    body: ' We select high-quality home goods that hold up to daily life—no flimsiness, no shortcuts. Just long-lasting kitchen essentials you can feel on day one and years later.',
  },
  {
    num: '03',
    title: 'Honest Value',
    body: 'Good quality shouldn’t come with a premium price tag. We work hard to bring you affordable home essentials that respect your home and your budget.',
  },
  {
    num: '04',
    title: 'Simple to Live With',
    body: 'With Our products are designed to be easy to use, easy to store, and easy to love. The best home lifestyle products are the ones you never have to struggle with.',
  },

];

export const WhyChooseUs = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[15px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
                Our Values
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tighter uppercase"
            >
              Why People<br />
              <span className="text-[#34B4FF]">Choose LAZAK.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/45 text-lg leading-relaxed max-w-md"
          >
            We’re not just here to sell products—we’re here to help make your home life better.
            Whether you’re cooking a family meal, tidying up after a long day,
            or simply looking for ways to bring more ease into your routine,
            LAZAK is designed to support you every step of the way with multi-purpose kitchen helpers and space-saving solutions.
          </motion.p>
        </div>

        {/* Numbered values list */}
        <div className="border-t border-white/10">
          {VALUES.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="grid grid-cols-[40px_1fr] md:grid-cols-[72px_1fr_1fr] gap-x-4 gap-y-2 md:gap-10 py-7 border-b border-white/10 group cursor-default hover:border-[#34B4FF]/40 transition-colors duration-300"
            >
              <span className="text-[11px] font-black uppercase tracking-widest text-white/20 group-hover:text-[#34B4FF] transition-colors duration-300 pt-0.5">
                {v.num}
              </span>
              <h3 className="text-white font-black text-sm uppercase tracking-[0.1em] group-hover:text-[#34B4FF] transition-colors duration-300 pt-0.5">
                {v.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed col-span-2 md:col-span-1">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
