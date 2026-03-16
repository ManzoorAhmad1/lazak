'use client';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { ShopByCategory } from '@/components/sections/ShopByCategory';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Newsletter } from '@/components/sections/Newsletter';
import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';

export default function HomePage() {
  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main>
      <Hero />
      
      {/* Marquee strip */}
      <div className="bg-[#1A1A1A] py-4 overflow-hidden w-full">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {[
            'FREE UK SHIPPING ON ORDERS OVER £50',
            '2-YEAR WARRANTY ON ALL PRODUCTS',
            '4.8 STARS FROM 10,000+ CUSTOMERS',
            '30-DAY HASSLE-FREE RETURNS',
            'FREE UK SHIPPING ON ORDERS OVER £50',
            '2-YEAR WARRANTY ON ALL PRODUCTS',
            '4.8 STARS FROM 10,000+ CUSTOMERS',
            '30-DAY HASSLE-FREE RETURNS',
          ].map((item, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mx-10">
              {item}
              <span className="text-[#34B4FF] mx-8">+</span>
            </span>
          ))}
        </div>
      </div>

      <motion.div {...sectionVariants} viewport={{ once: true }}>
        <FeatureSection />
      </motion.div>

      <motion.div {...sectionVariants} viewport={{ once: true }}>
        <FeaturedProducts />
      </motion.div>

      <motion.div {...sectionVariants} viewport={{ once: true }}>
        <ShopByCategory />
      </motion.div>

      <motion.div {...sectionVariants} viewport={{ once: true }}>
        <WhyChooseUs />
      </motion.div>

      <motion.div {...sectionVariants} viewport={{ once: true }}>
        <Testimonials />
      </motion.div>
      
      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#0A0A0A] py-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-[#34B4FF]" />
                <span className="text-[9px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">Limited Time</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.0] tracking-tighter uppercase">
                Ready to Upgrade<br />
                <span className="text-[#34B4FF]">Your Kitchen?</span>
              </h2>
              <p className="text-white/45 mt-6 text-lg leading-relaxed max-w-md">
                Join 12,000+ home cooks who trust LAZAK for smarter, better kitchen accessories built to last.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/products">
                <button className="inline-flex items-center gap-3 bg-[#34B4FF] text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300 group">
                  Shop Now <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/signup">
                <button className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.22em] hover:border-[#34B4FF] hover:text-[#34B4FF] transition-colors duration-300">
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionVariants} viewport={{ once: true }}>
        <Newsletter />
      </motion.div>
    </main>
  );
}

