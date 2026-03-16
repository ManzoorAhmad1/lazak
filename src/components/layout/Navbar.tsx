'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiShoppingCart, HiHeart, HiUser, HiBars3, HiXMark } from 'react-icons/hi2';
import { useStore } from '@/lib/store';
import { Logo } from '@/components/ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, favoriteCount } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const isAuthPage = pathname === '/login' || pathname === '/signup';
  if (isAuthPage) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white border-b border-gray-100 shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-10">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Logo />

            {/* Center links */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-200 relative group ${
                    pathname === link.path
                      ? 'text-[#34B4FF]'
                      : 'text-[#1A1A1A] hover:text-[#34B4FF]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#34B4FF] transition-all duration-300 ${
                      pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-0.5 md:gap-1">
              <Link href="/favorites" className="relative p-2.5 hover:bg-gray-50 transition-colors group">
                <HiHeart
                  className={`w-5 h-5 transition-colors ${
                    favoriteCount > 0
                      ? 'text-red-500 fill-current'
                      : 'text-[#1A1A1A] group-hover:text-[#34B4FF]'
                  }`}
                />
                {favoriteCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#34B4FF] text-white text-[9px] font-black flex items-center justify-center rounded-full">
                    {favoriteCount}
                  </span>
                )}
              </Link>

              <Link href="/cart" className="relative p-2.5 hover:bg-gray-50 transition-colors group">
                <HiShoppingCart className="w-5 h-5 text-[#1A1A1A] group-hover:text-[#34B4FF] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#34B4FF] text-white text-[9px] font-black flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="hidden md:block w-px h-5 bg-gray-200 mx-3" />

              <Link
                href="/signup"
                className="hidden md:flex items-center gap-2 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.18em] px-5 py-2.5 hover:bg-[#34B4FF] transition-colors duration-300"
              >
                <HiUser className="w-3.5 h-3.5" />
                Account
              </Link>

              <button
                className="lg:hidden p-2.5 text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="block text-base font-black uppercase tracking-[0.18em] text-[#1A1A1A] hover:text-[#34B4FF] transition-colors border-b border-gray-100 pb-5"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex gaps-6 gap-6 pt-2">
                  <Link href="/favorites" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                    <HiHeart className="w-5 h-5" /> Favourites ({favoriteCount})
                  </Link>
                  <Link href="/cart" className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                    <HiShoppingCart className="w-5 h-5" /> Cart ({cartCount})
                  </Link>
                </div>
                <Link
                  href="/signup"
                  className="flex items-center justify-center gap-2 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.18em] px-5 py-3.5 w-full"
                >
                  Create Account
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};