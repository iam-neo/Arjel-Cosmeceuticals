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
