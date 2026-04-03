import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-white/10">
          
          <div className="lg:col-span-2 max-w-[280px] lg:mx-0 mx-auto text-center lg:text-left">
            <div className="font-[var(--font-playfair)] text-2xl font-bold mb-4">
              Arjel Cosmeceuticals<span className="text-primary-light">.</span>
            </div>
            <p className="text-[0.88rem] text-white/60 leading-relaxed mb-6">
              Science-backed skincare developed for South Asian skin. Clear, confident skin — backed by dermatology.
            </p>
            <div className="flex justify-center lg:justify-start gap-3">
              <a href="#" aria-label="Instagram" className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-colors hover:bg-primary hover:border-primary hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-colors hover:bg-primary hover:border-primary hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-white/60 transition-colors hover:bg-primary hover:border-primary hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[0.85rem] font-semibold uppercase tracking-[1.5px] mb-5 text-white/50">Shop</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">All Products</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Bestsellers</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">New Arrivals</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Bundles</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Gift Cards</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[0.85rem] font-semibold uppercase tracking-[1.5px] mb-5 text-white/50">Learn</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/ingredients/niacinamide" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Our Ingredients</Link></li>
              <li><Link href="/routine" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Skin Guide</Link></li>
              <li><Link href="/about" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">About Arjel Cosmeceuticals</Link></li>
              <li><Link href="/contact" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[0.85rem] font-semibold uppercase tracking-[1.5px] mb-5 text-white/50">Help</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Contact Us</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Shipping Info</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Returns & Refunds</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">FAQs</a></li>
              <li><a href="#" className="text-[0.88rem] text-white/60 hover:text-white transition-colors hover:pl-1">Track Order</a></li>
            </ul>
          </div>

        </div>
        
        <div className="text-center py-6 text-[0.82rem] text-white/40">
          © 2026 Arjel Cosmeceuticals. All rights reserved. Free shipping on orders above ₹999.
        </div>
      </div>
    </footer>
  );
}
