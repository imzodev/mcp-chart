import type { Metadata } from "next";
import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: "Presentation Viewer",
  description: "View generated presentations",
};

export default function ViewerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr]">
      <header className="px-4 md:px-8 py-3 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
        <div className="text-sm opacity-70">Presentation Viewer</div>
        <div className="flex items-center gap-3">
          <div className="text-xs opacity-60 hidden sm:block">Use ← → or H/L to navigate</div>
          <ThemeToggle />
        </div>
      </header>
      <main className="p-4 md:p-8 container mx-auto max-w-5xl w-full">{children}</main>
    </div>
  );
}
