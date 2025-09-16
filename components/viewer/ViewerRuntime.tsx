"use client";

import React from "react";
import dynamic from "next/dynamic";
import { SlideViewer } from "@/components/viewer/SlideViewer";
import { PresentationInfo } from "@/components/viewer/PresentationInfo";
import { EmptyState } from "@/components/viewer/EmptyState";
import type { PresentationModule } from "@/components/viewer/types";

const Loading = () => (
  <div className="w-full h-[60dvh] grid place-items-center">
    <div className="animate-pulse text-sm opacity-70">Loading presentation…</div>
  </div>
);

export function ViewerRuntime({ id }: { id: string }) {
  const [mod, setMod] = React.useState<PresentationModule | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    // Import the local presentation file living alongside the page: ./presentation
    import(/* webpackChunkName: "presentation" */ `../../app/(viewer)/${id}/presentation`).then((m) => {
      if (cancelled) return;
      setMod({
        default: (m as any).default,
        slides: (m as any).slides,
        meta: (m as any).meta,
      });
    }).catch(() => {
      if (!cancelled) setError("missing");
    });
    return () => { cancelled = true; };
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
