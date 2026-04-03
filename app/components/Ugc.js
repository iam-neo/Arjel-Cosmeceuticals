export default function Ugc() {
  const images = [
    { id: 1, gradient: "from-[#EDF4FF] auto-to-[#C8DEFF]", emoji: "🧴" },
    { id: 2, gradient: "from-[#FFF8ED] auto-to-[#FFE4B5]", emoji: "✨" },
    { id: 3, gradient: "from-[#F0FFF4] auto-to-[#C6F6D5]", emoji: "🌿" },
    { id: 4, gradient: "from-[#FFF5F5] auto-to-[#FED7D7]", emoji: "💧" },
    { id: 5, gradient: "from-[#F5F3FF] auto-to-[#DDD6FE]", emoji: "🫧" },
    { id: 6, gradient: "from-[#FFFBEB] auto-to-[#FDE68A]", emoji: "☀️" },
  ];

  return (
    <section className="bg-background py-24" id="ugc">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            Community
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
            Real Skin. Real Results.
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-xl mx-auto leading-relaxed">
            Join thousands sharing their skin journeys with <strong>#ArjelCosmeceuticals</strong>
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 reveal">
          {images.map((img) => (
            <div
              key={img.id}
              className="aspect-square rounded-lg relative overflow-hidden cursor-pointer group"
            >
              <div className={`w-full h-full flex items-center justify-center text-2xl md:text-3xl lg:text-4xl translate-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${img.gradient}`}>
                {img.emoji}
              </div>
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
