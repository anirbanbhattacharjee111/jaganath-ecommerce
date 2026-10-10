import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: 'Order placed successfully',
    order: {
      id: 'JGN' + Date.now(),
      total: body.total || 3918,
      status: 'Order Placed',
    },
  });
}
