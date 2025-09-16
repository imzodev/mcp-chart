import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { listPresentations } from "@/components/viewer/registry";

export default async function Home() {
  const decks = await listPresentations();
  return (
    <div className="min-h-screen px-6 py-8 md:px-10 md:py-12">
      <header className="flex items-center justify-between gap-3 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Presentaciones</h1>
          <p className="text-sm opacity-70">Selecciona una presentación para verla</p>
        </div>
        <ThemeToggle />
      </header>

      <main className="max-w-6xl mx-auto">
        {decks.length === 0 ? (
          <p className="text-sm opacity-80">No hay presentaciones registradas todavía.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decks.map((d) => (
              <Link
                key={d.id}
                href={`/${d.id}`}
                className="group block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/[.03] dark:hover:bg-white/[.04] transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-medium">{d.title ?? d.id}</h3>
                  <span className="text-xs opacity-60 group-hover:opacity-80">/{d.id}</span>
                </div>
                {d.description && (
                  <p className="text-sm opacity-80 line-clamp-2">{d.description}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
