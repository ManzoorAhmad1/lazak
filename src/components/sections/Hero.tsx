'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCheckBadge, HiArrowDown } from 'react-icons/hi2';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/kitchen1.png" alt="LAZAK Kitchen Accessories" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Vertical decorative lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/60 to-transparent hidden lg:block" />
      <div className="absolute top-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/60 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-10"
          >
            <HiCheckBadge className="w-4 h-4 text-primary" />
            <span className="text-white/90 text-xs font-medium uppercase tracking-[0.2em]">Quality Tested. Customer Approved.</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.05] tracking-tight mb-6"
          >
            Everything Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Kitchen Needs</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            From sharp knives and durable cookware to cooler bags, drying racks, and cutting boards -- LAZAK has every kitchen accessory you actually use.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link href="/products">
              <button className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-medium text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02]">
                Shop Now
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-medium text-sm uppercase tracking-widest border border-white/25 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                Get in Touch
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 max-w-3xl mx-auto"
          >
            {[
              { value: '10K+', label: 'Orders Shipped' },
              { value: '500+', label: 'Products' },
              { value: '4.8', label: 'Star Rating' },
              { value: '2 Yr', label: 'Warranty' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-white/5 py-5 px-3 text-center"
              >
                <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <HiArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};