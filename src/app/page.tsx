import Link from 'next/link';
import { homepageProducts, categories } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-medium text-yellow-300">
              Premium Dropshipping Store
            </span>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Upgrade your shopping with JAGANATH E-COMMERCE
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Discover trending electronics, fashion, home essentials, and more — all at competitive prices with authentic quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-900">Shop Now</Link>
              <Link href="/admin" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Admin Panel</Link>
            </div>
            <div className="flex gap-8 pt-4 text-sm text-slate-300">
              <div><span className="block text-2xl font-bold text-white">50K+</span> Happy customers</div>
              <div><span className="block text-2xl font-bold text-white">4.8/5</span> Average rating</div>
              <div><span className="block text-2xl font-bold text-white">48 hrs</span> Fast shipping</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 p-6 text-slate-900 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">Flash Sale</p>
              <h2 className="mt-10 text-4xl font-black">UP TO 60% OFF</h2>
              <p className="mt-4 text-sm">Limited time discounts on selected categories.</p>
            </div>
            <div className="overflow-hidden rounded-3xl bg-slate-800 shadow-soft">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" alt="Featured" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Categories</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Shop by category</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.slice(0, 10).map((category, idx) => (
            <Link href="/products" key={idx} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 h-28 overflow-hidden rounded-xl">
                <img src={`https://images.unsplash.com/${idx % 2 === 0 ? 'photo-1518770660439-4636190af475' : 'photo-1521572267360-ee0c2909d518'}?auto=format&fit=crop&w=700&q=80`} alt={category} className="h-full w-full object-cover" />
              </div>
              <div className="font-semibold text-slate-800">{category}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Trending now</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Top deals for you</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-red-500">View all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homepageProducts.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">-{Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%</span>
              </div>
              <div className="space-y-3 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{product.category}</div>
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500">★★★★★ <span className="ml-1 text-sm text-slate-500">{product.rating}</span></div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
                  <span className="text-sm text-slate-400 line-through">₹{product.compareAtPrice}</span>
                </div>
                <div className="flex gap-2">
                  <Link href={`/products/${product.slug}`} className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white">View</Link>
                  <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 lg:grid-cols-3 lg:px-8">
          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">Fast shipping</p>
            <h3 className="mt-4 text-3xl font-black">2-day delivery</h3>
            <p className="mt-3 text-slate-300">On selected items with verified delivery partners.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-red-500">Secure payments</p>
            <h3 className="mt-4 text-3xl font-black text-slate-900">Razorpay + COD</h3>
            <p className="mt-3 text-slate-600">Safe payment processing with verified transactions.</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 p-8 text-white shadow-soft">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-100">New arrivals</p>
            <h3 className="mt-4 text-3xl font-black">Fresh finds</h3>
            <p className="mt-3 text-orange-50">New products curated for style, convenience, and value.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-10 text-center text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">Don&apos;t miss out</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">Join our newsletter for exclusive coupons</h2>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-white outline-none" />
            <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-slate-900">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
