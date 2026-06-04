"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Unobserve to avoid unnecessary work
          }
        });
      },
      {
        root: null,
        rootMargin: "50px", // Trigger 50px before it even enters the screen!
        threshold: 0, // Trigger immediately! A threshold of 0.1 fails on mobile if sections are too tall to fit 10% in the viewport!
      }
    );

    const observeElements = () => {
      // Find all unrevealed elements that haven't been observed yet
      const revealElements = document.querySelectorAll(".reveal:not(.visible):not(.observed)");
      revealElements.forEach((el) => {
        el.classList.add("observed"); // Mark so we don't observe multiple times
        observer.observe(el);
      });
    };

    // Run this check continuously every 500ms
    // This perfectly solves the "mobile hydration" issue where slow phone CPUs load components AFTER this script runs.
    const intervalId = setInterval(observeElements, 500);

    // Initial check
    observeElements();

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
