'use client';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];
  const categories = [
    { name: 'Cookware', path: '/category/cookware' },
    { name: 'Knives & Cutting', path: '/category/knives' },
    { name: 'Kitchen Accessories', path: '/category/accessories' },
    { name: 'Cooking Essentials', path: '/category/essentials' },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-white/60 text-sm leading-relaxed">Quality kitchen tools for home cooks who actually cook. Browse our range and find something you&apos;ll use every single day.</p>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebook className="w-4 h-4" />, label: 'Facebook', href: '#' },
                { icon: <FaTwitter className="w-4 h-4" />, label: 'Twitter', href: '#' },
                { icon: <FaInstagram className="w-4 h-4" />, label: 'Instagram', href: '#' },
                { icon: <FaYoutube className="w-4 h-4" />, label: 'YouTube', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="p-2.5 bg-white/10 hover:bg-primary rounded-xl transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.path}><Link href={l.path} className="text-white/60 hover:text-white text-sm transition-colors">{l.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base">Categories</h3>
            <ul className="space-y-3">
              {categories.map((c) => (
                <li key={c.path}><Link href={c.path} className="text-white/60 hover:text-white text-sm transition-colors">{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/60 text-sm"><HiEnvelope className="w-4 h-4 text-primary shrink-0" /><span>hello@lazak.com</span></li>
              <li className="flex items-center gap-3 text-white/60 text-sm"><HiPhone className="w-4 h-4 text-primary shrink-0" /><span>+1 (555) 123-4567</span></li>
              <li className="flex items-start gap-3 text-white/60 text-sm"><HiMapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Los Angeles, CA — United States</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} LAZAK. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};