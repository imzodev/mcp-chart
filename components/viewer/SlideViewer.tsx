"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeyNavigation } from "@/components/viewer/useKeyNavigation";
import type { Slide } from "@/components/viewer/types";

export type SlideViewerProps = {
  slides: Slide[];
  startIndex?: number;
  onIndexChange?: (index: number) => void;
};

export function SlideViewer({ slides, startIndex = 0, onIndexChange }: SlideViewerProps) {
  const [index, setIndex] = React.useState(startIndex);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const clamped = React.useMemo(() => Math.max(0, Math.min(index, slides.length - 1)), [index, slides.length]);

  const goPrev = React.useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goNext = React.useCallback(() => setIndex((i) => Math.min(slides.length - 1, i + 1)), [slides.length]);

  useKeyNavigation(goPrev, goNext);

  React.useEffect(() => {
    if (onIndexChange) onIndexChange(clamped);
  }, [clamped, onIndexChange]);

  // Keep internal fullscreen state in sync with document
  React.useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Shortcut: 'f' toggles fullscreen
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen]);

  async function toggleFullscreen() {
    try {
      if (!isFullscreen) {
        const el = containerRef.current;
        if (el && el.requestFullscreen) await el.requestFullscreen();
      } else {
        if (document.exitFullscreen) await document.exitFullscreen();
      }
    } catch {
      // no-op; browser may block without user gesture
    }
  }

  return (
    <div className="w-full h-full grid grid-rows-[1fr_auto]">
      <div
        ref={containerRef}
        className={
          "relative w-full h-full overflow-hidden rounded-xl border border-black/10 dark:border-white/10 " +
          (isFullscreen
            ? "bg-[var(--background)] text-[var(--foreground)]"
            : "bg-black/2 dark:bg-white/2")
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={clamped}
            className="absolute inset-0 p-6 md:p-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {slides[clamped]}
          </motion.div>
        </AnimatePresence>
        <div className="absolute top-2 right-2 z-10">
          <button
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            onClick={toggleFullscreen}
            className="px-2 py-1 rounded-md text-xs border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20"
          >
            {isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 pt-4">
        <button
          aria-label="Previous slide"
          onClick={goPrev}
          disabled={clamped === 0}
          className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 disabled:opacity-50 hover:bg-black/[.04] dark:hover:bg-white/[.06]"
        >
          ← Prev
        </button>
        <div className="text-sm opacity-80">
          {clamped + 1} / {slides.length}
        </div>
        <button
          aria-label="Next slide"
          onClick={goNext}
          disabled={clamped === slides.length - 1}
          className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 disabled:opacity-50 hover:bg-black/[.04] dark:hover:bg-white/[.06]"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
