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
  "ai-marketing": async () =>
    import("@/app/(viewer)/ai-marketing/presentation").then((m) => ({
      default: (m as any).default,
      slides: (m as any).slides,
      meta: (m as any).meta,
    })),
  "cloud-security": async () =>
    import("@/app/(viewer)/cloud-security/presentation").then((m) => ({
      default: (m as any).default,
      slides: (m as any).slides,
      meta: (m as any).meta,
    })),
  "ia-desempleo-2025": async () =>
    import("@/app/(viewer)/ia-desempleo-2025/presentation").then((m) => ({
      default: (m as any).default,
      slides: (m as any).slides,
      meta: (m as any).meta,
    })),
  "ia-perjuicio-trabajadores-2025": async () =>
    import("@/app/(viewer)/ia-perjuicio-trabajadores-2025/presentation").then((m) => ({
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

export type PresentationIndexItem = {
  id: string;
  title?: string;
  description?: string;
};

// Returns a list of available presentations (ids and optional meta)
export async function listPresentations(): Promise<PresentationIndexItem[]> {
  const entries = Object.entries(registry);
  const results = await Promise.all(
    entries.map(async ([id, loader]) => {
      try {
        const mod = await loader();
        return {
          id,
          title: mod?.meta?.title,
          description: mod?.meta?.description,
        } as PresentationIndexItem;
      } catch {
        return { id } as PresentationIndexItem;
      }
    })
  );
  return results.sort((a, b) => a.id.localeCompare(b.id));
}
