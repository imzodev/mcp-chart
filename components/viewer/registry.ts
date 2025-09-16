import type { PresentationModule } from "@/components/viewer/types";

// Registry of known presentations. Add new entries here.
// This ensures Next.js includes these modules in the bundle and allows dynamic selection by id.
export const registry: Record<string, () => Promise<PresentationModule>> = {
  "climate-2025": async () =>
    import("@/app/(viewer)/climate-2025/presentation").then((m) => ({
      default: (m as any).default,
      slides: (m as any).slides,
      meta: (m as any).meta,
    })),
};

export async function resolvePresentation(id: string): Promise<PresentationModule | null> {
  const loader = registry[id];
  if (!loader) return null;
  try {
    return await loader();
  } catch {
    return null;
  }
}
