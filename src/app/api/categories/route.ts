import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    categories: [
      'Electronics and Accessories',
      'Fashion and Clothing',
      'Home and Kitchen',
      'Beauty and Personal Care',
      'Health and Fitness',
      'Mobile Accessories',
      'Bags and Accessories',
      'Toys and Gifts',
      'Computer Accessories',
      'Other Products',
    ],
  });
}
