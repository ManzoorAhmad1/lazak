'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

const STATS = [
  { value: '10K+', label: 'Happy Homes' },
  { value: '4.8', label: 'Star Rating' },
  { value: '2 Yr', label: 'Warranty' },
  { value: 'Free', label: 'UK Delivery' },
];

export const Hero = () => {
  return (
    <section style={{ paddingTop: '72px' }} className="min-h-screen overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-72px)]">

        {/* LEFT: Content */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-16 bg-white order-2 lg:order-1">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-[2px] bg-[#34B4FF]" />
            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-[#34B4FF]">
              Kitchen and Home Essentials
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.4rem,7vw,6.2rem)] font-black leading-[0.92] tracking-tighter text-[#1A1A1A] uppercase"
            >
              Comfort
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.4rem,7vw,6.2rem)] font-black leading-[0.92] tracking-tighter uppercase"
              style={{ WebkitTextStroke: '2px #1A1A1A', color: 'transparent' }}
            >
              with
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3.4rem,7vw,6.2rem)] font-black leading-[0.92] tracking-tighter text-[#34B4FF] uppercase"
            >
              Care.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-[420px] mb-10"
          >
            Thoughtfully made kitchen and home essentials that simplify your daily
            routine, reduce the mess, and turn your house into a place that
            truly feels like home.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:bg-[#34B4FF] transition-colors duration-300 group"
              >
                Explore Our Range
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-3 border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:border-[#34B4FF] hover:text-[#34B4FF] transition-colors duration-300"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-4 gap-4 pt-8 border-t border-gray-100"
          >
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-xl font-black text-[#1A1A1A]">{s.value}</div>
                <div className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Bright Unsplash kitchen image - clip-path wipe reveal */}
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1.05, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden min-h-[60vw] lg:min-h-0 order-1 lg:order-2"
        >
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=90&auto=format&fit=crop"
            alt="Bright modern kitchen - LAZAK Kitchen and Home Essentials"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(1.05) saturate(1.1)' }}
          />
          {/* Subtle dark overlay on left edge for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-5 py-3.5 border-l-4 border-[#34B4FF]"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Comfort with Care</div>
            <div className="text-[9px] text-gray-500 mt-0.5">Kitchen and Home Essentials</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
