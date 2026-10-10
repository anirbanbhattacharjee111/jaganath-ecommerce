import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-lg font-black text-white">J</div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">JAGANATH</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">E-COMMERCE</div>
          </div>
        </Link>

        <div className="hidden flex-1 max-w-2xl items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 md:flex">
          <input
            type="text"
            placeholder="Search products, brands and more"
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
          <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">Search</button>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Login</Link>
          <Link href="/register" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
