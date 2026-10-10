export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Login</h1>
        <p className="mt-2 text-sm text-slate-600">Welcome back to JAGANATH E-COMMERCE</p>
        <form className="mt-6 space-y-4">
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3" type="email" placeholder="Email address" />
          <input className="w-full rounded-xl border border-slate-200 px-4 py-3" type="password" placeholder="Password" />
          <button className="w-full rounded-full bg-slate-900 px-5 py-3 font-semibold text-white">Login</button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-600">New to the store? <a href="/register" className="font-semibold text-red-500">Create account</a></p>
      </div>
    </div>
  );
}
