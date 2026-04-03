import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { concernsList, getProductsByConcern } from "../../../lib/data";

export default async function ConcernPage(props) {
  const params = await props.params;
  const concern = concernsList.find(c => c.slug === params.slug);
  
  if (!concern) {
    notFound();
  }

  const products = getProductsByConcern(concern.slug);

  return (
    <main className="min-h-screen bg-bg-warm pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent p-10 rounded-3xl border border-primary/20 mb-12">
          <div className="text-4xl mb-4">{concern.icon}</div>
          <h1 className="font-[var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-4">
            Targeting {concern.name}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            {concern.desc}. Shop our dermatologist-developed formulas clinically proven to address {concern.name.toLowerCase()} safely and effectively.
          </p>
        </div>

        {/* Product Grid */}
        <h2 className="text-2xl font-bold mb-8">Recommended Solutions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
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
                  <div className="text-[1.1rem] font-bold text-foreground">₹{p.price}</div>
                  <div className="flex items-center gap-1 text-[0.82rem] text-text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-star fill-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
                    {p.rating.split(' ')[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {products.length === 0 && (
          <p className="text-text-muted text-center py-10">New products targeting {concern.name.toLowerCase()} are launching soon.</p>
        )}

      </div>
    </main>
  );
}
