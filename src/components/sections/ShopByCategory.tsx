'use client';
import React from 'react';
import { CATEGORIES } from '@/data/products';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { motion } from 'framer-motion';

export const ShopByCategory = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #34B4FF 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-secondary mb-5">
            Find what your kitchen is missing
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            Browse by category and find exactly what you need — whether you&apos;re setting up a new kitchen or upgrading what you already have.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};