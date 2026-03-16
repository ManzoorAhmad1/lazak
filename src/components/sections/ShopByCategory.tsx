'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CATEGORIES } from '@/data/products';

const featured = ['dish-drying-racks', 'cooler-bags', 'food-storage', 'cooking-essentials'];

export const ShopByCategory = () => {
  const cats = CATEGORIES.filter(c => featured.includes(c.slug));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">Browse Range</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.0]">Shop by Category</h2>
          </div>
          <Link href="/products" className="text-[10px] font-black uppercase tracking-[0.22em] text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-0.5 hover:text-[#34B4FF] hover:border-[#34B4FF] transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
            >
              <Link href={`/category/${cat.slug}`} className="group block relative h-72 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 bg-[#F5F5F3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide">{cat.name}</h3>
                  <span className="text-white/60 text-[11px] uppercase tracking-widest group-hover:text-primary transition-colors">Shop Now</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};