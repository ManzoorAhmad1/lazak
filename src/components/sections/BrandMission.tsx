'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

export const BrandMission = () => {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-stretch">
          {/* Left: image - full width and height */}
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            whileInView={{ clipPath: 'inset(0 0 0 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full min-h-[280px] md:min-h-[420px] lg:min-h-[560px] bg-[#F5F5F3]"
          >
            <img
              src="/image copy 6.png"
              alt="Who We Are - LAZAK Home Essentials"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(1.05) saturate(1.1)' }}
            />
          </motion.div>

          {/* Right: text with padding */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="px-6 lg:px-10 py-12 lg:py-16 flex items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-[#34B4FF]" />
                <span className="text-[15px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.0] mb-8">
                Made for 
                <span className="text-[#34B4FF] ms-3">comfort.</span>
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                It is not just about trends, it's about bringing comfort with care.
              </p>

             

              <Link href="/products">
                <button className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-1 hover:text-[#34B4FF] hover:border-[#34B4FF] transition-colors duration-300 group">
                  Our Products
                  <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};