"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

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
    
    // Check for elements immediately when route changes or component mounts
    setTimeout(revealOnScroll, 100);

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, [pathname]);

  return null;
}
