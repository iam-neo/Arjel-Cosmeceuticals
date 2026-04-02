"use client";
import { useState, useEffect } from "react";

export default function Navbar({ cartCount = 0 }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#concerns", label: "Shop by Concern" },
    { href: "#products", label: "Bestsellers" },
    { href: "#ingredients", label: "Ingredients" },
    { href: "#bundles", label: "Bundles" },
    { href: "#routine", label: "Build Routine" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-xl shadow-sm py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-[var(--font-playfair)] text-2xl font-bold tracking-tight">
          Arjel<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:rounded hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border transition-colors text-text-secondary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          </button>
          {/* Account */}
          <button className="w-10 h-10 hidden sm:flex items-center justify-center rounded-full hover:bg-border transition-colors text-text-secondary hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* Cart */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border transition-colors text-text-secondary hover:text-primary relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-[18px] h-[18px] bg-primary text-white text-[0.65rem] font-bold rounded-full flex items-center justify-center transition-transform">
                {cartCount}
              </span>
            )}
          </button>
          {/* Hamburger */}
          <button className="flex lg:hidden flex-col gap-[5px] w-6" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="w-full h-0.5 bg-foreground rounded transition-all" />
            <span className="w-full h-0.5 bg-foreground rounded transition-all" />
            <span className="w-full h-0.5 bg-foreground rounded transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/97 backdrop-blur-xl shadow-lg rounded-b-2xl p-6 flex flex-col gap-5 border-t border-border">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
