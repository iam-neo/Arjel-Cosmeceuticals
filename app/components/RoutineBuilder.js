"use client";
import { useState } from "react";
import Image from "next/image";

export default function RoutineBuilder({ onAddToCart }) {
  const [activeStep, setActiveStep] = useState(1);
  const [selections, setSelections] = useState({ 1: null, 2: null, 3: null });

  const routines = {
    "oily-acne": [
      { step: "Cleanse", name: "Salicylic Acid Cleanser", price: 449, img: "/images/product-cleanser.png" },
      { step: "Tone", name: "Pore Refining Toner", price: 399, img: "/images/hero-product.png" },
      { step: "Treat", name: "Niacinamide Clarity Serum", price: 649, img: "/images/hero-product.png" },
      { step: "Moisturize", name: "Oil-Free Gel Moisturizer", price: 549, img: "/images/product-moisturizer.png" },
      { step: "Protect", name: "Invisible UV Shield SPF 50", price: 599, img: "/images/product-sunscreen.png" }
    ],
    "default": [
      { step: "Cleanse", name: "Gentle Cream Cleanser", price: 399, img: "/images/product-cleanser.png" },
      { step: "Tone", name: "Hydrating Essence Toner", price: 449, img: "/images/hero-product.png" },
      { step: "Treat", name: "Vitamin C Glow Serum", price: 699, img: "/images/hero-product.png" },
      { step: "Moisturize", name: "Hydra-Barrier Moisturizer", price: 549, img: "/images/product-moisturizer.png" },
      { step: "Protect", name: "Invisible UV Shield SPF 50", price: 599, img: "/images/product-sunscreen.png" }
    ]
  };

  const handleSelect = (step, value) => {
    setSelections({ ...selections, [step]: value });
    if (step < 3) {
      setActiveStep(step + 1);
    }
  };

  const isComplete = selections[1] && selections[2] && selections[3];
  
  let currentRoutine = [];
  if (isComplete) {
    const isAcneOily = selections[1] === "oily" && selections[2] === "acne";
    let base = isAcneOily ? routines["oily-acne"] : routines["default"];
    if (selections[3] === "minimal") {
      currentRoutine = [base[0], base[2], base[4]];
    } else {
      currentRoutine = base;
    }
  }

  const handleAddRoutine = () => {
    currentRoutine.forEach(item => {
      onAddToCart(item.name, item.price);
    });
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="routine">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-br from-transparent to-primary/5 pointer-events-none" />
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            Personalized For You
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
            Build Your Routine
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-xl mx-auto leading-relaxed">
            Answer 3 quick questions and get a curated skincare routine tailored to your skin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-5">
            {[1, 2, 3].map((stepNum) => (
              <div 
                key={stepNum} 
                className={`rounded-xl p-6 cursor-pointer transition-all duration-300 border-[1.5px] relative
                  ${activeStep === stepNum ? "bg-white border-primary shadow-md" : "bg-background border-transparent"}`}
              >
                <div className="flex items-center gap-3.5" onClick={() => setActiveStep(stepNum)}>
                  <div className={`w-9 h-9 min-w-[36px] rounded-full flex items-center justify-center font-bold text-[0.85rem] transition-colors
                    ${activeStep === stepNum || selections[stepNum] ? "bg-primary text-white" : "bg-border text-foreground"}`}>
                    {stepNum}
                  </div>
                  <div>
                    <div className="font-semibold text-base">
                      {stepNum === 1 && "What's your skin type?"}
                      {stepNum === 2 && "Your main concern?"}
                      {stepNum === 3 && "Your routine preference?"}
                    </div>
                    <div className="text-[0.82rem] text-text-muted mt-1">
                      {stepNum === 1 && "This helps us choose the right base for your routine"}
                      {stepNum === 2 && "We'll prioritize the right actives for you"}
                      {stepNum === 3 && "Simple or comprehensive — you choose"}
                    </div>
                  </div>
                </div>
                
                {activeStep === stepNum && (
                  <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-2 animate-[fadeIn_0.3s_ease-out]">
                    {stepNum === 1 && ["oily", "dry", "combination", "normal", "sensitive"].map(opt => (
                      <button key={opt} onClick={() => handleSelect(1, opt)} className={`px-4 py-2 rounded-full text-[0.82rem] font-medium border-[1.5px] transition-colors capitalize ${selections[1] === opt ? "border-primary bg-primary/5 text-primary" : "bg-background border-border hover:border-primary hover:bg-primary/5 hover:text-primary"}`}>
                        {opt}
                      </button>
                    ))}
                    {stepNum === 2 && ["acne", "pigmentation", "aging", "dullness", "dryness"].map(opt => (
                      <button key={opt} onClick={() => handleSelect(2, opt)} className={`px-4 py-2 rounded-full text-[0.82rem] font-medium border-[1.5px] transition-colors capitalize ${selections[2] === opt ? "border-primary bg-primary/5 text-primary" : "bg-background border-border hover:border-primary hover:bg-primary/5 hover:text-primary"}`}>
                        {opt === "pigmentation" ? "Dark Spots" : opt === "aging" ? "Fine Lines" : opt}
                      </button>
                    ))}
                    {stepNum === 3 && ["minimal", "full"].map(opt => (
                      <button key={opt} onClick={() => handleSelect(3, opt)} className={`px-4 py-2 rounded-full text-[0.82rem] font-medium border-[1.5px] transition-colors capitalize ${selections[3] === opt ? "border-primary bg-primary/5 text-primary" : "bg-background border-border hover:border-primary hover:bg-primary/5 hover:text-primary"}`}>
                        {opt === "minimal" ? "Minimal (3 steps)" : "Full Routine (5 steps)"}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={`rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center transition-all duration-300 border-2 
            ${isComplete ? "border-solid border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg" : "border-dashed border-border bg-background"}`}>
            
            {!isComplete ? (
              <>
                <div className="text-5xl mb-4">🧴</div>
                <h3 className="font-[var(--font-playfair)] text-2xl mb-2">Your Personalized Routine</h3>
                <p className="text-text-muted text-sm max-w-[320px]">
                  Select your skin type, concern, and preference to get product recommendations tailored just for you.
                </p>
              </>
            ) : (
              <div className="w-full flex flex-col items-center text-left">
                <div className="text-xl mb-3">✅</div>
                <h3 className="font-[var(--font-playfair)] text-xl mb-1 text-center w-full">Your {selections[3] === 'minimal' ? '3-Step' : '5-Step'} Routine</h3>
                <p className="text-text-muted text-xs text-center mb-6 w-full">Tailored for <strong className="capitalize">{selections[1]}</strong> skin with <strong className="capitalize">{selections[2]}</strong> concerns</p>
                
                <div className="flex flex-col gap-3 w-full">
                  {currentRoutine.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-3 shadow-sm border border-border/50">
                      <div className="w-[50px] h-[50px] rounded-lg bg-background overflow-hidden shrink-0">
                        <Image src={p.img} alt={p.name} width={50} height={50} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[0.65rem] font-semibold text-primary uppercase tracking-wider">{p.step}</div>
                        <div className="font-semibold text-sm leading-tight">{p.name}</div>
                        <div className="text-xs text-text-muted mt-0.5">₹{p.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={handleAddRoutine} className="w-full mt-6 py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors">
                  Add Routine to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
