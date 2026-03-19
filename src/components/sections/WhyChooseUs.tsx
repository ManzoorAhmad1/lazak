'use client';
import React from 'react';
import { motion } from 'framer-motion';

const VALUES = [
  {
    num: '01',
    title: 'Chosen with Care',
    body: 'Nothing enters the LAZAK range without being tested and trusted first. If it would not work in our own homes, it does not go in yours.',
  },
  {
    num: '02',
    title: 'Built to Last',
    body: 'We only carry products made from materials that hold up to daily use. No flimsiness, no short cuts. Quality you can feel on the first day and the five hundredth.',
  },
  {
    num: '03',
    title: 'Honest Value',
    body: 'Good quality should not mean premium price. We work hard to bring you well-made kitchen and home essentials that respect your budget as much as your home.',
  },
  {
    num: '04',
    title: 'Simple to Live With',
    body: 'Every product we carry should be easy to use, easy to store, We believe the best home utensilizes are the ones you barely have to think about.',
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
            We are not just selling Kitchen and Home Essentials products. We are committed to
            making your home life better -- more comfortable, more organised,
            and a great deal less stressful.
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
