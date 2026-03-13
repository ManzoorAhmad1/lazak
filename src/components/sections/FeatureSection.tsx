'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

export const FeatureSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">Featured Collection</span>
          <h2 className="text-4xl md:text-5xl font-medium text-secondary leading-tight mb-4">
            Built for Every <span className="text-primary">Kitchen Task</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Good knives, a solid cooler bag, somewhere to dry your dishes — we carry the stuff your kitchen actually needs. Nothing fancy, just things that work.
          </p>
        </div>

        {/* Top row: large left + two stacked right panels of equal combined height */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">

          {/* Large left panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-[2] relative rounded-3xl overflow-hidden group h-[480px] cursor-pointer"
          >
            <img src="/kitchen1.png" alt="Kitchen Accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-primary text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Our Bestsellers</span>
              <h3 className="text-3xl font-semibold text-white mb-2">The Full Kitchen Range</h3>
              <p className="text-white/70 text-sm mb-4">Knives, cookware, cutting boards, drying racks — it is all here in one place.</p>
              <Link href="/products">
                <button className="inline-flex items-center gap-2 bg-white text-secondary text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all">
                  Shop Now <HiArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right column — two panels stacked, total height = 480px */}
          <div className="flex-[1] flex flex-col gap-4 h-[480px]">

            {/* Smart Storage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src="/kitchen2.png" alt="Food Storage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Food Storage</h3>
                <p className="text-white/65 text-xs">Vacuum bags, wrap rolls, and butcher paper.</p>
              </div>
            </motion.div>

            {/* BBQ & Outdoor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src="/kitchen3.png" alt="BBQ and Outdoor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">BBQ and Outdoor</h3>
                <p className="text-white/65 text-xs">Cooler bags and tools for grilling outdoors.</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden group h-[230px] cursor-pointer"
        >
          <img src="/image copy.png" alt="Everyday Kitchen Tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-8 flex items-end justify-between w-full">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">Daily Use Accessories</h3>
              <p className="text-white/65 text-sm">Drying racks, utensils, and the small things that actually matter.</p>
            </div>
            <Link href="/products" className="shrink-0 ml-4">
              <button className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all">
                View All <HiArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};