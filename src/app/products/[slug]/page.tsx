import { homepageProducts } from '@/lib/data';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = homepageProducts.find((item) => item.slug === params.slug) ?? homepageProducts[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
          <img src={product.image} alt={product.name} className="h-[560px] w-full object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">{product.category}</p>
            <h1 className="mt-3 text-4xl font-black text-slate-900">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2 text-yellow-500">★★★★★ <span className="text-sm text-slate-600">{product.rating} rating</span></div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-slate-900">₹{product.price}</span>
            <span className="text-lg text-slate-400 line-through">₹{product.compareAtPrice}</span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">Save {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%</span>
          </div>

          <p className="text-slate-600">
            Experience premium quality, durable materials, and performance designed for modern-day convenience. Built to deliver everyday comfort and excellent value.
          </p>

          <div className="space-y-3">
            <div><span className="font-semibold text-slate-900">Color:</span> Black, Silver</div>
            <div><span className="font-semibold text-slate-900">Size:</span> S, M, L, XL</div>
            <div><span className="font-semibold text-slate-900">Delivery:</span> 3-5 business days</div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white">Add to Cart</button>
            <button className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800">Buy Now</button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <div className="mb-2 font-semibold text-slate-900">Product highlights</div>
            <ul className="list-disc space-y-2 pl-5">
              <li>High-quality materials and premium finish</li>
              <li>Secure checkout and verified supplier fulfillment</li>
              <li>Return support and easy order tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
