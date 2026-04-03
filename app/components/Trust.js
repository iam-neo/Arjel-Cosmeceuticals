export default function Trust() {
  const trustItems = [
    { icon: "🔬", label: "Dermatologically Tested", desc: "Every product passes rigorous dermatological safety testing before launch." },
    { icon: "🌿", label: "Paraben-Free", desc: "Clean formulas free from parabens, sulfates, and harsh chemicals." },
    { icon: "🛡️", label: "Non-Comedogenic", desc: "Won't clog pores. Safe for acne-prone and sensitive skin types." },
    { icon: "🐰", label: "Cruelty-Free", desc: "Never tested on animals. Certified cruelty-free and vegan-friendly." },
  ];

  return (
    <section className="bg-white py-24" id="trust">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            Why Arjel Cosmeceuticals
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-foreground">
            Formulated with Care
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((t, i) => (
            <div key={t.label} className={`text-center p-8 rounded-2xl bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-md reveal reveal-delay-${i + 1}`}>
              <div className="text-3xl mb-3.5">{t.icon}</div>
              <h3 className="font-semibold text-[0.95rem] mb-1.5 text-foreground">{t.label}</h3>
              <p className="text-[0.82rem] text-text-muted leading-relaxed max-w-[220px] mx-auto">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
