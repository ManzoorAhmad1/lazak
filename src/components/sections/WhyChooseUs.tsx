'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiTruck, HiShieldCheck, HiArrowPath, HiSparkles } from 'react-icons/hi2';
import { ComponentType } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export const WhyChooseUs = () => {
  const features: { icon: ComponentType<{ className?: string }>; title: string; description: string; accent: string }[] = [
    {
      icon: HiSparkles,
      title: 'Built to Last',
      description: "Every item we sell goes through real testing — not just on paper. If it doesn't hold up in a busy kitchen, it doesn't make it to our shelves.",
      accent: 'from-primary/20 to-primary/5',
    },
    {
      icon: HiShieldCheck,
      title: '2-Year Warranty',
      description: "We stand behind what we sell. Every LAZAK product comes with a 2-year warranty. Something breaks? We fix it or replace it. Simple as that.",
      accent: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: HiTruck,
      title: 'Free US Shipping',
      description: "Orders over $50 ship free across the continental United States. Most orders leave our warehouse within one business day.",
      accent: 'from-accent/20 to-accent/5',
    },
    {
      icon: HiArrowPath,
      title: '30-Day Returns',
      description: "Changed your mind or something isn't quite right? No drama. Send it back within 30 days and we'll sort you out — no awkward questions.",
      accent: 'from-emerald-500/20 to-emerald-500/5',
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">Why LAZAK</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-secondary mb-5">
            Honest reasons people keep coming back
          </h2>
          <p className="text-text-muted text-lg leading-relaxed">
            No fluff. Here&apos;s exactly what you get when you order from us — and why thousands of home cooks across the US trust LAZAK for their kitchen.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl p-8 border border-muted/8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${feature.accent} rounded-full`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>

              <h3 className="text-xl font-semibold text-secondary mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 bg-secondary rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <HiShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-semibold text-lg">10,000+ happy customers — and counting</p>
              <p className="text-white/50 text-sm">Serving home cooks and food lovers across the United States</p>
            </div>
          </div>
          <div className="flex items-center gap-8 shrink-0">
            {['4.8★ Reviews', 'Free Returns', 'US Support'].map((badge) => (
              <div key={badge} className="text-center">
                <div className="text-white text-xs font-semibold uppercase tracking-widest">{badge}</div>
                <div className="w-full h-px bg-white/10 mt-1" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};