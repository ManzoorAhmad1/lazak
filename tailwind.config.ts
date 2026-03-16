import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/rizzui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34B4FF',
        secondary: '#1A1A1A',
        accent: '#FF8C00',
        background: '#F5F9FF',
        surface: '#FFFFFF',
        'text-main': '#000000',
        'text-muted': '#64748B',
        muted: '#64748B',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.05)',
        medium: '0 20px 50px rgba(0,0,0,0.08)',
      },
      screens: {
        uw: '2000px',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
