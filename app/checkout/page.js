"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const finalTotal = totalPrice >= 999 ? totalPrice : totalPrice + 100;

  return (
    <main className="min-h-screen bg-bg-warm pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Checkout Forms (UI Mock) */}
        <div>
          <h1 className="font-[var(--font-playfair)] text-4xl font-bold mb-8">Checkout</h1>
          
          <div className="bg-white rounded-2xl border border-border p-8 mb-6 relative">
            <div className="absolute top-8 right-8 text-primary font-semibold text-sm">Step 1 of 2</div>
            <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><label className="block text-xs font-bold text-text-muted uppercase mb-1.5">First Name</label><input type="text" className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-primary" placeholder="First Name" /></div>
              <div><label className="block text-xs font-bold text-text-muted uppercase mb-1.5">Last Name</label><input type="text" className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-primary" placeholder="Last Name" /></div>
            </div>
            <div className="mb-4"><label className="block text-xs font-bold text-text-muted uppercase mb-1.5">Address</label><input type="text" className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-primary" placeholder="Street Address" /></div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><label className="block text-xs font-bold text-text-muted uppercase mb-1.5">City</label><input type="text" className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-primary" placeholder="City" /></div>
              <div><label className="block text-xs font-bold text-text-muted uppercase mb-1.5">ZIP Code</label><input type="text" className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-primary" placeholder="PIN Code" /></div>
            </div>
            <div className="mb-8"><label className="block text-xs font-bold text-text-muted uppercase mb-1.5">Phone Number</label><input type="tel" className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-primary" placeholder="+91" /></div>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 relative">
            <div className="absolute top-8 right-8 text-text-muted font-bold text-sm">Step 2 of 2</div>
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            
            <div className="flex flex-col gap-3">
              <label className="border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-4 h-4 accent-primary" />
                  <span className="font-semibold text-[#5A2D81]">Khalti</span>
                </div>
                <span className="text-xl">💳</span>
              </label>

              <label className="border border-border rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-4 h-4 accent-primary" />
                  <span className="font-semibold text-[#61A83E]">eSewa</span>
                </div>
                <span className="text-xl">📱</span>
              </label>

              <label className="border-2 border-primary bg-primary/5 rounded-xl p-4 flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input type="radio" name="payment" className="w-4 h-4 accent-primary" defaultChecked />
                  <span className="font-semibold">Cash on Delivery (COD)</span>
                </div>
                <span className="text-xl">📦</span>
              </label>
            </div>
            
            <Link href="/" className="mt-8 block text-center w-full py-4 bg-foreground text-white rounded-xl font-bold text-lg hover:bg-primary transition-colors shadow-lg">
              Place Order - ₹{finalTotal}
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:pl-10">
          <div className="bg-background rounded-2xl border border-border p-8 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Review</h2>
            
            <div className="flex flex-col gap-4 mb-6 border-b border-border pb-6 overflow-y-auto max-h-[300px]">
              {cart.length === 0 && <p className="text-text-secondary text-sm">Your cart is empty.</p>}
              {cart.map(item => (
                <div key={item.slug} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded overflow-hidden shrink-0"><img src={item.img} className="w-full h-full object-cover" /></div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">{item.name}</div>
                      <div className="text-xs text-text-muted">Qty: {item.quantity}</div>
                    </div>
                  </div>
                  <div className="font-bold text-sm">₹{item.price * item.quantity}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6 pb-6 border-b border-border text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Shipping</span>
                <span className="font-medium">{totalPrice >= 999 ? "Free" : "₹100"}</span>
              </div>
            </div>
            
            <div className="flex justify-between font-bold text-2xl">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
