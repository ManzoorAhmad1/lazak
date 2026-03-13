import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AddToCartDrawer } from '@/components/ui/AddToCartDrawer';
import { Toast } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'LAZAK – Premium Kitchen Tools & Essentials',
  description: 'Quality kitchen tools, cookware, and food storage essentials for home cooks across the US.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
