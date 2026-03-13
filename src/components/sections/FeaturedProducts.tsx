'use client';
import React from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
});

export const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Featured Products
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-secondary mb-5">
            Kitchen tools worth keeping
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            A curated mix of our best-sellers — the products that consistently land in people&apos;s carts and rarely come back.
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {CATEGORIES.slice(0, 2).map((category, ci) => (
            <div key={category.id}>
              {/* Category label */}
              <motion.div {...fadeUp(ci * 0.1)} className="flex items-center gap-6 mb-12">
                <div className="w-1 h-10 bg-primary rounded-full" />
                <h3 className="text-2xl font-semibold text-secondary tracking-tight">{category.name}</h3>
                <div className="flex-1 h-px bg-muted/15" />
                <Link href={`/category/${category.slug}`} className="text-primary text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 hover:gap-3 transition-all duration-200">
                  See all <HiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              {/* Product grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.filter(p => p.categories.includes(category.slug)).map((product, pi) => (
                  <motion.div key={product.id} {...fadeUp(ci * 0.1 + pi * 0.07)}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.3)} className="mt-20 text-center">
          <Link href="/products">
            <Button variant="outline" className="group px-12 h-14 uppercase tracking-widest font-medium text-sm">
              Explore Full Catalog
              <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};