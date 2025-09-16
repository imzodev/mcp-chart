import React from "react";
import type { PresentationMeta } from "@/components/viewer/types";

export function PresentationInfo({ meta }: { meta?: PresentationMeta }) {
  if (!meta) return null;
  const { title, description, author, date } = meta;
  return (
    <div className="mb-6 rounded-lg border border-black/10 dark:border-white/10 p-4">
      <div className="flex flex-col gap-1">
        {title && <h1 className="text-xl font-semibold">{title}</h1>}
        {description && <p className="opacity-80 text-sm">{description}</p>}
        {(author || date) && (
          <div className="text-xs opacity-60 mt-1">
            {[author, date].filter(Boolean).join(" · ")}
          </div>
        )}
      </div>
    </div>
  );
}
