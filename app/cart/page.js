"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <main className="min-h-screen bg-bg-warm pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <h1 className="font-[var(--font-playfair)] text-4xl font-bold mb-10">Your Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-border">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>
            <p className="text-text-secondary mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link href="/shop" className="inline-flex py-3.5 px-8 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-5">
              {cart.map((item) => (
                <div key={item.slug} className="flex gap-6 bg-white p-5 rounded-2xl shadow-sm border border-border items-center">
                  <div className="w-[100px] h-[100px] bg-background rounded-xl overflow-hidden shrink-0">
                    <Image src={item.img} alt={item.name} width={100} height={100} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <Link href={`/product/${item.slug}`} className="font-semibold text-lg hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                    <div className="text-primary font-bold mt-1">₹{item.price}</div>
                    
                    <div className="flex items-center gap-6 mt-4">
                      <div className="flex items-center bg-background rounded-full border border-border">
                        <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-foreground transition-colors">-</button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-foreground transition-colors">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.slug)} className="text-sm text-text-muted hover:text-red-500 transition-colors underline underline-offset-2">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border h-fit sticky top-24">
              <h2 className="font-semibold text-xl mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-text-secondary">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Shipping</span>
                  <span>{totalPrice >= 999 ? "Free" : "₹100"}</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-xl mb-8">
                <span>Total</span>
                <span>₹{totalPrice >= 999 ? totalPrice : totalPrice + 100}</span>
              </div>
              
              <Link href="/checkout" className="block text-center w-full py-4 bg-foreground text-white rounded-xl font-semibold hover:bg-primary transition-colors">
                Proceed to Checkout
              </Link>
              
              <p className="text-center text-xs text-text-muted mt-4 mt-6">
                Taxes are calculated at checkout.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
