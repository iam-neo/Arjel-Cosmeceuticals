"use client";
import Image from "next/image";

export default function Bestsellers({ onAddToCart }) {
  const products = [
    {
      id: "p1",
      badge: "Bestseller",
      badgeType: "accent",
      image: "/images/hero-product.png",
      tag: "Oil Control · Brightening",
      name: "Niacinamide Clarity Serum",
      ingredient: "Niacinamide 10% + Zinc PCA",
      price: 649,
      rating: "4.9 (2.1k)",
    },
    {
      id: "p2",
      badge: "New",
      badgeType: "primary",
      image: "/images/product-cleanser.png",
      tag: "Acne Control",
      name: "Salicylic Acid Cleanser",
      ingredient: "Salicylic Acid 2% + Aloe Vera",
      price: 449,
      rating: "4.7 (1.4k)",
    },
    {
      id: "p3",
      image: "/images/product-sunscreen.png",
      tag: "Sun Protection",
      name: "Invisible UV Shield SPF 50",
      ingredient: "Zinc Oxide + Vitamin E",
      price: 599,
      rating: "4.8 (980)",
    },
    {
      id: "p4",
      badge: "Bestseller",
      badgeType: "accent",
      image: "/images/product-moisturizer.png",
      tag: "Hydration · Sensitive",
      name: "Hydra-Barrier Moisturizer",
      ingredient: "Hyaluronic Acid + Ceramides",
      price: 549,
      originalPrice: 699,
      rating: "4.9 (1.8k)",
    },
  ];

  return (
    <section className="bg-background py-24" id="products">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            Customer Favorites
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
            Bestsellers
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-xl mx-auto leading-relaxed">
            Tried, loved, and repurchased by thousands. These are the products that deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.id}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-border relative group hover:-translate-y-1.5 hover:shadow-lg hover:border-transparent reveal reveal-delay-${i + 1}`}
            >
              {p.badge && (
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
                    p.badgeType === "accent" ? "bg-accent text-[#4a3a10]" : "bg-primary text-white"
                  }`}
                >
                  {p.badge}
                </span>
              )}
              <div className="w-full h-[280px] sm:h-[200px] lg:h-[280px] bg-background flex items-center justify-center overflow-hidden relative">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="w-9 h-9 bg-white text-foreground rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors" aria-label="Quick view">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  </button>
                  <button className="w-9 h-9 bg-white text-foreground rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-colors" aria-label="Wishlist">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[0.7rem] font-semibold text-primary uppercase tracking-wider mb-1.5">{p.tag}</div>
                <div className="font-semibold text-base mb-1">{p.name}</div>
                <div className="text-[0.82rem] text-text-muted mb-2.5">{p.ingredient}</div>
                <div className="flex items-center justify-between">
                  <div className="text-[1.1rem] font-bold text-foreground">
                    ₹{p.price}
                    {p.originalPrice && <span className="line-through text-text-muted text-[0.85rem] font-normal ml-2">₹{p.originalPrice}</span>}
                  </div>
                  <div className="flex items-center gap-1 text-[0.82rem] text-text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-star fill-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
                    {p.rating}
                  </div>
                </div>
                <button
                  onClick={() => onAddToCart(p.name, p.price)}
                  className="w-full mt-3.5 p-3 bg-foreground text-white rounded-lg text-[0.85rem] font-semibold hover:bg-primary transition-colors flex items-center justify-center gap-2 group-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
