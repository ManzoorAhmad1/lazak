'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiCheckBadge } from 'react-icons/hi2';
import Image from 'next/image';

const reviews = [
  {
    name: 'Marcus T.',
    role: 'Home Cook, Chicago',
    text: "I've gone through a lot of knife sets over the years. LAZAK is the first one I didn't want to return after the first week. The balance just feels right — not too heavy, not flimsy.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/64?img=11',
  },
  {
    name: 'Diana R.',
    role: 'Food Enthusiast, Austin',
    text: "Ordered the cookware bundle for my new apartment. Everything arrived well-packaged and the non-stick actually works — which I know sounds basic, but that's not a given anymore.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/64?img=5',
  },
  {
    name: 'James L.',
    role: 'Weekend Cook, Seattle',
    text: "My wife and I cook pretty much every night. We needed gear that could keep up. LAZAK stuff has been in our kitchen for about eight months now and nothing has chipped, warped, or rusted.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/64?img=8',
  },
  {
    name: 'Priya S.',
    role: 'Recipe Developer, New York',
    text: "I test a lot of kitchen products for my blog. LAZAK consistently performs well — and their customer support actually responded within an hour when I had a question about a product. That matters.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/64?img=9',
  },
  {
    name: 'Robert K.',
    role: 'Home Kitchen, Denver',
    text: "Shipping was fast. Packaging was solid. The products look exactly like the pictures — which honestly isn't always the case when you're buying online. Happy customer overall.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/64?img=14',
  },
  {
    name: 'Olivia M.',
    role: 'Cooking Hobbyist, Portland',
    text: "I bought the knife set as a gift for my dad. He called me a week later just to say how much he liked it. That pretty much says everything — he never calls about gifts.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/64?img=6',
  },
];

const TestimonialCard = ({ review, delay }: { review: typeof reviews[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white rounded-2xl p-7 border border-muted/10 shadow-soft flex flex-col gap-5 h-full"
  >
    <div className="flex gap-1">
      {Array.from({ length: review.rating }).map((_, i) => (
        <HiStar key={i} className="w-4 h-4 text-accent" />
      ))}
    </div>

    <p className="text-secondary/80 text-sm leading-relaxed flex-1 italic">
      &ldquo;{review.text}&rdquo;
    </p>

    <div className="h-px bg-muted/10" />

    <div className="flex items-center gap-3">
      <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/20 shrink-0">
        <Image src={review.avatar} alt={review.name} fill className="object-cover" unoptimized />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-secondary truncate">{review.name}</span>
          <HiCheckBadge className="w-4 h-4 text-primary shrink-0" />
        </div>
        <p className="text-xs text-text-muted truncate">{review.role}</p>
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">Real Reviews</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-secondary mb-5">
            Don&apos;t take our word for it
          </h2>
          <p className="text-text-muted text-lg">
            These are actual customers who bought something, used it, and then sat down to write about it. That&apos;s as honest as feedback gets.
          </p>
        </motion.div>

        {/* Aggregate rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14 p-6 bg-background rounded-2xl border border-muted/10"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-secondary">4.8</div>
            <div className="flex gap-1 justify-center mt-2">
              {[1,2,3,4,5].map(i => <HiStar key={i} className="w-5 h-5 text-accent" />)}
            </div>
            <div className="text-xs text-text-muted mt-1">Average Rating</div>
          </div>
          <div className="w-px h-16 bg-muted/20 hidden sm:block" />
          <div className="flex flex-col gap-2 min-w-[200px]">
            {[5, 4, 3].map((star) => (
              <div key={star} className="flex items-center gap-3 text-xs text-text-muted">
                <span className="w-4">{star}★</span>
                <div className="flex-1 h-1.5 bg-muted/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: star === 5 ? '84%' : star === 4 ? '12%' : '4%' }}
                  />
                </div>
                <span className="w-8 text-right">{star === 5 ? '84%' : star === 4 ? '12%' : '4%'}</span>
              </div>
            ))}
          </div>
          <div className="w-px h-16 bg-muted/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">1,400+</div>
            <div className="text-xs text-text-muted mt-1">Verified Reviews</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <TestimonialCard key={i} review={r} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};