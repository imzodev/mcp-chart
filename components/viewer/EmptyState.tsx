import Link from "next/link";
import React from "react";

export function EmptyState({ id }: { id: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <h2 className="text-2xl font-semibold mb-2">No presentation found</h2>
      <p className="opacity-80">
        Create a <code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">app/(viewer)/{id}/presentation.tsx</code> file to display
        your presentation.
      </p>
      <div className="text-left mt-8 p-4 rounded-lg border border-black/10 dark:border-white/10 bg-black/[.02] dark:bg-white/[.03]">
        <p className="text-sm font-semibold mb-2">Quick start</p>
        <pre className="text-xs overflow-auto">
{`// app/(viewer)/${id}/presentation.tsx
'use client'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'Demo Presentation',
  description: 'Replace with your content',
  author: 'Windsurf AI',
}

const slides: Slide[] = [
  <section key="1" className="h-full grid place-items-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">Hello</h1>
      <p className="opacity-80">This is your first slide</p>
    </div>
  </section>,
  <section key="2" className="h-full grid place-items-center">
    <p>Second slide content...</p>
  </section>
]

export { slides }
`}
        </pre>
        <p className="text-xs opacity-70 mt-2">
          The viewer provides navigation (← →), progress, and animations automatically.
        </p>
      </div>
      <div className="mt-6">
        <Link href="/" className="text-sm underline opacity-80 hover:opacity-100">Back to home</Link>
      </div>
    </div>
  );
}
