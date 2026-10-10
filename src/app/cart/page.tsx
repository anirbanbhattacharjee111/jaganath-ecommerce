export default function CartPage() {
  const items = [
    { id: 1, name: 'Premium Smart Watch', price: 2999, quantity: 1, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Classic Linen Shirt', price: 1299, quantity: 2, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 120;
  const grandTotal = subtotal + shipping;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="mb-8 text-4xl font-black text-slate-900">My Cart</h1>
      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-900">{item.name}</h2>
                <p className="text-sm text-slate-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-slate-900">₹{item.price * item.quantity}</div>
                <button className="mt-2 text-sm font-semibold text-red-500">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>₹{shipping}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>₹0</span></div>
            <div className="border-t border-slate-200 pt-3 text-lg font-bold text-slate-900 flex justify-between"><span>Total</span><span>₹{grandTotal}</span></div>
          </div>
          <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 font-semibold text-white">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
