'use client';
import React from 'react';
import { motion } from 'framer-motion';

const FEATURED = {
  text: 'Best dish rack I have owned. Folds flat, dries fast, the aluminium frame is genuinely solid. Zero complaints after six months of daily use.',
  name: 'Sarah M.',
  city: 'London, UK',
};

const REVIEWS = [
  {
    name: 'James L.',
    city: 'Manchester',
    text: 'Absolutely worth it. Bought one for myself and a second for my mum. Fast delivery, great packaging. She loves it.',
  },
  {
    name: 'Rachel K.',
    city: 'Edinburgh',
    text: 'The anti-slip base genuinely works. Does not move on my granite worktop. Looks clean, does the job, stores away beautifully.',
  },
  {
    name: 'Mike D.',
    city: 'Birmingham',
    text: 'Clean design, smart engineering. Holds a full dish load without any flex. My old plastic rack is in the bin where it belongs.',
  },
  {
    name: 'Priya N.',
    city: 'Bristol',
    text: 'Replaced a bulky rack that lived on my counter permanently. This folds away instantly. Changed how I use my kitchen.',
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-[2px] bg-[#34B4FF]" />
          <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
            Customer Reviews
          </span>
        </motion.div>

        {/* Large featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-l-[3px] border-[#34B4FF] pl-10 mb-20"
        >
          <p className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-light text-[#1A1A1A] leading-[1.35] tracking-tight max-w-4xl mb-8">
            &ldquo;{FEATURED.text}&rdquo;
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]">
                {FEATURED.name}
              </div>
              <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mt-0.5">
                {FEATURED.city}
              </div>
            </div>
            <div className="text-amber-400 text-base tracking-tight">{"★★★★★"}</div>
            <div className="hidden sm:block flex-1 h-px bg-gray-100" />
            <div className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
              4.8 Stars from 1,400+ Reviews
            </div>
          </div>
        </motion.div>

        {/* Grid of review cards — gap-px creates razor-thin separator effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-8 hover:bg-[#F5F5F3] transition-colors duration-300"
            >
              <div className="text-amber-400 text-sm mb-5">{"★★★★★"}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1A1A1A]">
                  {r.name}
                </div>
                <div className="text-[9px] text-gray-400 uppercase tracking-[0.18em] mt-0.5">
                  {r.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
