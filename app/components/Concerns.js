import Link from "next/link";
import { concernsList } from "../../lib/data";

export default function Concerns() {
  const concerns = concernsList;

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
            <Link
              href={`/concern/${c.slug}`}
              key={c.id}
              className={`bg-background rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 border-[1.5px] border-transparent relative overflow-hidden group hover:-translate-y-1.5 hover:border-primary hover:shadow-lg reveal reveal-delay-${i + 1 > 5 ? 5 : i + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 text-primary group-hover:text-white text-2xl">
                {c.icon}
              </div>
              <div className="font-semibold text-[0.95rem] mb-1.5 relative z-10">{c.name}</div>
              <div className="text-[0.78rem] text-text-muted relative z-10">{c.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
