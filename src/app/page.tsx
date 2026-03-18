'use client';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { BrandMission } from '@/components/sections/BrandMission';
import { LifestylePillars } from '@/components/sections/LifestylePillars';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
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
  'TRUSTED BY 10,000+ UK HOMES',
  'COMFORT WITH CARE',
  'KITCHEN AND HOME ESSENTIALS',
  'MAKING YOUR LIFE EASIER',
  'TRUSTED BY 10,000+ UK HOMES',
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
            &ldquo;Your home deserves products that work as hard as you do --
            and feel good while doing it.&rdquo;
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="w-6 h-[2px] bg-white/50" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70">
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

      {/* 7. Testimonials */}
      <motion.div {...fadeUp}>
        <Testimonials />
      </motion.div>

      {/* 8. CTA to products */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden"
      >
        <div className="grid lg:grid-cols-2">
          {/* Left: dark editorial text */}
          <div className="bg-[#0A0A0A] px-10 md:px-16 py-20 lg:py-28 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
                Ready to Start
              </span>
            </div>
            <h2 className="text-[clamp(2.6rem,5vw,4.2rem)] font-black text-white leading-[1.0] tracking-tighter uppercase mb-6">
              Bring Comfort<br />
              <span className="text-[#34B4FF]">Home Today.</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-10 max-w-md">
              Browse our full range of kitchen and home essentials —
              every product chosen with care, every delivery made with pride.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <button className="inline-flex items-center gap-3 bg-[#34B4FF] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300 group">
                  Explore Products
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 border border-white/25 text-white/80 px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:border-[#34B4FF] hover:text-[#34B4FF] transition-colors duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
            {/* Trust row */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
              {['Free UK Delivery','2 Year Warranty','10,000+ Happy Homes'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34B4FF]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/50">{t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right: clean kitchen image */}
          <div className="relative overflow-hidden min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85&auto=format&fit=crop"
              alt="Kitchen and Home Essentials"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.95) saturate(1.1)' }}
            />
          </div>
        </div>
      </motion.section>

      {/* 9. Newsletter */}
      <motion.div {...fadeUp}>
        <Newsletter />
      </motion.div>

    </main>
  );
}
