'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

const ROWS = [
  {
    num: '01',
    tag: 'Smart Design',
    heading: 'Folds flat.\nStores anywhere.',
    body: 'The LAZAK mat folds to a fraction of its size in seconds. Slide it into a drawer or hang it on a hook. Your worktop gets its space back the moment you are done.',
    image: '/Lazak dish dry mat-4.png',
    imageLeft: false,
  },
  {
    num: '02',
    tag: 'Built to Last',
    heading: 'Aluminium frame.\nZero rust.',
    body: 'Food-grade aluminium alloy that does not bend, warp, or rust. Engineered for daily Kitchen and Home Essentials use and designed to outlast cheap plastic alternatives by years.',
    image: '/Lazak Dish Dry mat-5.png',
    imageLeft: true,
  },
  {
    num: '03',
    tag: 'Safe and Stable',
    heading: 'Anti-slip base.\nSits solid.',
    body: 'Silicone feet grip your worktop so the mat stays exactly where you place it. No sliding, no shifting. Holds position whether empty or fully loaded.',
    image: '/Lazak dish dry mat-6.png',
    imageLeft: false,
  },
];

export const FeatureSection = () => {
  return (
    <section className="bg-white">
      {ROWS.map((row, i) => (
        <div
          key={i}
          className="grid lg:grid-cols-2 min-h-[600px] border-b border-gray-100 last:border-0"
        >
          {/* Image panel with clip-path wipe */}
          <motion.div
            initial={{
              clipPath: row.imageLeft ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
            }}
            whileInView={{ clipPath: 'inset(0 0 0 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden bg-[#F2F2F0] min-h-[420px] ${
              row.imageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <img
              src={row.image}
              alt={row.heading.replace('\n', ' ')}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text panel */}
          <motion.div
            initial={{ opacity: 0, x: row.imageLeft ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-20 ${
              row.imageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {/* Row marker */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-200">
                {row.num}
              </span>
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-[15px] font-black uppercase tracking-[0.3em] text-[#34B4FF]">
                {row.tag}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[1.0] tracking-tighter text-[#1A1A1A] uppercase mb-8 whitespace-pre-line"
            >
              {row.heading}
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-[420px] mb-10">
              {row.body}
            </p>

            <Link href="/products">
              <button className="self-start inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1 hover:text-[#34B4FF] hover:border-[#34B4FF] transition-colors duration-300 group">
                Explore Range
                <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </motion.div>
        </div>
      ))}
    </section>
  );
};
