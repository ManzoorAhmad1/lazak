'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-8 h-[2px] bg-[#34B4FF]" />
              <span className="text-[15px] font-black uppercase tracking-[0.32em] text-[#34B4FF]">
                Newsletter
              </span>
            </motion.div>
        
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-white font-black text-xl uppercase tracking-wider">
                Thank you. Your discount is on its way.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-6 py-4 text-sm focus:outline-none focus:border-[#34B4FF] transition-colors duration-300 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#34B4FF] text-white px-6 py-4 hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300 group flex-shrink-0"
                >
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
            <p className="text-white/30 text-[9px] mt-4 uppercase tracking-[0.2em]">
              No spam, ever. Unsubscribe any time. Valid for new subscribers only.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
