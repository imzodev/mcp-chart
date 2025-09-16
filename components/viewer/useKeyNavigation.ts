"use client";

import { useEffect } from "react";

export function useKeyNavigation(onPrev: () => void, onNext: () => void) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "h") {
        e.preventDefault();
        onPrev();
      } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "l") {
        e.preventDefault();
        onNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext]);
}
