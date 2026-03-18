import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md', variant = 'default' }) => {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <img src="/LA-Logo.png" alt="LAZAK" className="w-[120px] h-20 object-contain" />
    </Link>
  );
};