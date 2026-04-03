import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-bg-warm via-[#EDF4FF] to-background relative overflow-hidden pt-20" id="hero">
      {/* Decorative blobs */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(42,127,255,0.06)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(232,200,126,0.08)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="max-w-[540px] lg:max-w-none text-center lg:text-left mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/8 rounded-full text-xs font-semibold text-primary mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M9 12 11 14 15 10" /><circle cx="12" cy="12" r="10" /></svg>
            Dermatologist Developed
          </div>

          <h1 className="font-[var(--font-playfair)] text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.12] mb-5">
            Clear Skin Starts with the{" "}
            <span className="text-primary">Right Formula</span>
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-9 max-w-[460px] mx-auto lg:mx-0">
            Science-backed skincare crafted for South Asian skin. Powerful, proven ingredients — zero guesswork.
          </p>

          <div className="flex gap-3.5 flex-wrap justify-center lg:justify-start mb-12">
            <a href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-primary text-white shadow-[0_4px_16px_rgba(42,127,255,0.3)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(42,127,255,0.4)] transition-all">
              Shop Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </a>
            <a href="#concerns" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-transparent border-[1.5px] border-border hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all">
              Shop by Concern
            </a>
          </div>

          <div className="flex gap-10 justify-center lg:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-xs text-text-muted mt-0.5">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.8★</div>
              <div className="text-xs text-text-muted mt-0.5">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-xs text-text-muted mt-0.5">Active Products</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/Anti-Aging Serum.jpg" alt="Arjel Cosmeceuticals Hero Product" width={480} height={600} className="w-full h-auto" priority />
          </div>
          {/* Floating cards */}
          <div className="hidden lg:flex absolute top-[15%] -left-7 bg-white rounded-xl px-4 py-3.5 shadow-lg items-center gap-2.5 animate-float z-20">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-primary/10">🧪</div>
            <div><span className="block text-[0.72rem] text-text-muted">Key Ingredient</span><strong className="text-sm">Niacinamide 10%</strong></div>
          </div>
          <div className="hidden lg:flex absolute bottom-[20%] -right-7 bg-white rounded-xl px-4 py-3.5 shadow-lg items-center gap-2.5 animate-float-delay z-20">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg bg-success/10">✓</div>
            <div><span className="block text-[0.72rem] text-text-muted">Clinically Proven</span><strong className="text-sm">94% Saw Results</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}
