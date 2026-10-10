import { homepageProducts } from '@/lib/data';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Products</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">All Products</h1>
        </div>
        <div className="flex gap-3">
          <select className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
            <option>Sort by recommended</option>
            <option>Price low to high</option>
            <option>Price high to low</option>
            <option>Newest arrivals</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homepageProducts.map((product) => (
          <div key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
            <div className="space-y-3 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{product.category}</div>
              <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
                <span className="text-sm text-slate-400 line-through">₹{product.compareAtPrice}</span>
              </div>
              <div className="flex gap-2">
                <Link href={`/products/${product.slug}`} className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white">View</Link>
                <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Wishlist</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
