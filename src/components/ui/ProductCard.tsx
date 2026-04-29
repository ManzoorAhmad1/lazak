'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  index?: number;
  /** Override which image to display (used when expanding images into individual cards) */
  imageOverride?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0, imageOverride }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDescription = !!product.description?.trim();
  const imageOnly = !hasDescription;
  const src = imageOverride ?? product.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      className="group flex flex-col bg-white relative h-full border border-gray-200 rounded-[18px] shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative bg-[#F5F5F3] overflow-hidden">
        <img
          src={src}
          alt={product.title}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content — hidden for image-only cards */}
      {!imageOnly && (
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#34B4FF] transition-colors line-clamp-2">
            {product.title}
          </h3>
          <p className={`text-gray-500 text-sm leading-relaxed mb-1 ${expanded ? '' : 'line-clamp-3'}`}>
            {product.description}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#34B4FF] text-xs font-semibold mb-2 text-left hover:underline focus:outline-none"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        </div>
      )}
    </motion.div>
  );
};
