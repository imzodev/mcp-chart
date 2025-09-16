"use client";

import React from "react";
import { SlideViewer } from "@/components/viewer/SlideViewer";
import { PresentationInfo } from "@/components/viewer/PresentationInfo";
import { EmptyState } from "@/components/viewer/EmptyState";
import type { PresentationModule } from "@/components/viewer/types";
import { resolvePresentation } from "@/components/viewer/registry";

const Loading = () => (
  <div className="w-full h-[60dvh] grid place-items-center">
    <div className="animate-pulse text-sm opacity-70">Loading presentation…</div>
  </div>
);

export default function ClientRuntime({ id }: { id: string }) {
  const [mod, setMod] = React.useState<PresentationModule | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    // Load presentation from registry so the bundler includes it
    resolvePresentation(id).then((m) => {
      if (cancelled) return;
      if (!m) {
        setError("missing");
        return;
      }
      setMod(m);
    });
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (error === "missing") {
    return <EmptyState id={id} />;
  }

  if (!mod) return <Loading />;

  const hasSlides = Array.isArray(mod.slides) && mod.slides.length > 0;

  return (
    <div className="flex flex-col gap-4">
      <PresentationInfo meta={mod.meta} />
      {hasSlides ? (
        <div className="h-[70dvh]">
          <SlideViewer slides={mod.slides!} />
        </div>
      ) : mod.default ? (
        <div className="min-h-[50dvh] rounded-xl border border-black/10 dark:border-white/10 p-6">
          {React.createElement(mod.default)}
        </div>
      ) : (
        <EmptyState id={id} />
      )}
    </div>
  );
}
