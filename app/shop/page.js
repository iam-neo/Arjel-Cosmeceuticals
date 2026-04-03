import Link from "next/link";
import Image from "next/image";
import { products } from "../../lib/data";

export default async function ShopPage({ searchParams }) {
  const { concern, skin } = await searchParams;

  let filteredProducts = products;

  if (concern) {
    filteredProducts = filteredProducts.filter((p) => p.concerns.includes(concern));
  }
  
  if (skin) {
    filteredProducts = filteredProducts.filter((p) => p.skinTypes.includes(skin) || p.skinTypes.includes("all"));
  }

  return (
    <main className="min-h-screen bg-bg-warm pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h1 className="font-[var(--font-playfair)] text-4xl font-bold mb-3">
              {concern ? `Shop ${concern.replace('-', ' ')}` : skin ? `${skin} Skin Care` : "Shop All Skincare"}
            </h1>
            <p className="text-text-secondary">
              Showing {filteredProducts.length} science-backed formulas.
            </p>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <Link href="/shop" className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-border ${!concern && !skin ? "bg-primary text-white border-primary" : "bg-white hover:border-primary"}`}>All</Link>
            <Link href="/shop?concern=acne" className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-border ${concern === 'acne' ? "bg-primary text-white border-primary" : "bg-white hover:border-primary"}`}>Acne</Link>
            <Link href="/shop?concern=pigmentation" className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-border ${concern === 'pigmentation' ? "bg-primary text-white border-primary" : "bg-white hover:border-primary"}`}>Dark Spots</Link>
            <Link href="/shop?skin=oily" className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-border ${skin === 'oily' ? "bg-primary text-white border-primary" : "bg-white hover:border-primary"}`}>Oily Skin</Link>
            <Link href="/shop?skin=sensitive" className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border border-border ${skin === 'sensitive' ? "bg-primary text-white border-primary" : "bg-white hover:border-primary"}`}>Sensitive Skin</Link>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-border">
            <p className="text-text-secondary">No products found for this filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div key={p.slug} className="bg-white rounded-2xl overflow-hidden border border-border relative group hover:shadow-lg transition-all">
                {p.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${p.badgeType === "accent" ? "bg-accent text-[#4a3a10]" : "bg-primary text-white"}`}>
                    {p.badge}
                  </span>
                )}
                <Link href={`/product/${p.slug}`} className="block h-[240px] bg-background relative overflow-hidden">
                  <Image src={p.image} alt={p.name} width={300} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-5">
                  <div className="text-[0.7rem] font-semibold text-primary uppercase tracking-wider mb-1.5">{p.tags[0]}</div>
                  <Link href={`/product/${p.slug}`} className="font-semibold text-base mb-1 block hover:text-primary transition-colors">{p.name}</Link>
                  <div className="text-[0.82rem] text-text-muted mb-2.5 line-clamp-1">{p.ingredient}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-[1.1rem] font-bold text-foreground">
                      ₹{p.price}
                      {p.originalPrice && <span className="line-through text-text-muted text-[0.85rem] font-normal ml-2">₹{p.originalPrice}</span>}
                    </div>
                    <div className="flex items-center gap-1 text-[0.82rem] text-text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-star fill-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
                      {p.rating.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
