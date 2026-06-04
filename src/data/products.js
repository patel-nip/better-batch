export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Better Batch', href: '#categories' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Chakhana', href: '#bestsellers' },
  { label: 'Shop', href: '#know-your-snack' },
  { label: 'Amrutam', href: '#categories' },
  { label: 'B.Y.O.B', href: '#byob' },
  { label: 'Track Your Order', href: '#' },
];

export const categories = [
  {
    id: 'amrutam',
    name: 'Amrutam',
    color: '#B85C38',
    bgColor: '#B85C3820',
    description: 'Traditional wellness snacks',
  },
  {
    id: 'better-batch',
    name: 'Better Batch',
    color: '#4A7C3F',
    bgColor: '#4A7C3F20',
    description: 'Our signature collection',
  },
  {
    id: 'chhakhana',
    name: 'Chhakhana',
    color: '#3F3D89',
    bgColor: '#3F3D8920',
    description: 'Bold & flavorful treats',
  },
  {
    id: 'byob',
    name: 'BYOB',
    color: '#F0A500',
    bgColor: '#F0A50020',
    description: 'Build Your Own Box',
  },
];

export const packSizes = [
  { id: 'pack-3', label: 'Pack of 3', count: 3, style: 'filled' },
  { id: 'pack-6', label: 'Pack of 6', count: 6, style: 'outline' },
  { id: 'pack-15', label: 'Pack of 15', count: 15, style: 'outline-red' },
  { id: 'pack-30', label: 'Pack of 30', count: 30, style: 'outline' },
];

export const snackMatrix = {
  columns: ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F', 'Better Batch'],
  fatLevels: ['low', 'low', 'medium', 'medium', 'high', 'high', 'lowest'],
  rows: [
    { category: 'Popcorn', color: '#4A7C3F', bgColor: '#4A7C3F' },
    { category: 'Chips', color: '#C62828', bgColor: '#C62828' },
    { category: 'Fries', color: '#F9A825', bgColor: '#F9A825' },
    { category: 'Fries', color: '#4A7C3F', bgColor: '#4A7C3F' },
    { category: 'Nachos & Dips', color: '#8B1A1A', bgColor: '#8B1A1A' },
    { category: 'Cup Noodles', color: '#F0A500', bgColor: '#F0A500' },
  ],
};

export const bestsellers = [
  {
    id: 'peri-peri-makhana',
    name: 'Peri Peri Mini Makhana',
    brand: 'CHAKHAANA',
    weight: '48g',
    price: 20,
    image: '/images/bestseller-peri.png',
    color: '#C62828',
    badgeColor: '#F9A825',
  },
  {
    id: 'pudina-makhana',
    name: 'Pudina Mini Makhana',
    brand: 'CHAKHAANA',
    weight: '48g',
    price: 20,
    image: '/images/bestseller-pudina.png',
    color: '#388E3C',
    badgeColor: '#4CAF50',
  },
  {
    id: 'cheese-makhana',
    name: 'Cheese Mini Makhana',
    brand: 'CHAKHAANA',
    weight: '48g',
    price: 20,
    image: '/images/bestseller-cheese.png',
    color: '#F9A825',
    badgeColor: '#C62828',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya S.',
    image: '/images/testimonial-1.png',
    caption: 'These makhana are absolutely addictive!',
  },
  {
    id: 2,
    name: 'Ananya R.',
    image: '/images/testimonial-2.png',
    caption: 'and some of them that is kind of an ongoing obsession',
  },
  {
    id: 3,
    name: 'Meera K.',
    image: '/images/testimonial-3.png',
    caption: 'Finally a snack I don\'t feel guilty about!',
  },
];

export const foodGalleryImages = [
  '/images/food-1.png',
  '/images/food-2.png',
  '/images/food-3.png',
  '/images/food-1.png',
  '/images/food-2.png',
  '/images/food-3.png',
];

export const partnerLogos = [
  'Logo 1', 'Logo 2', 'Logo 3', 'Logo 4',
  'Logo 5', 'Logo 6', 'Logo 7', 'Logo 8',
];

export const recipes = [
  {
    id: 1,
    title: 'Introducing... THE SOUPLET',
    image: '/images/recipe-souplet.png',
    type: 'featured',
  },
  {
    id: 2,
    title: 'Quick Makhana Chaat',
    image: '/images/recipe-cooking.png',
    type: 'recipe',
  },
  {
    id: 3,
    title: 'Spiced Trail Mix Bowl',
    image: '/images/food-3.png',
    type: 'recipe',
  },
  {
    id: 4,
    title: 'Makhana Butter Masala',
    image: '/images/food-1.png',
    type: 'recipe',
  },
];

export const whyChooseUs = [
  {
    title: 'Sourced Intentionally',
    description: 'Our makhana comes from the fields of Bihar, carefully selected to ensure consistency in quality, size, and crunch across every batch.',
  },
  {
    title: 'Curated Mindfully',
    description: 'From classic to bold flavours, each variant is thoughtfully crafted to feel familiar, yet lighter, so you can snack more consciously, without compromising on taste.',
  },
  {
    title: 'Processed Thoughtfully',
    description: 'Handled in clean, controlled environments with strict quality checks, ensuring every pack delivers consistent mouthfeel, purity, and flavour.',
  },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Shop', href: '#know-your-snack' },
    { label: 'B.Y.O.B', href: '#byob' },
    { label: 'Track Your Order', href: '#' },
  ],
  explore: [
    { label: 'Better Batch', href: '#categories' },
    { label: 'Chakhana', href: '#bestsellers' },
    { label: 'Amrutam', href: '#categories' },
  ],
};
