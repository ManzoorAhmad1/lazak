'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface VideoCardProps {
  src: string;
  index?: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({ src, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-[18px] overflow-hidden border border-gray-200 shadow-md bg-black"
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        style={{ display: 'block' }}
      />
    </motion.div>
  );
};
