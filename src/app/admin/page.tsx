const stats = [
  { label: 'Total Sales', value: '₹8.4L' },
  { label: 'Total Orders', value: '2,840' },
  { label: 'Total Customers', value: '1,520' },
  { label: 'Low Stock', value: '36' },
];

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-4xl font-black text-slate-900">Admin Dashboard</h1>
      <p className="mt-2 text-slate-600">Monitor sales, orders, products, suppliers and payment status.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            <div className="mt-3 text-3xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Recent Orders</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex justify-between border-b border-slate-200 pb-3"><span>#JGN1001</span><span>Payment Confirmed</span></li>
            <li className="flex justify-between border-b border-slate-200 pb-3"><span>#JGN1002</span><span>Shipped</span></li>
            <li className="flex justify-between border-b border-slate-200 pb-3"><span>#JGN1003</span><span>Supplier Order Pending</span></li>
            <li className="flex justify-between"><span>#JGN1004</span><span>Delivered</span></li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Supplier Fulfilment</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex justify-between border-b border-slate-200 pb-3"><span>Urban Goods Ltd</span><span>In Stock</span></li>
            <li className="flex justify-between border-b border-slate-200 pb-3"><span>SmartCart Suppliers</span><span>Processing</span></li>
            <li className="flex justify-between"><span>HomeNest</span><span>Ready to Dispatch</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
