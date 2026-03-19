'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane, HiChatBubbleOvalLeft, HiClock, HiChevronDown } from 'react-icons/hi2';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const sectionVariants = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" } };
  const faqs = [
    { q: 'How fast does my order ship?', a: 'Most orders are dispatched within one business day. Standard delivery takes 3–5 days across the continental US. Orders over $50 ship completely free.' },
    { q: 'What if I want to return something?', a: 'Easy. Contact us within 30 days of receiving your order and we will send over a prepaid return label — no cost to you, no awkward questions.' },
    { q: 'Do you ship outside the US?', a: "Right now we only ship within the United States. We're working on expanding internationally, so check back soon if you're outside the US." },
    { q: 'Is there a warranty on LAZAK products?', a: 'Yes. Every product we sell comes with a 2-year warranty covering manufacturing defects. If something goes wrong, reach out and we will make it right.' }
  ];
  const contactItems = [
    { icon: HiEnvelope, title: 'Email Us', content: ['info@lazakcare.com'], color: 'primary' },
    { icon: HiPhone, title: 'Call Us', content: ['+15613959535'], color: 'secondary' },
    { icon: HiMapPin, title: 'Based In', content: ['New York, USA'], color: 'accent' },
    { icon: HiClock, title: 'Response Time', content: ['Under 2 hours', 'During business hours'], color: 'muted' }
  ];
  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div {...sectionVariants} viewport={{ once: true }} className="space-y-12">
            <div className="space-y-6">
              <Badge variant="primary">Contact Us</Badge>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight">Let's talk</h1>
              <p className="text-text-muted text-lg leading-relaxed max-w-xl">Got a question about a product, an order, or just want to know if something is the right fit for you? We are a real team and we actually respond.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {contactItems.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-5">
                  <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center text-${item.color} shrink-0 shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    {item.content.map((c, i) => <p key={i} className="text-text-muted text-sm">{c}</p>)}
                  </div>
                </motion.div>
              ))}
            </div>
          
          </motion.div>
          <motion.div {...sectionVariants} viewport={{ once: true }} className="w-full">
            <Card className="p-8 md:p-16 rounded-[40px] shadow-medium border-muted/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Input label="First Name" placeholder="Enter your first name" className="h-14" />
                  <Input label="Last Name" placeholder="Enter your last name" className="h-14" />
                </div>
                <Input label="Email Address" placeholder="Enter your email" type="email" className="h-14" />
                <Input label="Phone Number" placeholder="Enter your phone number" className="h-14" />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-main ml-1">Message</label>
                  <textarea className="w-full px-5 py-4 bg-surface border border-muted/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all placeholder:text-muted/50 min-h-[180px] text-base" placeholder="How can we help you?" />
                </div>
                <Button size="lg" className="w-full h-16 text-lg gap-3 rounded-2xl shadow-lg shadow-primary/20">
                  <HiPaperAirplane className="w-5 h-5" /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

      </div>
    </main>
  );
}