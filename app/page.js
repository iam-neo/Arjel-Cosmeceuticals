"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concerns from "./components/Concerns";
import Bestsellers from "./components/Bestsellers";
import Results from "./components/Results";
import RoutineBuilder from "./components/RoutineBuilder";
import Ingredients from "./components/Ingredients";
import Bundles from "./components/Bundles";
import Trust from "./components/Trust";
import Ugc from "./components/Ugc";
import Footer from "./components/Footer";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  // Scroll reveal logic
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.88;
      revealElements.forEach((el) => {
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    // Explicitly run it on mount to show elements already in view
    setTimeout(revealOnScroll, 100);
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Concerns />
        <Bestsellers onAddToCart={handleAddToCart} />
        <Results />
        <RoutineBuilder onAddToCart={handleAddToCart} />
        <Ingredients />
        <Bundles onAddToCart={handleAddToCart} />
        <Trust />
        <Ugc />
      </main>
      <Footer />
    </>
  );
}
