export default function Concerns() {
  const concerns = [
    {
      id: "acne",
      name: "Acne",
      desc: "Breakout control",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9 2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9 2.83-2.83" />
        </svg>
      ),
    },
    {
      id: "dark-spots",
      name: "Dark Spots",
      desc: "Even tone & brightness",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      id: "oil-control",
      name: "Oil Control",
      desc: "Matte & balanced",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      id: "sensitive",
      name: "Sensitive Skin",
      desc: "Gentle & soothing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      id: "sun-protection",
      name: "Sun Protection",
      desc: "UV defense daily",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.73 12.73 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
    },
    {
      id: "anti-aging",
      name: "Anti-Aging",
      desc: "Youthful & firm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 8v4l3 3" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-24" id="concerns">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            Find Your Solution
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
            Shop by Concern
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-xl mx-auto leading-relaxed">
            Every skin tells a different story. Find the targeted treatments formulated for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {concerns.map((c, i) => (
            <div
              key={c.id}
              className={`bg-background rounded-2xl p-6 lg:p-8 text-center cursor-pointer transition-all duration-300 border-[1.5px] border-transparent relative overflow-hidden group hover:-translate-y-1.5 hover:border-primary hover:shadow-lg reveal reveal-delay-${i + 1 > 5 ? 5 : i + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 text-primary group-hover:text-white">
                <div className="w-6 h-6">{c.icon}</div>
              </div>
              <div className="font-semibold text-[0.95rem] mb-1.5 relative z-10">{c.name}</div>
              <div className="text-[0.78rem] text-text-muted relative z-10">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
