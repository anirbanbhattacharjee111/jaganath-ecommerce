import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { name: 'Electronics and Accessories', slug: 'electronics', description: 'Accessories and gadgets', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Fashion and Clothing', slug: 'fashion', description: 'Trendy outfits and accessories', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Home and Kitchen', slug: 'home-kitchen', description: 'Smart home essentials', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Beauty and Personal Care', slug: 'beauty', description: 'Skincare and grooming', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Health and Fitness', slug: 'health-fitness', description: 'Workout and wellness gear', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Mobile Accessories', slug: 'mobile-accessories', description: 'Phone essentials', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Bags and Accessories', slug: 'bags-accessories', description: 'Premium bags and gear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Toys and Gifts', slug: 'toys-gifts', description: 'Fun picks for every age', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Computer Accessories', slug: 'computer-accessories', description: 'Performance and productivity', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' },
    { name: 'Other Products', slug: 'other-products', description: 'Miscellaneous product collection', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  const adminPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@jaganath.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@jaganath.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
    },
  });

  const customerPassword = await bcrypt.hash('customer123', 10);
  await prisma.user.upsert({
    where: { email: 'customer@jaganath.com' },
    update: {},
    create: {
      name: 'Customer User',
      email: 'customer@jaganath.com',
      passwordHash: customerPassword,
      role: 'CUSTOMER',
    },
  });

  const electronicCategory = await prisma.category.findUnique({ where: { slug: 'electronics' } });
  const fashionCategory = await prisma.category.findUnique({ where: { slug: 'fashion' } });
  const homeCategory = await prisma.category.findUnique({ where: { slug: 'home-kitchen' } });

  const products = [
    {
      name: 'Noise Cancelling Wireless Headphones',
      slug: 'noise-cancelling-wireless-headphones',
      description: 'Premium wireless headphones with immersive sound, deep bass, and all-day battery life.',
      shortDescription: 'Immersive audio with active noise cancellation',
      price: 2499,
      compareAtPrice: 3299,
      discount: 24,
      stock: 120,
      rating: 4.7,
      brand: 'SoundPro',
      isFeatured: true,
      isNew: true,
      categoryId: electronicCategory?.id,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80', alt: 'Headphones front view' },
          { url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80', alt: 'Headphones side view' },
        ],
      },
      variants: { create: [{ name: 'Color', value: 'Black', stock: 60 }, { name: 'Color', value: 'Silver', stock: 60 }] },
    },
    {
      name: 'Premium Smart Watch',
      slug: 'premium-smart-watch',
      description: 'Track health, calls, workouts and notifications with a sleek AMOLED display.',
      shortDescription: 'Health tracking and smartwatch experience',
      price: 2999,
      compareAtPrice: 3999,
      discount: 25,
      stock: 80,
      rating: 4.8,
      brand: 'PulseX',
      isFeatured: true,
      isNew: true,
      categoryId: electronicCategory?.id,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80', alt: 'Smart watch' },
        ],
      },
      variants: { create: [{ name: 'Size', value: '45mm', stock: 40 }, { name: 'Size', value: '41mm', stock: 40 }] },
    },
    {
      name: 'Classic Linen Shirt',
      slug: 'classic-linen-shirt',
      description: 'Breathable linen shirt designed for all-day comfort and modern styling.',
      shortDescription: 'Styled for comfort and casual elegance',
      price: 1299,
      compareAtPrice: 1799,
      discount: 28,
      stock: 76,
      rating: 4.4,
      brand: 'Urban Thread',
      isFeatured: false,
      isNew: true,
      categoryId: fashionCategory?.id,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80', alt: 'Linen shirt' },
        ],
      },
      variants: { create: [{ name: 'Size', value: 'M', stock: 25 }, { name: 'Size', value: 'L', stock: 25 }, { name: 'Size', value: 'XL', stock: 26 }] },
    },
    {
      name: 'Minimalist Kitchen Mixer',
      slug: 'minimalist-kitchen-mixer',
      description: 'A sleek kitchen mixer that combines performance, style, and convenience.',
      shortDescription: 'Modern kitchen essential',
      price: 1899,
      compareAtPrice: 2499,
      discount: 24,
      stock: 95,
      rating: 4.5,
      brand: 'HomeCraft',
      isFeatured: true,
      isNew: false,
      categoryId: homeCategory?.id,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80', alt: 'Kitchen mixer' },
        ],
      },
      variants: { create: [{ name: 'Color', value: 'White', stock: 55 }, { name: 'Color', value: 'Black', stock: 40 }] },
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  await prisma.storeSetting.upsert({
    where: { id: 'default-store-settings' },
    update: {},
    create: {
      id: 'default-store-settings',
      siteName: 'JAGANATH E-COMMERCE',
      supportEmail: 'support@jaganath.com',
      supportPhone: '+91 98765 43210',
      shippingPolicy: 'Domestic delivery within 3-7 business days depending on location.',
      returnPolicy: 'Return window is 7 days for eligible items',
      contactAddress: 'Bhubaneswar, Odisha, India',
      cashbackEnabled: true,
      guestCheckout: true,
    },
  });

  const coupons = [
    { code: 'WELCOME10', type: 'PERCENTAGE', value: 10, minOrderValue: 999, active: true, firstOrderOnly: true },
    { code: 'SAVE500', type: 'FIXED', value: 500, minOrderValue: 2999, active: true, firstOrderOnly: false },
  ];

  for (const coupon of coupons) {
    await prisma.coupon.upsert({
      where: { code: coupon.code },
      update: {},
      create: coupon,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
