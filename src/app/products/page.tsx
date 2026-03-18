'use client';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HiMagnifyingGlass } from 'react-icons/hi2';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'all') params.delete('category');
    else params.set('category', category);
    router.push(`/products?${params.toString()}`);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (selectedCategory !== 'all') result = result.filter(p => p.categories.includes(selectedCategory));
    if (searchQuery) result = result.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()));
    result = result.filter(p => p.price <= maxPrice);
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [selectedCategory, sortBy, searchQuery, maxPrice]);

  const displayedProducts = useMemo(() => {
    // Agar "All Products" selected hai toh saare filtered products dikhao
    if (selectedCategory === 'all' && !searchQuery) {
      return filteredProducts; // Yeh saare products show karega
    }
    return filteredProducts; // Yeh bhi saare products show karega for other categories
  }, [filteredProducts, selectedCategory, searchQuery]);

  const sectionVariants = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: 'easeOut' as const } };

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="flex flex-col md:flex-row gap-10" initial="initial" animate="whileInView" variants={{ initial: { opacity: 0 }, whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
          <motion.aside variants={sectionVariants} className="w-full md:w-64 space-y-8 shrink-0">
            <div className="space-y-4">
              <h3 className="font-medium text-lg border-b border-muted/10 pb-2">Categories</h3>
              <div className="flex flex-col gap-2">
                <button onClick={() => handleCategoryChange('all')} className={`text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${selectedCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-muted/10 text-text-muted'}`}>All Products</button>
                {CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => handleCategoryChange(cat.slug)} className={`text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${selectedCategory === cat.slug ? 'bg-primary text-white' : 'hover:bg-muted/10 text-text-muted'}`}>{cat.name}</button>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-medium text-primary mb-2">USA Support</h4>
              <p className="text-xs text-text-muted leading-relaxed">All products ship from our USA warehouses with 24/7 local support.</p>
            </div>
          </motion.aside>
          <motion.div variants={sectionVariants} className="flex-1 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-4 rounded-xl border border-muted/10">
              <span className="text-sm text-text-muted font-medium">Showing <span className="text-text-main font-medium">{displayedProducts.length}</span> of <span className="text-text-main font-medium">{PRODUCTS.length}</span> products</span>
              <div className="flex items-center gap-3">
                <div className="relative hidden sm:block">
                  <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
                  <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 pr-4 py-2 bg-background border border-muted/10 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
               
              </div>
            </div>
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {displayedProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
              </div>
            ) : (
              <div className="text-center py-20 space-y-4">
                <div className="w-20 h-20 bg-muted/10 rounded-full flex items-center justify-center mx-auto text-muted"><HiMagnifyingGlass className="w-10 h-10" /></div>
                <h3 className="text-xl font-medium">No products found</h3>
                <p className="text-text-muted">Try adjusting your filters or search query.</p>
                <Button variant="outline" onClick={() => { handleCategoryChange('all'); setSearchQuery(''); setSortBy('newest'); }}>Clear All Filters</Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" /></div>}>
      <ProductsContent />
    </Suspense>
  );
}