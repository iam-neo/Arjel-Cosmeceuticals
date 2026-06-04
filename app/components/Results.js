import Image from "next/image";

export default function Results() {
  return (
    <section className="bg-bg-warm py-24" id="results">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl reveal">
            <Image src="/images/before-after.png" alt="Before and After Results" width={600} height={400} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div className="text-[0.72rem] font-semibold uppercase tracking-wider opacity-80">Real Results</div>
              <h3 className="font-[var(--font-playfair)] text-xl mt-1.5">Visible improvement in 2–4 weeks</h3>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="reveal">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
                Proven Results
              </div>
              <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
                Real Skin. Real Results.
              </h2>
              <p className="text-[1.05rem] text-text-secondary leading-relaxed">
                Our clinical studies and thousands of real user experiences speak for themselves.
              </p>
            </div>
            
            <div className="flex items-start gap-5 p-6 bg-white rounded-xl transition-all hover:shadow-md hover:translate-x-1 reveal reveal-delay-1">
              <div className="w-14 h-14 min-w-[56px] rounded-xl bg-primary/10 flex items-center justify-center text-xl">📊</div>
              <div>
                <h4 className="text-base font-semibold mb-1">94% Saw Clearer Skin</h4>
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">In an 8-week study with 200+ participants using our Acne Control range.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 p-6 bg-white rounded-xl transition-all hover:shadow-md hover:translate-x-1 reveal reveal-delay-2">
              <div className="w-14 h-14 min-w-[56px] rounded-xl bg-primary/10 flex items-center justify-center text-xl">⏱️</div>
              <div>
                <h4 className="text-base font-semibold mb-1">Results in 14 Days</h4>
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">Most users report visible improvement in dark spots within two weeks.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-border reveal reveal-delay-3">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-star fill-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
                ))}
              </div>
              <p className="text-[0.95rem] leading-relaxed text-text-secondary mb-4 italic">
                &ldquo;I&apos;ve tried everything for my oily, acne-prone skin. The Niacinamide serum and Salicylic cleanser combo finally gave me results I could see. My skin has never been this clear!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white font-semibold text-[0.85rem]">PR</div>
                <div>
                  <div className="font-semibold text-[0.88rem]">Priya R.</div>
                  <div className="text-[0.75rem] text-text-muted">Verified Buyer · Oily Skin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
