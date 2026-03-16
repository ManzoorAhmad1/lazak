'use client';
import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5">
            <Logo />
            <p className="text-white/40 text-sm leading-relaxed">
              Kitchen accessories made for people who actually cook.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaYoutube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 bg-white/8 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: 'Dish Drying Racks', href: '/category/dish-drying-racks' },
                { label: 'Cooler Bags', href: '/category/cooler-bags' },
                { label: 'Food Storage', href: '/category/food-storage' },
                { label: 'All Products', href: '/products' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/55 text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'My Account', href: '/login' },
                { label: 'Create Account', href: '/signup' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/55 text-sm hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 mb-5">Contact</h4>
            <ul className="space-y-3 text-white/55 text-sm">
              <li>support@lazak.com</li>
              <li>+1 (800) 123-4567</li>
              <li className="pt-2 text-white/30 text-xs leading-relaxed">
                Los Angeles, CA<br />United States
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-14 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-white/25 text-xs">
          <span>&copy; 2026 LAZAK. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};