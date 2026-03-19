import { Product, BlogArticle, Category } from '../types/product';

export const CATEGORIES: Category[] = [
  { id: 'c1', slug: 'dish-drying-mat', name: 'Dish Drying mate', icon: 'Grid', image: '/lazak dry dish mat-1.png' },
];

export const PRODUCTS: Product[] = [
  // Dish Drying Mats
  {
    id: 'rack-budget',
    slug: 'lazak-foldable-dish-drying-mat-standard',
    title: 'LAZAK Foldable Dish Drying Mat',
    price: 29.99,
    description: 'The everyday Kitchen and Home Essentials. Foldable aluminum-frame dish drying mat with anti-slip base and fast air-dry design.',
    fullDescription: 'The LAZAK Foldable Dish Drying Mat brings smart design to your sink routine. Its open-slat aluminum frame lets air circulate freely so dishes dry faster without pooling water underneath.\n\nBuilt from food-grade aluminum alloy, it handles daily use without rusting, warping, or bending. When you are done, it folds flat for a drawer or hangs on a hook.\n\nIncludes silicone anti-slip feet and a small scrubbing pad.',
    image: '/lazak dry dish mat-1.png',
    rating: 4.6,
    reviews: 84,
    categories: ['dish-drying-mat', 'indoor-outdoor', 'budget-friendly'],
    features: ['Foldable Design', 'Aluminum Frame', 'Anti-Slip Base', 'Fast Air Dry'],
    stock: 300,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'rack-standard',
    slug: 'lazak-foldable-dish-drying-mat',
    title: 'LAZAK Foldable Dish Drying Mat',
    price: 44.99,
    description: 'Wider mat fits more dishes in one load. Same aluminum build, same anti-slip base, more room.',
    fullDescription: 'Everything you love about the standard mat, scaled up. The Large fits full-size dinner plates, bowls, pots, and cups in a single layout without crowding.\n\nAluminum slat construction allows fast air drying. Folds flat in seconds for compact storage. Anti-slip silicone feet keep it gripped on any countertop surface.\n\nIncludes scrubbing pad, cleaning guide, and silicone mat.',
    image: '/lazak dry dish mat-2.png',
    rating: 4.8,
    reviews: 142,
    categories: ['dish-drying-mat', 'indoor-outdoor', 'featured', 'cooking-essentials'],
    features: ['Extended Size', 'Foldable Frame', 'Aluminum Slats', 'Non-Slip Feet'],
    stock: 200,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'rack-premium',
    slug: 'lazak-foldable-dish-drying-mat',
    title: 'LAZAK Dish Drying Mat',
    price: 59.99,
    description: 'Maximum capacity for larger households. Extra-wide frame, premium slat spacing, included silicone trivet.',
    fullDescription: 'The Pro XL is built for Kitchen and Home Essentials that do serious cooking. It handles a full dish load with room to spare, and the reinforced aluminum frame holds heavy pots and cast iron without flexing.\n\nExtra-wide slat spacing lets water drain quickly so nothing stays damp. Folds down thin for easy storage. The included silicone trivet doubles as a pot holder.\n\nIncludes silicone trivet, two scrubbing pads, cleaning guide, and extended anti-slip base.',
    image: '/Lazak Dish Dry mat-5.png',
    rating: 4.9,
    reviews: 67,
    categories: ['dish-drying-mat', 'indoor-outdoor', 'featured'],
    features: ['Pro XL Size', 'Reinforced Frame', 'Silicone Trivet Included', 'Extra Slat Spacing'],
    stock: 100,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  
  
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    slug: 'how-to-store-food-properly',
    title: 'How to Store Food the Right Way',
    excerpt: 'Good storage keeps ingredients fresh longer and cuts down on waste. Here are the methods that actually make a difference at home.',
    date: 'March 2, 2026',
    image: '/lazak dry dish mat-1.png',
    author: 'Marcus T.'
  },
  {
    id: 'b2',
    slug: 'kitchen-utensilizes-worth-buying',
    title: '5 Kitchen utensilizes That Are Actually Worth It',
    excerpt: 'Most Kitchen and Home Essentials gadgets sit in a drawer after week one. These five get pulled out every single day.',
    date: 'February 28, 2026',
    image: '/lazak dry dish mat-2.png',
    author: 'Diana R.'
  },
  {
    id: 'b3',
    slug: 'choosing-the-right-dish-rack',
    title: 'Why Your Dish Rack Matters More Than You Think',
    excerpt: 'A good dish rack does more than hold dishes. Here is what to look for and why aluminum beats plastic every time.',
    date: 'February 25, 2026',
    image: '/Lazak dish dry mat-4.png',
    author: 'Marcus T.'
  },
  {
    id: 'b4',
    slug: 'how-to-care-for-kitchen-utensilizes',
    title: 'How to Keep Your Kitchen utensilizes in Great Shape',
    excerpt: 'A little maintenance goes a long way. Simple habits that extend the life of every utensilize in your kitchen.',
    date: 'February 20, 2026',
    image: '/Lazak Dish Dry mat-5.png',
    author: 'Diana R.'
  }
];