import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';
import { StoreProvider } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AddToCartDrawer } from '@/components/ui/AddToCartDrawer';
import { Toast } from '@/components/ui/Toast';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LAZAK - Premium Kitchen Accessories',
  description: 'Premium foldable dish racks, kitchen accessories and cookware essentials for home cooks across the UK.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.className} style={{ overflowX: 'hidden' }}>
      <body style={{ overflowX: 'hidden' }}>
        <StoreProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
            <AddToCartDrawer />
            <Toast />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
