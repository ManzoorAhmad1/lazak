import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    outline: 'border border-muted text-muted',
  };

  return (
    <span className={cn(
      'px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};