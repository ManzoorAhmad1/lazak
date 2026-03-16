'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

const SPECS = [
  { label: 'Foldable Design', sub: 'Saves counter space instantly' },
  { label: 'Aluminium Frame', sub: 'Rust-free, built to last' },
  { label: 'Anti-Slip Base', sub: 'Grips every surface' },
  { label: 'Fast Air Dry', sub: 'Open slat drainage system' },
];

const STATS = [
  { value: '4.8', label: 'Star Rating' },
  { value: '10K+', label: 'Customers' },
  { value: '2 Yr', label: 'Warranty' },
  { value: 'Free', label: 'UK Shipping' },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '72px' }}>
      {/* Two-panel hero */}
      <div className="grid lg:grid-cols-[56%_44%] min-h-[calc(100vh-112px)]">

        {/* LEFT: White editorial text */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-24 py-16 bg-white">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-[2px] bg-[#34B4FF]" />
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#34B4FF]">
              Kitchen Essentials 2026
            </span>
          </motion.div>

          {/* Headline - line by line reveal */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.2rem,7.5vw,6.5rem)] font-black leading-[0.92] tracking-tighter text-[#1A1A1A] uppercase"
            >
              The Dish
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.2rem,7.5vw,6.5rem)] font-black leading-[0.92] tracking-tighter uppercase"
              style={{ WebkitTextStroke: '2px #1A1A1A', color: 'transparent' }}
            >
              Rack That
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.2rem,7.5vw,6.5rem)] font-black leading-[0.92] tracking-tighter text-[#34B4FF] uppercase"
            >
              Does It All.
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm mb-10"
          >
            Foldable aluminium construction. Anti-slip base. Dries faster,
            stores smaller, and lasts years longer than plastic alternatives.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:bg-[#34B4FF] transition-colors duration-300 group"
              >
                Shop Now
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
            <Link href="/products/lazak-foldable-dish-drying-mat-large">
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-3 border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:border-[#34B4FF] hover:text-[#34B4FF] transition-colors duration-300"
              >
                View Product
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-100"
          >
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-xl font-black text-[#1A1A1A]">{s.value}</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-[0.22em] mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Dark product panel with clip-path wipe reveal */}
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0D0D0D] flex items-center justify-center overflow-hidden min-h-[65vw] lg:min-h-0"
        >
          <img
            src="/lazak dry dish mat-1.png"
            alt="LAZAK Dish Drying Mat"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent" />

          {/* Feature tags floating at bottom */}
          <div className="absolute bottom-8 left-6 right-6 flex gap-2 flex-wrap">
            {['Foldable', 'Aluminium Frame', 'Anti-Slip', 'Rust-Free'].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.08 }}
                className="bg-white/10 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-2 border border-white/20"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom specs strip */}
      <div className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {SPECS.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="py-7 px-8"
              >
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-white">{f.label}</div>
                <div className="text-[10px] text-white/40 mt-1.5 leading-relaxed">{f.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
