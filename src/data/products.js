import { getImageUrl } from '../utils/imageUrl';

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
    image: getImageUrl('/images/Group 179.png'),
  },
  {
    id: 'better-batch',
    name: 'Better Batch',
    color: '#4A7C3F',
    image: getImageUrl('/images/Group 180.png'),
  },
  {
    id: 'chhakhana',
    name: 'Chhakhana',
    color: '#3F3D89',
    image: getImageUrl('/images/Group 181.png'),
  },
  {
    id: 'byob',
    name: 'BYOB',
    color: '#F0A500',
    image: getImageUrl('/images/Group 182.png'),
  },
];

export const packSizes = [
  { id: 'pack-3', label: 'Pack of 3', count: 3, style: 'filled' },
  { id: 'pack-6', label: 'Pack of 6', count: 6, style: 'outline-red' },
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
    image: getImageUrl('/images/Group 175.png'),
    cardImage: getImageUrl('/images/Screenshot_20260604_211533_Gallery(1).png'),
    packetImage: getImageUrl('/images/1780585947550.png'),
    color: '#C62828',
    badgeColor: '#F9A825',
  },
  {
    id: 'cheese-herb-makhana',
    name: 'Cheese and Herb Mini Makhana',
    brand: 'CHAKHAANA',
    weight: '48g',
    price: 20,
    image: getImageUrl('/images/Group 176.png'),
    cardImage: getImageUrl('/images/Screenshot_20260604_211538_Gallery(1).png'),
    packetImage: getImageUrl('/images/1780586127003.png'),
    color: '#388E3C',
    badgeColor: '#4CAF50',
  },
  {
    id: 'cream-onion-makhana',
    name: 'Cream & Onion Mini Makhana',
    brand: 'CHAKHAANA',
    weight: '48g',
    price: 20,
    image: getImageUrl('/images/Group 177.png'),
    cardImage: getImageUrl('/images/Screenshot_20260604_211536_Gallery(1).png'),
    packetImage: getImageUrl('/images/1780586227460.png'),
    color: '#008080',
    badgeColor: '#00BCD4',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya S.',
    image: getImageUrl('/images/Rectangle 42.jpg'),
    caption: 'These makhana are absolutely addictive!',
  },
  {
    id: 2,
    name: 'Ananya R.',
    image: getImageUrl('/images/Rectangle 44.jpg'),
    caption: 'and some of them that is kind of an ongoing obsession',
  },
  {
    id: 3,
    name: 'Meera K.',
    image: getImageUrl('/images/Rectangle 58.jpg'),
    caption: 'Finally a snack I don\'t feel guilty about!',
  },
];

export const foodGalleryImages = [
  getImageUrl('/images/Rectangle 103.jpg'),
  getImageUrl('/images/Rectangle 104.jpg'),
  getImageUrl('/images/Rectangle 105.jpg'),
  getImageUrl('/images/Rectangle 106.jpg'),
  getImageUrl('/images/Rectangle 107.jpg'),
  getImageUrl('/images/Rectangle 108.jpg'),
];

export const partnerLogos = [
  'Logo 1', 'Logo 2', 'Logo 3', 'Logo 4',
  'Logo 5', 'Logo 6', 'Logo 7', 'Logo 8',
];

export const recipes = [
  {
    id: 1,
    title: 'Introducing... THE SOUPLET',
    image: getImageUrl('/images/Rectangle 54.jpg'),
    type: 'featured',
  },
  {
    id: 2,
    title: 'Quick Makhana Chaat',
    image: getImageUrl('/images/Rectangle 55.jpg'),
    type: 'recipe',
  },
  {
    id: 3,
    title: 'Spiced Trail Mix Bowl',
    image: getImageUrl('/images/Rectangle 56.jpg'),
    type: 'recipe',
  },
  {
    id: 4,
    title: 'Makhana Butter Masala',
    image: getImageUrl('/images/Rectangle 57.jpg'),
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
