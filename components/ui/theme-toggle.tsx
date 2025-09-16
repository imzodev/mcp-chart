"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === "system" ? systemTheme : theme) : undefined;

  function nextTheme() {
    if (!mounted) return;
    // Force a visible change on every click by toggling only between light and dark
    setTheme(current === "dark" ? "light" : "dark");
  }

  const label = `Theme: ${current ?? "system"}`;

  return (
    <button
      aria-label="Toggle theme"
      title={label}
      onClick={nextTheme}
      className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[.04] dark:hover:bg-white/[.06]"
    >
      {mounted ? (
        current === "dark" ? (
          <Moon className="size-4" />
        ) : current === "light" ? (
          <Sun className="size-4" />
        ) : (
          <Sun className="size-4" />
        )
      ) : (
        // Placeholder to keep size stable before hydration
        <span className="inline-block w-4 h-4" aria-hidden />
      )}
      <span className="hidden sm:inline">{mounted ? label : "Theme"}</span>
    </button>
  );
}
