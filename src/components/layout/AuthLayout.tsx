'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCheckCircle, HiShieldCheck, HiBolt, HiStar } from 'react-icons/hi2';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  imageSide?: 'left' | 'right';
}

export const AuthLayout = ({ children, title, subtitle, imageSide = 'right' }: AuthLayoutProps) => {
  const features = [
    { icon: <HiShieldCheck className="w-5 h-5" />, text: 'Secure & encrypted checkout' },
    { icon: <HiBolt className="w-5 h-5" />, text: 'Lightning-fast shipping' },
    { icon: <HiStar className="w-5 h-5" />, text: 'Premium quality products' },
    { icon: <HiCheckCircle className="w-5 h-5" />, text: '30-day money back guarantee' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {imageSide === 'left' && (
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10 flex flex-col justify-center p-16 text-white w-full">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white mb-12 transition-colors text-sm font-medium">
              <HiArrowLeft className="w-4 h-4" /> Back to shop
            </Link>
            <h2 className="text-4xl font-bold mb-4">Join the LAZAK community</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">Quality Kitchen and Home Essentials and Home Essentials utensilizes for home cooks across the US. Real products, real people, real support.</p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="flex items-center gap-3 text-white/80">
                  <span className="text-primary">{f.icon}</span>
                  <span className="text-sm">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors text-sm font-medium lg:hidden">
            <HiArrowLeft className="w-4 h-4" /> Back to shop
          </Link>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-text-main mb-2">{title}</h1>
            <p className="text-text-muted">{subtitle}</p>
          </div>
          {children}
        </motion.div>
      </div>
      {imageSide === 'right' && (
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative z-10 flex flex-col justify-center p-16 text-white w-full">
            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white mb-12 transition-colors text-sm font-medium">
              <HiArrowLeft className="w-4 h-4" /> Back to shop
            </Link>
            <h2 className="text-4xl font-bold mb-4">Join the LAZAK community</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">Quality Kitchen and Home Essentials utensilizes for home cooks across the US. Real products, real people, real support.</p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} className="flex items-center gap-3 text-white/80">
                  <span className="text-primary">{f.icon}</span>
                  <span className="text-sm">{f.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};