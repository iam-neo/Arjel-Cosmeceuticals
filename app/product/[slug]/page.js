"use client";
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../../lib/data";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage(props) {
  const params = use(props.params);
  const product = getProductBySlug(params.slug);
  const { addToCart } = useCart();
  
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="text-sm border-b border-border pb-4 flex gap-2 text-text-muted">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Product Image */}
        <div className="bg-background rounded-3xl overflow-hidden relative border border-border/50 h-[500px] flex items-center justify-center">
          {product.badge && (
            <span className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold z-10 ${product.badgeType === "accent" ? "bg-accent text-[#4a3a10]" : "bg-primary text-white"}`}>
              {product.badge}
            </span>
          )}
          <Image src={product.image} alt={product.name} width={600} height={600} className="w-auto h-[85%] object-contain" priority />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {product.tags.join(" · ")}
          </div>
          <h1 className="font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
          <h2 className="text-xl text-text-secondary mb-6">{product.ingredient}</h2>
          
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${i === 5 && product.rating.includes("4.") ? "text-star/40 fill-star/40" : "text-star fill-star"}`} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating} Reviews</span>
          </div>

          <div className="flex items-end gap-3 mb-8">
            <span className="text-3xl font-bold">₹{product.price}</span>
            {product.originalPrice && <span className="line-through text-text-muted text-lg mb-1">₹{product.originalPrice}</span>}
          </div>

          <p className="text-text-secondary leading-relaxed mb-10">
            {product.desc}
          </p>

          <button 
            onClick={() => addToCart({ slug: product.slug, name: product.name, price: product.price, img: product.image })}
            className="w-full py-4 bg-foreground text-white rounded-xl font-bold text-lg hover:bg-primary transition-colors shadow-lg shadow-primary/20 mb-10"
          >
            Add to Cart
          </button>

          {/* Accordion content */}
          <div className="border-t border-border mb-10 pb-10">
            <div className="py-5 border-b border-border">
              <h3 className="font-semibold text-lg flex justify-between items-center cursor-pointer">
                How to Use
                <span className="text-primary">+</span>
              </h3>
              <p className="text-text-secondary mt-3 text-sm leading-relaxed">{product.howToUse}</p>
            </div>
            <div className="py-5 border-b border-border">
              <h3 className="font-semibold text-lg flex justify-between items-center cursor-pointer">
                Suitable For
                <span className="text-primary">+</span>
              </h3>
              <div className="flex gap-2 mt-3 flex-wrap">
                {product.skinTypes.map(s => <span key={s} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium capitalize">{s}</span>)}
                {product.concerns.map(c => <span key={c} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium capitalize">{c.replace('-', ' ')}</span>)}
              </div>
            </div>
            <div className="py-5 border-b border-border">
              <h3 className="font-semibold text-lg flex justify-between items-center cursor-pointer">
                Shipping & Returns
                <span className="text-primary">+</span>
              </h3>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-border p-4 lg:hidden z-50 flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div>
          <div className="font-bold text-foreground">₹{product.price}</div>
          <div className="text-[0.7rem] font-semibold text-primary uppercase line-clamp-1">{product.name}</div>
        </div>
        <button 
          onClick={() => addToCart({ slug: product.slug, name: product.name, price: product.price, img: product.image })}
          className="flex-1 max-w-[200px] py-3 bg-foreground text-white rounded-xl font-bold text-sm hover:bg-primary transition-colors shadow-lg"
        >
          Add to Cart
        </button>
      </div>

    </main>
  );
}
