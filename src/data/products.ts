import { Product, BlogArticle, Category } from '../types/product';

export const CATEGORIES: Category[] = [
  { id: 'c1', slug: 'dish-drying-racks', name: 'Dish Drying Racks', icon: 'Grid', image: '/lazak dry dish mat-1.png' },
  { id: 'c2', slug: 'cooler-bags', name: 'Cooler Bags', icon: 'Package', image: '/pic2.jpeg' },
  { id: 'c3', slug: 'food-storage', name: 'Food Storage', icon: 'Archive', image: '/pack.jpeg' },
  { id: 'c4', slug: 'kitchen-outdoor', name: 'Kitchen & Outdoor', icon: 'Flame', image: '/lazak dry dish mat-2.png' },
  { id: 'c5', slug: 'cooking-essentials', name: 'Cooking Essentials', icon: 'Utensils', image: '/Lazak dish dry mat-4.png' },
  { id: 'c6', slug: 'featured', name: 'Featured', icon: 'Star', image: '/Lazak Dish Dry mat-5.png' },
  { id: 'c7', slug: 'indoor-outdoor', name: 'Indoor & Outdoor', icon: 'Home', image: '/lazak dish dry mat-3.png' },
  { id: 'c8', slug: 'budget-friendly', name: 'Budget Friendly', icon: 'DollarSign', image: '/lazak dry dish mat-2.png' },
];

export const PRODUCTS: Product[] = [
  // Dish Drying Mats
  {
    id: 'rack-budget',
    slug: 'lazak-foldable-dish-drying-mat-standard',
    title: 'LAZAK Foldable Dish Drying Mat',
    price: 29.99,
    description: 'The everyday kitchen essential. Foldable aluminum-frame dish drying mat with anti-slip base and fast air-dry design.',
    fullDescription: 'The LAZAK Foldable Dish Drying Mat brings smart design to your sink routine. Its open-slat aluminum frame lets air circulate freely so dishes dry faster without pooling water underneath.\n\nBuilt from food-grade aluminum alloy, it handles daily use without rusting, warping, or bending. When you are done, it folds flat for a drawer or hangs on a hook.\n\nIncludes silicone anti-slip feet and a small scrubbing pad.',
    image: '/lazak dry dish mat-1.png',
    rating: 4.6,
    reviews: 84,
    categories: ['dish-drying-racks', 'indoor-outdoor', 'budget-friendly'],
    features: ['Foldable Design', 'Aluminum Frame', 'Anti-Slip Base', 'Fast Air Dry'],
    stock: 300,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'rack-standard',
    slug: 'lazak-foldable-dish-drying-mat-large',
    title: 'LAZAK Foldable Dish Drying Mat - Large',
    price: 44.99,
    description: 'Wider mat fits more dishes in one load. Same aluminum build, same anti-slip base, more room.',
    fullDescription: 'Everything you love about the standard mat, scaled up. The Large fits full-size dinner plates, bowls, pots, and cups in a single layout without crowding.\n\nAluminum slat construction allows fast air drying. Folds flat in seconds for compact storage. Anti-slip silicone feet keep it gripped on any countertop surface.\n\nIncludes scrubbing pad, cleaning guide, and silicone mat.',
    image: '/lazak dry dish mat-2.png',
    rating: 4.8,
    reviews: 142,
    categories: ['dish-drying-racks', 'indoor-outdoor', 'featured', 'cooking-essentials'],
    features: ['Extended Size', 'Foldable Frame', 'Aluminum Slats', 'Non-Slip Feet'],
    stock: 200,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'rack-premium',
    slug: 'lazak-foldable-dish-drying-mat-pro-xl',
    title: 'LAZAK Dish Drying Mat - Pro XL',
    price: 59.99,
    description: 'Maximum capacity for larger households. Extra-wide frame, premium slat spacing, included silicone trivet.',
    fullDescription: 'The Pro XL is built for kitchens that do serious cooking. It handles a full dish load with room to spare, and the reinforced aluminum frame holds heavy pots and cast iron without flexing.\n\nExtra-wide slat spacing lets water drain quickly so nothing stays damp. Folds down thin for easy storage. The included silicone trivet doubles as a pot holder.\n\nIncludes silicone trivet, two scrubbing pads, cleaning guide, and extended anti-slip base.',
    image: '/Lazak Dish Dry mat-5.png',
    rating: 4.9,
    reviews: 67,
    categories: ['dish-drying-racks', 'indoor-outdoor', 'featured'],
    features: ['Pro XL Size', 'Reinforced Frame', 'Silicone Trivet Included', 'Extra Slat Spacing'],
    stock: 100,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  // Insulated Cooler Bags
  {
    id: 'cooler-budget',
    slug: 'small-insulated-cooler-bag',
    title: 'Insulated Cooler Bag - Compact',
    price: 29.99,
    description: 'Compact thermal bag for quick trips, packed lunches, and fresh ingredient runs.',
    fullDescription: 'The Compact Cooler Bag is built for everyday use. Take it to work, on a grocery run, or to a picnic. High-density thermal lining keeps cold items cold and hot items warm for hours.\n\nEasy-clean interior, durable zipper, and a comfortable carry handle. Folds flat when empty.',
    image: '/pic2.jpeg',
    rating: 4.5,
    reviews: 38,
    categories: ['cooler-bags', 'kitchen-outdoor', 'budget-friendly'],
    features: ['Thermal Insulation', 'Easy Clean Interior', 'Compact Size', 'Durable Zipper'],
    stock: 200,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'budget'
  },
  {
    id: 'cooler-standard',
    slug: 'standard-insulated-cooler-bag',
    title: 'Insulated Cooler Bag - Standard',
    price: 49.99,
    description: 'Our best-selling cooler bag. Right-sized for families and weekend use.',
    fullDescription: 'The Standard Cooler Bag handles a full grocery run or a day out without breaking a sweat. Advanced thermal lining, reinforced handles, and a water-resistant exterior make this the bag most of our customers reach for every week.',
    image: '/pic2.jpeg',
    rating: 4.8,
    reviews: 95,
    categories: ['cooler-bags', 'kitchen-outdoor', 'featured'],
    features: ['Advanced Insulation', 'Reinforced Handles', 'Water Resistant', 'Multiple Pockets'],
    stock: 150,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard',
    isBestSeller: true
  },
  {
    id: 'cooler-premium',
    slug: 'large-insulated-cooler-bag-pro',
    title: 'Insulated Cooler Bag - Pro XL',
    price: 79.99,
    description: 'Maximum capacity. Keeps contents cold for 24 hours. For families and serious meal-preppers.',
    fullDescription: 'The Pro XL Cooler Bag is the bag for people who cook in volume. Massive interior capacity, professional-grade insulation that holds temperature for up to 24 hours, and a leak-proof liner that handles soups and liquids easily.',
    image: '/pic2.jpeg',
    rating: 5.0,
    reviews: 41,
    categories: ['cooler-bags', 'kitchen-outdoor', 'featured'],
    features: ['24-Hour Cold Retention', 'Leak-Proof Liner', 'XL Capacity', 'Shoulder Strap'],
    stock: 50,
    deliveryInfo: 'Ships in 1-2 business days.',
    tier: 'premium',
    hasFreeShipping: true
  },
  // Food Storage
  {
    id: 'storage-1',
    slug: 'heavy-duty-butcher-paper-roll',
    title: 'Heavy Duty Butcher Paper Roll',
    price: 24.99,
    description: 'Unbleached, food-safe butcher paper for wrapping, storing, and serving fresh food.',
    fullDescription: 'A kitchen roll that earns its place in the drawer. Unbleached, unwaxed, and built to hold up when wet. Use it for wrapping sandwiches, lining trays, smoking meat, or storing ingredients. Wide 18-inch width covers more in fewer sheets.',
    image: '/pack.jpeg',
    rating: 4.8,
    reviews: 89,
    categories: ['food-storage', 'cooking-essentials'],
    features: ['Unbleached', 'Food-Safe', 'High Wet Strength', '18-Inch Width'],
    stock: 500,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard'
  },
  {
    id: 'storage-2',
    slug: 'vacuum-sealer-bags-value-pack',
    title: 'Vacuum Sealer Bags - Value Pack',
    price: 39.99,
    description: 'BPA-free, heavy-duty vacuum bags for keeping food fresh longer.',
    fullDescription: 'Stop throwing out food. These vacuum sealer bags create an airtight seal that keeps ingredients fresh 3-5 times longer in the fridge or freezer. BPA-free, 4 mil thick, and compatible with all major vacuum sealer brands. Comes in multiple sizes in one value pack.',
    image: '/pack.jpeg',
    rating: 4.6,
    reviews: 120,
    categories: ['food-storage', 'featured'],
    features: ['BPA Free', 'Heavy Duty 4mil', 'Universal Fit', 'Multi-Size Pack'],
    stock: 400,
    deliveryInfo: 'Ships in 2-3 business days.',
    tier: 'standard'
  },
  {
    id: 'storage-3',
    slug: 'pro-series-food-wrapping-station',
    title: 'Pro Series Food Wrapping Station',
    price: 129.99,
    description: 'Stainless steel dispenser with integrated safety cutter. Keeps wrapping rolls organized and ready.',
    fullDescription: 'One dispenser, no more fumbling. The Pro Series holds large rolls up to 24 inches wide, a built-in safety cutter makes clean cuts every time, and the non-slip base keeps it steady on any worktop. Stainless steel build means it will not crack, warp, or discolor.',
    image: '/pack.jpeg',
    rating: 5.0,
    reviews: 15,
    categories: ['food-storage', 'featured'],
    features: ['Stainless Steel', 'Safety Cutter', 'Non-Slip Base', 'Fits Rolls up to 24"'],
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
    excerpt: 'Good storage keeps ingredients fresh longer and cuts down on waste. Here are the methods that actually make a difference at home.',
    date: 'March 2, 2026',
    image: '/lazak dry dish mat-1.png',
    author: 'Marcus T.'
  },
  {
    id: 'b2',
    slug: 'kitchen-tools-worth-buying',
    title: '5 Kitchen Tools That Are Actually Worth It',
    excerpt: 'Most kitchen gadgets sit in a drawer after week one. These five get pulled out every single day.',
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
    slug: 'how-to-care-for-kitchen-tools',
    title: 'How to Keep Your Kitchen Tools in Great Shape',
    excerpt: 'A little maintenance goes a long way. Simple habits that extend the life of every tool in your kitchen.',
    date: 'February 20, 2026',
    image: '/Lazak Dish Dry mat-5.png',
    author: 'Diana R.'
  }
];