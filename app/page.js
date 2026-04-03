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

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concerns />
        <Bestsellers />
        <Results />
        <RoutineBuilder />
        <Ingredients />
        <Bundles />
        <Trust />
        <Ugc />
      </main>
      <Footer />
    </>
  );
}
