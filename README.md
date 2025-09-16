# Present – Visor de Presentaciones para Windsurf IDE

Present es un visor mínimo de presentaciones donde Windsurf AI (Cascade) solo necesita crear un único archivo `presentation.tsx` por cada presentación. Este repositorio provee el layout, la navegación, el tema oscuro/claro y las transiciones para que las nuevas presentaciones “simplemente funcionen”.

## ¿Qué debe hacer Windsurf AI?

Crear un archivo por presentación en:

`app/(viewer)/<id>/presentation.tsx`

Exporta cualquiera de estas dos opciones:

- `slides: ReactNode[]` y opcionalmente `meta`
- o un componente React por defecto (se usa cuando no hay `slides`)

Ejemplo (`app/(viewer)/demo/presentation.tsx`):

```tsx
'use client'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'Presentación Demo',
  description: 'Reemplaza con tu contenido',
  author: 'Windsurf AI',
}

export const slides: Slide[] = [
  <section key="1" className="h-full grid place-items-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">Hola</h1>
      <p className="opacity-80">Esta es tu primera diapositiva</p>
    </div>
  </section>,
  <section key="2" className="h-full grid place-items-center">
    <p>Segunda diapositiva…</p>
  </section>,
]
```

Luego visita: `http://localhost:3000/demo`

## ¿Cómo funciona el enrutamiento?

- El grupo de rutas sin ruta propia `app/(viewer)/[id]/` mapea `presentation.tsx` a `/<id>`.
- La página carga la presentación mediante un pequeño registro (`components/viewer/registry.ts`) para asegurar que el bundler la incluya.

Para añadir una nueva presentación, puedes:

1) Crear el archivo en `app/(viewer)/<id>/presentation.tsx` y agregar una entrada en `components/viewer/registry.ts`:

```ts
export const registry = {
  '<id>': async () =>
    import('@/app/(viewer)/<id>/presentation').then((m) => ({
      default: (m as any).default,
      slides: (m as any).slides,
      meta: (m as any).meta,
    })),
  // ...entradas existentes
}
```

2) O puedo cambiar a un enfoque con codegen o un glob de imports para no editar el registro manualmente.

## Atajos de teclado y controles

- Flechas Izquierda/Derecha o H/L: anterior/siguiente diapositiva
- F: alternar pantalla completa
- Botones visibles: Prev / Next
- Las transiciones entre diapositivas usan Framer Motion

## Temas (claro/oscuro)

- Implementado con `next-themes` siguiendo la guía de shadcn
- Proveedor global en `app/layout.tsx`: `ThemeProvider` con `attribute="class"`
- Las variables CSS en `app/globals.css` controlan colores de fondo y texto
- Toggle disponible en:
  - Home: `app/page.tsx`
  - Encabezado del visor: `app/(viewer)/[id]/layout.tsx`

Docs: https://ui.shadcn.com/docs/dark-mode/next

## Pantalla completa

- `components/viewer/SlideViewer.tsx` incluye un botón arriba a la derecha y el atajo `F`
- Usa la API nativa de Fullscreen y mantiene el estado con `fullscreenchange`

## Estructura del proyecto

```
app/
  (viewer)/[id]/
    layout.tsx             # Marco del visor (header, toggle, tips)
    page.tsx               # Renderiza ClientRuntime
    presentation.tsx       # Tu presentación (creada por la IA)
  layout.tsx               # Layout raíz + ThemeProvider
  page.tsx                 # Landing + ThemeToggle

components/
  viewer/
    SlideViewer.tsx        # Visor principal con transiciones, controles y fullscreen
    PresentationInfo.tsx   # Título/descripcion/autor/fecha opcional
    EmptyState.tsx         # Mensaje útil cuando falta la presentación
    useKeyNavigation.ts    # Hook de navegación por teclado
    registry.ts            # Asegura el bundle de presentaciones conocidas
    types.ts               # Tipos de Slide y meta
  ui/
    theme-provider.tsx     # Proveedor de next-themes
    theme-toggle.tsx       # Toggle Claro/Oscuro

app/globals.css            # Variables CSS y estilos de modo oscuro
```

## Desarrollo

Requisitos: Node.js 18+

Instalar dependencias:

```bash
npm install
# o
bun install
```

Ejecutar en desarrollo:

```bash
npm run dev
# o
bun dev
```

Abrir http://localhost:3000

## Notas

- TypeScript estricto (`tsconfig.json`) y Tailwind por utilidades
- Las presentaciones son componentes React estándar; mantenlas pequeñas y componibles
- Accesibilidad (atributos aria, foco) y navegación por teclado incluidas por defecto

