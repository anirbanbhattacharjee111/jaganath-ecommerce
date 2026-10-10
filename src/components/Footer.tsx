import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-lg font-black text-white">J</div>
            <div>
              <div className="text-lg font-black tracking-tight text-white">JAGANATH</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">E-COMMERCE</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-400">
            Premium online shopping platform with dropshipping operations, fast delivery, secure payments, and responsive service.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            <li><Link href="/return-policy">Return Policy</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>support@jaganath.com</li>
            <li>+91 98765 43210</li>
            <li>Bhubaneswar, Odisha</li>
            <li>WhatsApp Support</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        © 2026 JAGANATH E-COMMERCE. All rights reserved.
      </div>
    </footer>
  );
}
