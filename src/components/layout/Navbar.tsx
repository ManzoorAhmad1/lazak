'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiShoppingCart, HiHeart, HiMagnifyingGlass, HiBars3, HiXMark, HiUser } from 'react-icons/hi2';
import { useStore } from '@/lib/store';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, favoriteCount } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !isScrolled;
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  if (isAuthPage) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent ? 'bg-surface shadow-medium' : 'bg-surface shadow-medium'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="hidden lg:flex flex-1 max-w-md lg:max-w-xl mx-4 lg:mx-8">
              <div className="relative w-full group ">
                <HiMagnifyingGlass className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60 group-focus-within:text-black`} />
                <input type="text" placeholder="Search kitchen tools, knives, cookware..." className={`w-full pl-12 pr-4 py-3 border rounded-full focus:outline-none focus:ring-4 transition-all text-sm font-medium bg-muted/5 border-muted/10 focus:bg-white focus:border-primary focus:ring-primary/10`} />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-6">
              <div className="hidden md:flex items-center gap-6 mr-4">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path} className={`text-sm font-medium transition-all hover:text-primary relative group ${pathname === link.path ? 'text-primary' : (isTransparent ? 'text-black hover:text-black/80' : 'text-text-main')}`}>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full ${pathname === link.path ? 'w-full' : ''}`} />
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Link href="/favorites" className="relative p-2 md:p-2.5 hover:bg-primary/5 rounded-full transition-all group">
                  <HiHeart className={`w-5 h-5 transition-colors ${favoriteCount > 0 ? 'text-red-500 fill-current' : (isTransparent ? 'text-black group-hover:text-black/80' : 'text-text-main group-hover:text-primary')}`} />
                  {favoriteCount > 0 && <span className="absolute top-1 right-1 w-5 h-5 bg-accent text-black text-[10px] font-medium flex items-center justify-center rounded-full border-2 border-surface shadow-sm">{favoriteCount}</span>}
                </Link>
                <Link href="/cart" className="relative p-2 md:p-2.5 hover:bg-primary/5 rounded-full transition-all group">
                  <HiShoppingCart className={`w-5 h-5 transition-colors ${isTransparent ? 'text-black group-hover:text-black/80' : 'text-text-main group-hover:text-primary'}`} />
                  {cartCount > 0 && <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-black text-[10px] font-medium flex items-center justify-center rounded-full border-2 border-surface shadow-sm">{cartCount}</span>}
                </Link>
                <div className={`w-px h-6 mx-2 hidden md:block ${isTransparent ? 'bg-white/20' : 'bg-muted/20'}`} />
                <Link href="/signup">
                  <Button variant="primary" size="sm" className="flex items-center gap-2 rounded-xl px-4 md:px-6 shadow-sm hover:shadow-md h-9 md:h-10 text-xs md:text-sm">
                    <HiUser className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign Up</span>
                    <span className="sm:hidden">Join</span>
                  </Button>
                </Link>
              </div>
            </div>
            <button className={`md:hidden p-2.5 rounded-full transition-colors ${isTransparent ? 'hover:bg-white/10 text-black' : 'hover:bg-muted/10 text-text-main'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-surface border-t border-muted/10 overflow-hidden">
            <div className="container mx-auto px-4 py-6 space-y-8">
              <div className="relative w-full group">
                <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-4 h-4 group-focus-within:text-primary transition-colors" />
                <input type="text" placeholder="Search products..." className="w-full pl-12 pr-4 py-3 bg-muted/5 border border-muted/10 rounded-full focus:outline-none focus:ring-4 focus:ring-primary/10 focus:bg-white focus:border-primary transition-all text-sm font-medium" />
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => <Link key={link.path} href={link.path} className="text-lg font-medium border-b border-muted/5">{link.name}</Link>)}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Link href="/favorites" className="flex items-center gap-2 text-lg font-medium"><HiHeart className="w-5 h-5" /> Favorites ({favoriteCount})</Link>
                <Link href="/cart" className="flex items-center gap-2 text-lg font-medium"><HiShoppingCart className="w-5 h-5" /> Cart ({cartCount})</Link>
              </div>
              <div className="flex flex-col gap-3 py-4">
                <Link href="/signup"><Button variant="primary" className="w-full py-3 rounded-xl font-medium">Sign Up</Button></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};