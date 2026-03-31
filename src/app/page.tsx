'use client';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { BrandMission } from '@/components/sections/BrandMission';
import { LifestylePillars } from '@/components/sections/LifestylePillars';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Newsletter } from '@/components/sections/Newsletter';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: 'easeOut' },
};

const MARQUEE_ITEMS = [
  'COMFORT WITH CARE',
  'KITCHEN AND HOME ESSENTIALS',
  'MAKING YOUR LIFE EASIER',
  'COMFORT WITH CARE',
  'KITCHEN AND HOME ESSENTIALS',
  'MAKING YOUR LIFE EASIER',
];

export default function HomePage() {
  return (
    <main>

      {/* 1. Hero - full-bleed kitchen image, Comfort with Care */}
      <Hero />

      {/* 2. Marquee strip */}
      <div className="bg-[#1A1A1A] py-4 overflow-hidden w-full">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mx-10">
              {item}
              <span className="text-[#34B4FF] mx-8">+</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. Brand Mission - who we are */}
      <motion.div {...fadeUp}>
        <BrandMission />
      </motion.div>

      {/* 4. Big manifesto quote */}
      <section className="bg-[#34B4FF] py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(1.6rem,3.5vw,3rem)] font-black text-white leading-[1.2] tracking-tighter uppercase"
          >
            Making your life more comfortable with style and thoughtful design.          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="w-6 h-[2px] bg-white/50" />
            <span className="text-[15px] font-black uppercase tracking-[0.3em] text-white/70">
              The LAZAK Promise
            </span>
            <div className="w-6 h-[2px] bg-white/50" />
          </motion.div>
        </div>
      </section>

      {/* 5. How we help - lifestyle pillars */}
      <motion.div {...fadeUp}>
        <LifestylePillars />
      </motion.div>

      {/* 6. Our values */}
      <motion.div {...fadeUp}>
        <WhyChooseUs />
      </motion.div>




      {/* 9. Newsletter */}
      <motion.div {...fadeUp}>
        <Newsletter />
      </motion.div>

    </main>
  );
}
