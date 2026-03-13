import { Product, BlogArticle, Category } from '../types/product';

export const CATEGORIES: Category[] = [
  { id: 'c1', slug: 'kitchen-tools', name: 'Kitchen Tools', icon: 'Utensils', image: '/pic5.jpeg' },
  { id: 'c2', slug: 'kitchen-outdoor', name: 'Kitchen & Outdoor', icon: 'Settings', image: '/pic2.jpeg' },
  { id: 'c3', slug: 'indoor-outdoor', name: 'Indoor / Outdoor Use', icon: 'Home', image: '/pic5.jpeg' },
  { id: 'c4', slug: 'mid-range', name: 'Mid-Range', icon: 'Activity', image: '/pic2.jpeg' },
  { id: 'c5', slug: 'cooking-essentials', name: 'Cooking Essentials', icon: 'Flame', image: '/pic2.jpeg' },
  { id: 'c6', slug: 'food-storage', name: 'Food Storage', icon: 'Package', image: '/pack.jpeg' },
  { id: 'c7', slug: 'small-pack', name: 'Small Pack / Party Size', icon: 'Users', image: '/pack.jpeg' },
  { id: 'c8', slug: 'budget-friendly', name: 'Budget Friendly', icon: 'DollarSign', image: '/pic5.jpeg' },
  { id: 'c9', slug: 'featured', name: 'Featured', icon: 'Star', image: '/pic2.jpeg' },
];

export const PRODUCTS: Product[] = [
  // Insulated Cooler Bags
  {
    id: 'cooler-budget',
    slug: 'small-insulated-kitchen-cooler-bag',
    title: 'Small Insulated Kitchen Cooler Bag',
    price: 29.99,
    description: 'Compact and efficient cooling for your kitchen essentials. Perfect for quick trips and small gatherings.',
    fullDescription: 'The Small Insulated Kitchen Cooler Bag is designed for those who need a reliable, compact cooling solution. Ideal for carrying fresh ingredients, drinks, or meal-prepped food wherever you go.\n\n• High-quality thermal insulation\n• Durable zipper closure\n• Compact size for easy transport\n• Easy to clean interior',
    image: '/pic2.jpeg',
    rating: 4.5,
    reviews: 12,
    categories: ['cooking-essentials', 'kitchen-outdoor', 'budget-friendly'],
    features: ['Thermal Insulation', 'Compact Design', 'Durable Zipper'],
    stock: 200,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'cooler-standard',
    slug: 'standard-insulated-kitchen-cooler-bag',
    title: 'Standard Insulated Kitchen Cooler Bag',
    price: 49.99,
    description: 'Our most popular cooler bag, offering the perfect balance of size and performance for everyday use.',
    fullDescription: 'The Standard Insulated Kitchen Cooler Bag is the go-to choice for home cooks and outdoor enthusiasts. It provides ample space for ingredients, beverages, and prepped meals — keeping everything at the right temperature.\n\n• Advanced thermal lining\n• Reinforced handles for heavy loads\n• Multiple storage compartments\n• Water-resistant exterior',
    image: '/pic2.jpeg',
    rating: 4.8,
    reviews: 42,
    categories: ['cooking-essentials', 'kitchen-outdoor', 'mid-range', 'featured'],
    features: ['Advanced Insulation', 'Reinforced Handles', 'Water Resistant'],
    stock: 150,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'cooler-premium',
    slug: 'large-insulated-kitchen-cooler-bag-pro',
    title: 'Large Insulated Kitchen Cooler Bag – Pro Edition',
    price: 79.99,
    description: 'Maximum capacity and superior insulation for all-day performance — ideal for families and meal preppers.',
    fullDescription: 'Designed for serious home cooks and outdoor lovers, the Pro Edition offers unmatched cooling performance. Its large capacity handles generous grocery hauls and keeps food fresh for up to 24 hours.\n\n• Professional-grade insulation (up to 24 hours)\n• Heavy-duty construction\n• Leak-proof interior\n• Adjustable shoulder strap',
    image: '/pic2.jpeg',
    rating: 5.0,
    reviews: 25,
    categories: ['cooking-essentials', 'kitchen-outdoor', 'featured'],
    features: ['Pro-Grade Insulation', 'Heavy Duty', 'Leak Proof', 'Large Capacity'],
    stock: 50,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  // Dish Drying Racks
  {
    id: 'rack-budget',
    slug: 'small-roll-up-dish-drying-rack',
    title: 'Small Roll-Up Dish Drying Rack (Over the Sink)',
    price: 19.99,
    description: 'A simple and effective space-saver for smaller kitchens and apartments.',
    fullDescription: 'This compact roll-up rack is perfect for drying dishes or rinsing vegetables. It fits easily over smaller sinks and rolls up for storage when not in use.\n\n• Space-saving design\n• Stainless steel construction\n• Non-slip silicone edges\n• Dishwasher safe',
    image: '/pic5.jpeg',
    rating: 4.4,
    reviews: 18,
    categories: ['kitchen-tools', 'indoor-outdoor', 'budget-friendly'],
    features: ['Space Saving', 'Stainless Steel', 'Non-Slip'],
    stock: 300,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'rack-standard',
    slug: 'standard-roll-up-dish-drying-rack',
    title: 'Standard Roll-Up Dish Drying Rack (Over the Sink)',
    price: 34.99,
    description: 'The versatile choice for everyday kitchen needs. Fits most standard sinks perfectly.',
    fullDescription: 'Our standard roll-up rack is a kitchen essential. It provides a sturdy surface for drying dishes, pots, and pans while keeping your counters clear.\n\n• Fits standard sinks\n• Heat resistant up to 400°F\n• Rust-proof stainless steel\n• Multi-purpose use',
    image: '/pic5.jpeg',
    rating: 4.7,
    reviews: 56,
    categories: ['kitchen-tools', 'indoor-outdoor', 'mid-range', 'featured'],
    features: ['Heat Resistant', 'Rust Proof', 'Multi-Purpose'],
    stock: 250,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'rack-premium',
    slug: 'premium-roll-up-dish-drying-rack-pro',
    title: 'Premium Roll-Up Dish Drying Rack – Heat Resistant Pro',
    price: 54.99,
    description: 'The highest quality rack with superior heat resistance and heavy-duty capacity.',
    fullDescription: 'The Heat Resistant Pro is the ultimate sink accessory. It handles heavy cookware and doubles as a trivet for hot pots straight from the oven.\n\n• Extra-thick stainless steel rods\n• Superior heat resistance (up to 500°F)\n• Premium food-grade silicone\n• Extended size for large sinks',
    image: '/pic5.jpeg',
    rating: 4.9,
    reviews: 34,
    categories: ['kitchen-tools', 'indoor-outdoor', 'featured'],
    features: ['Superior Heat Resistance', 'Heavy Duty', 'Food-Grade Silicone'],
    stock: 100,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  // Food Storage & Packaging
  {
    id: 'storage-1',
    slug: 'heavy-duty-butcher-paper-roll',
    title: 'Heavy Duty Butcher Paper Roll',
    price: 24.99,
    description: 'Professional-grade paper for wrapping, storing, and serving fresh food.',
    fullDescription: 'Our Heavy Duty Butcher Paper is a kitchen staple for wrapping sandwiches, lining trays, and preserving food freshness. Breathable, food-safe, and built to hold up when wet.\n\n• Unbleached and unwaxed\n• High wet strength\n• Food-safe and breathable\n• Wide 18-inch width',
    image: '/pack.jpeg',
    rating: 4.8,
    reviews: 89,
    categories: ['food-storage', 'cooking-essentials', 'mid-range'],
    features: ['Unbleached', 'High Wet Strength', 'Breathable'],
    stock: 500,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard'
  },
  {
    id: 'storage-2',
    slug: 'vacuum-sealer-bags-value-pack',
    title: 'Vacuum Sealer Bags – Value Pack',
    price: 39.99,
    description: 'Keep food fresher for longer. Perfect for meal prep, leftovers, and bulk storage.',
    fullDescription: 'Vacuum sealer bags are one of the most practical additions to any kitchen. Our bags are thick, BPA-free, and compatible with all major vacuum sealers — sold in bulk so you never run out.\n\n• BPA free\n• Heavy duty 4 mil thickness\n• Compatible with all major sealers\n• Includes multiple sizes',
    image: '/pack.jpeg',
    rating: 4.6,
    reviews: 120,
    categories: ['food-storage', 'small-pack', 'mid-range', 'featured'],
    features: ['BPA Free', 'Heavy Duty', 'Universal Fit'],
    stock: 400,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard'
  },
  {
    id: 'storage-3',
    slug: 'pro-series-food-wrapping-station',
    title: 'Pro Series Food Wrapping Station',
    price: 129.99,
    description: 'A complete wrapping and storage station for organized, high-volume food prep.',
    fullDescription: 'The Pro Series Food Wrapping Station is built for kitchens that mean business. A sturdy stainless steel dispenser with an integrated cutter — keeps rolls in place and makes wrapping clean and fast.\n\n• Stainless steel construction\n• Integrated safety cutter\n• Fits large rolls up to 24 inches\n• Non-slip base',
    image: '/pack.jpeg',
    rating: 5.0,
    reviews: 15,
    categories: ['food-storage', 'featured'],
    features: ['Stainless Steel', 'Safety Cutter', 'Non-Slip Base'],
    stock: 30,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    slug: 'how-to-store-food-properly',
    title: 'How to Store Food the Right Way',
    excerpt: 'Good storage keeps ingredients fresh longer and reduces waste. Here are the methods that actually make a difference.',
    date: 'March 2, 2026',
    image: '/pic2.jpeg',
    author: 'Marcus T.'
  },
  {
    id: 'b2',
    slug: 'kitchen-tools-worth-buying',
    title: '5 Kitchen Tools That Are Actually Worth It',
    excerpt: 'Most "must-have" kitchen gadgets collect dust. These five are the ones that end up getting used every single day.',
    date: 'February 28, 2026',
    image: '/pic5.jpeg',
    author: 'Diana R.'
  },
  {
    id: 'b3',
    slug: 'choosing-the-right-chef-knife',
    title: 'Choosing the Right Chef Knife for Your Kitchen',
    excerpt: 'A good knife makes prep faster, safer, and more enjoyable. Here is how to pick the one that suits your cooking style.',
    date: 'February 25, 2026',
    image: '/pack.jpeg',
    author: 'Marcus T.'
  },
  {
    id: 'b4',
    slug: 'how-to-care-for-kitchen-tools',
    title: 'How to Keep Your Kitchen Tools in Great Shape',
    excerpt: 'Quality tools last for years — if you take care of them. A few simple habits make all the difference.',
    date: 'February 20, 2026',
    image: '/pack.jpeg',
    author: 'James L.'
  }
];