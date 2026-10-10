import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    products: [
      { id: 'p1', name: 'Noise Cancelling Wireless Headphones', price: 2499 },
      { id: 'p2', name: 'Premium Smart Watch', price: 2999 },
      { id: 'p3', name: 'Classic Linen Shirt', price: 1299 },
    ],
  });
}
