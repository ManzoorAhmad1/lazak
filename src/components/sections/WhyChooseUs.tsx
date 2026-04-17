'use client';
import React from 'react';
import { motion } from 'framer-motion';

const VALUES = [
  {
    num: '01',
    title: 'Chosen with Care',
    body: 'Every product we offer undergoes rigorous testing to ensure quality and reliability before it reaches your home. If we wouldn’t use it ourselves, we won’t offer it to you. This unwavering commitment to excellence is what sets us apart as a trusted kitchenware brand.',
  },
  {
    num: '02',
    title: 'Built to Last',
    body: 'We curate premium home goods designed to withstand daily use, no compromises, no shortcuts. Experience durable kitchen essentials that deliver quality you can trust from day one and for years to come.',
  },
  {
    num: '03',
    title: 'Honest Value',
    body: 'Good quality shouldn’t come with a premium price tag. We work hard to bring you affordable home essentials that respect your home and your budget.',
  },
  {
    num: '04',
    title: 'Simple to Live With',
    body: 'Our products are thoughtfully designed for effortless use, convenient storage, and lasting enjoyment. The best home lifestyle products are those that simplify your life, never causing frustration.',
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

            At LAZAK, we do more than offer products—we enhance your everyday living.
            Whether you’re preparing a family meal, tidying up after a busy day,
            or searching for ways to simplify your routine,
            our multi-purpose kitchen helpers and space-saving solutions are crafted to
            you at every step. Experience convenience,
            efficiency, and comfort with LAZAK in your home.

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
