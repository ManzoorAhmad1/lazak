'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { HiHeart, HiShoppingCart, HiTrash, HiArrowRight } from 'react-icons/hi2';

export default function FavoritesPage() {
  const { favorites, toggleFavorite, openSelectionDrawer } = useStore();
  if (favorites.length === 0) {
    return (
      <main className="pt-40 pb-20 bg-background min-h-screen">
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center space-y-6"
        >
          <div className="w-24 h-24 bg-muted/10 rounded-full flex items-center justify-center mx-auto text-muted"><HiHeart className="w-12 h-12" /></div>
          <h1 className="text-3xl font-medium">Your wishlist is empty</h1>
          <p className="text-text-muted max-w-md mx-auto">Save items you love to your wishlist and they will appear here.</p>
          <Link href="/products"><Button size="lg" className="mt-4">Explore Products</Button></Link>
        </motion.div>
      </main>
    );
  }
  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-medium mb-10"
        >My Wishlist ({favorites.length})</motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {favorites.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
            >
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden bg-muted/5">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <Button variant="icon" className="absolute top-3 right-3 bg-white text-red-500 shadow-soft" onClick={() => toggleFavorite(product)}>
                  <HiTrash className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-medium text-lg line-clamp-1">{product.title}</h3>
                  <p className="text-sm text-text-muted">{product.categories[0].replace('-', ' ')}</p>
                </div>
                <p className="font-medium text-xl text-primary">${product.price}</p>
                <div className="flex gap-2">
                  <Button className="flex-1 gap-2" onClick={() => openSelectionDrawer(product)}><HiShoppingCart className="w-4 h-4" /> Move to Cart</Button>
                  <Link href={`/products/${product.slug}`}><Button variant="outline" size="icon"><HiArrowRight className="w-4 h-4" /></Button></Link>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}