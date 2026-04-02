export default function Ingredients() {
  const ingredients = [
    {
      emoji: "💧",
      name: "Niacinamide",
      sci: "Vitamin B3 – 10% concentration",
      desc: "Regulates oil production, minimizes pores, and fades dark spots. A true multi-tasker for balanced, clear skin.",
      tags: ["Clarity Serum", "Oil Control Moisturizer"],
    },
    {
      emoji: "🫧",
      name: "Salicylic Acid",
      sci: "BHA – 2% concentration",
      desc: "Penetrates deep into pores to dissolve excess oil and dead skin cells. Your go-to for fighting stubborn acne.",
      tags: ["Acne Cleanser", "Spot Treatment"],
    },
    {
      emoji: "✨",
      name: "Vitamin C",
      sci: "L-Ascorbic Acid – 15%",
      desc: "Potent antioxidant that brightens skin tone, boosts collagen, and protects against environmental damage.",
      tags: ["Glow Serum", "Brightening Cream"],
    },
    {
      emoji: "🌊",
      name: "Hyaluronic Acid",
      sci: "Low + High Molecular Weight",
      desc: "Holds 1000x its weight in water. Delivers deep hydration without heaviness — perfect for humid climates.",
      tags: ["Hydra-Barrier", "Recovery Mask"],
    },
  ];

  return (
    <section className="bg-background py-24" id="ingredients">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            What's Inside
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
            Hero Ingredients
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-xl mx-auto leading-relaxed">
            We believe in transparency. Every formula is built on clinically proven, powerhouse actives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((ing, i) => (
            <div
              key={ing.name}
              className={`bg-white rounded-2xl p-8 transition-all duration-300 border border-border relative overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-transparent reveal reveal-delay-${i + 1}`}
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-300 rounded-r-sm group-hover:h-full" />
              <div className="text-4xl mb-4">{ing.emoji}</div>
              <div className="font-[var(--font-playfair)] text-xl font-semibold mb-1 text-foreground">{ing.name}</div>
              <div className="text-[0.78rem] text-text-muted mb-3">{ing.sci}</div>
              <p className="text-[0.88rem] text-text-secondary leading-relaxed mb-5 min-h-[80px]">
                {ing.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {ing.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background rounded-full text-[0.72rem] font-medium text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
