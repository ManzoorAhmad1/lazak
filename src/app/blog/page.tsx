'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HiBell, HiArrowLeft } from 'react-icons/hi2';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20 bg-background min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-8"
        >
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-1 text-xs uppercase tracking-[0.2em]">Coming Soon</Badge>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-text-main">
              Our Blog is <br />
              <span className="text-primary">Coming Soon</span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
              Stay tuned for updates, tips, and news about Kitchen & Home Essentials.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/contact">
            <Button size="lg" className="rounded-none px-10 h-16 text-sm font-black uppercase tracking-widest gap-3 shadow-xl">
              <HiBell className="w-5 h-5" /> Notify Me
            </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="rounded-none px-10 h-16 text-sm font-black uppercase tracking-widest gap-3 border-muted/20">
                <HiArrowLeft className="w-5 h-5" /> Back to Home
              </Button>
            </Link>
          </div>

          <div className="pt-12 flex justify-center gap-8 text-text-muted/30">
             <div className="w-12 h-px bg-current" />
             <div className="w-2 h-2 rounded-full bg-current" />
             <div className="w-12 h-px bg-current" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
