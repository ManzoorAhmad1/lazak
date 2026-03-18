'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    image: '/image1.jpg',
    tag: 'Your Kitchen and Home Essentials',
    heading: 'A Kitchen That Works For You',
    bright: true,
  },
  {
    image: '/image copy 4.png',
    tag: 'Your Home',
    heading: 'Where Every Kitchen Feels Like Home',
    bright: false,
  },
  {
    image: '/image copy 2.png',
    tag: 'Your Life',
    heading: 'Less Effort. More Living.',
    bright: true,
  },
];

export const LifestylePillars = () => {
  return (
    <section className="bg-[#F7F7F5] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[15px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
                How We Help
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.0]"
            >
              Making Your Life<br />
              <span className="text-[#34B4FF]">Comfort with style.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-base leading-relaxed max-w-sm"
          >
           Lazak Products – Your Kitchen and Home Essential Partner.
          </motion.p>
        </div>

        {/* Three pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.heading}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'brightness(1.05) saturate(1.1)' }}
                />
               
                <div className="absolute bottom-5 left-5">
                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="bg-white p-4 flex justify-center items-center">
                <h3 className="text-lg  text-[#1A1A1A] tracking-tight uppercase leading-tight">
                  {p.heading}
                </h3>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
