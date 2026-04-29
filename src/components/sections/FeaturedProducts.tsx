'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { VideoCard } from '@/components/ui/VideoCard';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

export const FeaturedProducts = () => {
  const featured = PRODUCTS.filter(p => p.categories.includes('featured')).slice(0, 4);

  return (
    <section className="py-24 bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[15px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">Our Collection</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tighter uppercase leading-[1.0]">Best Sellers</h2>
          </div>
          <Link href="/products">
            <button className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#1A1A1A] border-b-2 border-[#1A1A1A] pb-0.5 hover:text-[#34B4FF] hover:border-[#34B4FF] transition-colors">
              View All <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.flatMap((product, i) => {
            const hasImages = product.images && product.images.length > 0;
            const isImageOnly = hasImages && !product.description?.trim();
            const videoCards = product.video
              ? [<VideoCard key={`${product.id}-video`} src={product.video} index={i} />]
              : [];
            if (isImageOnly) {
              return [
                ...videoCards,
                ...product.images!.map((img, imgIdx) => (
                  <ProductCard key={`${product.id}-img-${imgIdx}`} product={product} imageOverride={img} index={i + imgIdx} />
                )),
              ];
            }
            return [...videoCards, <ProductCard key={product.id} product={product} index={i} />];
          })}
        </div>
      </div>
    </section>
  );
};