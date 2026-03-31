'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiEye } from 'react-icons/hi2';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -5, transition: { duration: 0.18 } }}
      className="group flex flex-col bg-white relative h-full border border-gray-200 rounded-[18px] shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          referrerPolicy="no-referrer" 
        />
        
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {product.title}
        </h3>
        
        {/* Description Paragraph */}
        <p className={`text-gray-600 leading-relaxed mb-1 ${expanded ? '' : 'line-clamp-3'}`}>
          {product.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#34B4FF] text-sm font-semibold mb-3 text-left hover:underline focus:outline-none"
        >
          {expanded ? 'See less' : 'See more'}
        </button>

        {/* View Product Button */}
       
      </div>
    </motion.div>
  );
};