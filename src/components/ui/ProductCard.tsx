'use client';
import React from 'react';
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
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {product.title}
        </h3>
        
        {/* Description Paragraph */}
        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>

        {/* View Product Button */}
        <div className="mt-auto">
          <Link href={`/products/${product.slug}`}>
            <Button 
              variant="outline" 
              className="w-full rounded-[10px] uppercase tracking-widest text-xs font-medium h-11 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <HiEye className="w-4 h-4 mr-2" />
              View Product
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};