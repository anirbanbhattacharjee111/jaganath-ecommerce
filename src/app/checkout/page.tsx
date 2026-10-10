export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="mb-8 text-4xl font-black text-slate-900">Checkout</h1>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Shipping Address</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Full name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Phone number" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 px-4 py-3" placeholder="Address line 1" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 px-4 py-3" placeholder="Address line 2" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="City" />
              <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="PIN code" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
            <div className="mt-4 space-y-3">
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                <input type="radio" name="payment" defaultChecked />
                <span>Razorpay / UPI / Cards</span>
              </label>
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                <input type="radio" name="payment" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex justify-between"><span>Subtotal</span><span>₹4298</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>₹120</span></div>
            <div className="flex justify-between"><span>Discount</span><span>-₹500</span></div>
            <div className="border-t border-slate-200 pt-3 flex justify-between text-lg font-bold text-slate-900"><span>Total</span><span>₹3918</span></div>
          </div>
          <button className="mt-6 w-full rounded-full bg-yellow-400 px-5 py-3 font-bold text-slate-900">Place Order</button>
        </div>
      </div>
    </div>
  );
}
