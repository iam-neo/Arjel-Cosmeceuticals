import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { heroIngredients, products } from "../../../lib/data";

export default async function IngredientPage(props) {
  const params = await props.params;
  const ingredient = heroIngredients.find(i => i.slug === params.slug);
  
  if (!ingredient) {
    notFound();
  }

  // Find products containing this ingredient
  const relatedProducts = products.filter(p => 
    p.ingredient.toLowerCase().includes(ingredient.name.toLowerCase()) || 
    p.name.toLowerCase().includes(ingredient.name.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-bg-warm pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Deep Dive Banner */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row mb-16">
          <div className="md:w-1/3 bg-foreground p-12 text-white flex flex-col justify-center items-center text-center">
            <span className="text-6xl mb-6">{ingredient.emoji}</span>
            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Clinical Active</div>
            <h1 className="font-[var(--font-playfair)] text-4xl font-bold mb-2">{ingredient.name}</h1>
            <div className="text-primary-light font-semibold">{ingredient.sci}</div>
          </div>
          <div className="md:w-2/3 p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">What does it do?</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {ingredient.desc} Extensive dermatological research proves its efficacy when formulated at the right clinical percentage.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background rounded-xl p-4 border border-border">✔️ Clinically Proven</div>
              <div className="bg-background rounded-xl p-4 border border-border">✔️ Dermatologist Tested</div>
            </div>
          </div>
        </div>

        {/* Formulations Grid */}
        <h2 className="text-2xl font-bold mb-8">Formulated with {ingredient.name}</h2>
        
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.slug} className="bg-white rounded-2xl overflow-hidden border border-border relative group hover:shadow-lg transition-all">
                <Link href={`/product/${p.slug}`} className="block h-[240px] bg-background relative overflow-hidden">
                  <Image src={p.image} alt={p.name} width={300} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-5">
                  <div className="text-[0.7rem] font-semibold text-primary uppercase tracking-wider mb-1.5">{p.tags[0]}</div>
                  <Link href={`/product/${p.slug}`} className="font-semibold text-base mb-1 block hover:text-primary transition-colors">{p.name}</Link>
                  <div className="text-[0.82rem] text-text-muted mb-2.5 line-clamp-1">{p.ingredient}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-[1.1rem] font-bold text-foreground">₹{p.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted">No specific products currently feature {ingredient.name} as the hero active.</p>
        )}

      </div>
    </main>
  );
}
