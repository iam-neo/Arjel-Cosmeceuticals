export const metadata = {
  title: "My Account — Arjel Cosmeceuticals",
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-bg-warm pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="md:col-span-1 border-r border-border min-h-[500px]">
          <h1 className="font-[var(--font-playfair)] text-3xl font-bold mb-8">My Account</h1>
          <ul className="flex flex-col gap-4 text-sm font-semibold text-text-secondary">
            <li className="text-primary">Order History</li>
            <li className="hover:text-primary cursor-pointer">Profile Settings</li>
            <li className="hover:text-primary cursor-pointer">Skin Quiz Results</li>
            <li className="hover:text-primary cursor-pointer text-red-500 mt-4">Log Out</li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
          <div className="bg-white rounded-2xl border border-border p-16 text-center shadow-sm">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
            <p className="text-text-secondary mb-6">You haven&apos;t placed any orders with this account.</p>
            <a href="/shop" className="inline-flex py-3 px-6 bg-foreground text-white rounded-xl font-medium hover:bg-primary transition-colors hover:shadow-lg">Start Shopping</a>
          </div>
        </div>

      </div>
    </main>
  );
}
