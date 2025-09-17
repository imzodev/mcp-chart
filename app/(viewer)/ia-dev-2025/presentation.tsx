'use client'

import { motion } from 'framer-motion'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'IA en Desarrollo de Software: Ventajas y Desventajas',
  description:
    'Análisis 2023–2025 de impacto en productividad, calidad, riesgos y adopción; con fuentes y visualizaciones',
  author: 'Windsurf AI',
  date: '2025-09-17'
}

const Title = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full text-center">
      <motion.h1
        className="text-4xl lg:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        IA en Desarrollo de Software
      </motion.h1>
      <motion.p
        className="text-2xl opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        Ventajas, desventajas y buenas prácticas (2023–2025)
      </motion.p>
    </div>
  </section>
)

const ExecutiveSummary = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Resumen ejecutivo</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Los asistentes de código aceleran tareas sustancialmente (estudios RCT reportan hasta ~56% más rápido) con mejoras percibidas en flujo y satisfacción.</li>
        <li>La adopción es amplia y creciente; la mayoría de devs usa o planea usar IA en su flujo de trabajo en 2024–2025.</li>
        <li>Riesgos relevantes: alucinaciones, seguridad/licencias, deuda técnica y calidad inconsistente sin revisiones humanas.</li>
        <li>Buenas prácticas: revisión por pares, tests, escaneo SAST/OSS, prompts con contexto y políticas de uso.</li>
      </ul>
    </div>
  </section>
)

const ProductivityChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Impacto en tiempo de tarea</h2>
      <p className="text-2xl opacity-80 mb-4">Ensayo controlado de GitHub sobre Copilot reportó hasta 56% menos tiempo en tareas específicas (referencia pública).</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/_DQuTK_iu-IAAAAARXAAAAgAoEACAQFr/original"
          alt="Comparativa de tiempo: sin IA vs con IA"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">Fuente: GitHub Research (2022–2024); McKinsey (síntesis pública).</div>
    </div>
  </section>
)

const AdoptionChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Adopción de herramientas de IA (2024)</h2>
      <p className="text-2xl opacity-80 mb-4">Resultados agregados de encuestas públicas (Stack Overflow 2024/2025, blogs oficiales). Visualizado como columnas.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/2QCkSId60OMAAAAARqAAAAgAoEACAQFr/original"
          alt="Gráfico de columnas: adopción de herramientas de IA por desarrolladores (2024)"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">Fuente: Stack Overflow Developer Survey 2024 (sección AI) y resumen editorial 2025.</div>
    </div>
  </section>
)

const ProsConsBar = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Pros y contras percibidos</h2>
      <p className="text-2xl opacity-80 mb-4">Comparación cualitativa basada en literatura académica y reportes de la industria (2023–2024). Visualizado como barras agrupadas.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/TJeWQZVOrNAAAAAASPAAAAgAoEACAQFr/original"
          alt="Barras agrupadas: pros y contras percibidos de IA en desarrollo"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">Fuente: síntesis de estudios (ACM/IEEE/Frontiers) y reportes de la industria.</div>
    </div>
  </section>
)

const AdoptionTrendArea = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Tendencia de adopción (2019–2025)</h2>
      <p className="text-2xl opacity-80 mb-4">Serie ilustrativa de adopción de IA por desarrolladores a lo largo del tiempo. Visualizado como área.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/NOw1QobJGAEAAAAAR6AAAAgAoEACAQFr/original"
          alt="Gráfico de área: tendencia de adopción de IA 2019–2025"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">Fuente: síntesis de múltiples reportes públicos; valores ilustrativos.</div>
    </div>
  </section>
)

const Advantages = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Ventajas clave</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Mayor velocidad en tareas repetitivas: scaffolding, tests, boilerplate y documentación.</li>
        <li>Soporte al diseño: generación de alternativas, refactors y explicaciones de código.</li>
        <li>Accesibilidad al conocimiento: consultas contextuales y ejemplos directamente en el IDE.</li>
        <li>Potencial de productividad de equipo: reducción de tiempos de ciclo y de espera.</li>
      </ul>
    </div>
  </section>
)

const Disadvantages = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Desventajas y riesgos</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Alucinaciones y errores sutiles: requieren revisión humana y tests robustos.</li>
        <li>Seguridad/licenciamiento: posible introducción de vulnerabilidades o código no compatible.</li>
        <li>Deuda técnica: soluciones “rápidas” sin contexto arquitectónico ni patrones del equipo.</li>
        <li>Sesgos en datos/modelos: pueden afectar decisiones y recomendaciones técnicas.</li>
      </ul>
    </div>
  </section>
)

const Mitigations = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Buenas prácticas de mitigación</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Revisión por pares y linters/formatters obligatorios; PR checklists con foco en IA.</li>
        <li>Testing en capas (unitario, integración, e2e) y cobertura mínima acordada.</li>
        <li>Seguridad: SAST/DAST, análisis de dependencias (SCA) y políticas de licencias.</li>
        <li>Prompts con contexto del repositorio, guidelines de estilo y ejemplos aprobados.</li>
      </ul>
    </div>
  </section>
)

const Sources = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Fuentes</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>
          GitHub — Quantifying Copilot Impact: <a className="underline" href="https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" target="_blank" rel="noreferrer">Research Blog</a>
        </li>
        <li>
          McKinsey — Generative AI productivity frontier: <a className="underline" href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noreferrer">Insight</a>
        </li>
        <li>
          Stack Overflow Developer Survey 2024/2025 — AI: <a className="underline" href="https://survey.stackoverflow.co/2024/ai" target="_blank" rel="noreferrer">2024 AI section</a> · <a className="underline" href="https://survey.stackoverflow.co/2025/ai/" target="_blank" rel="noreferrer">2025 AI</a>
        </li>
        <li>
          Frontiers (2024) — Systematic review: <a className="underline" href="https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2024.1386720/full" target="_blank" rel="noreferrer">Impact of AI in SE</a>
        </li>
        <li>
          ACM/IEEE — Estudios sobre seguridad y calidad con asistentes: <a className="underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11128619/" target="_blank" rel="noreferrer">Systematic review (PMC)</a>
        </li>
      </ul>
    </div>
  </section>
)

export const slides: Slide[] = [
  <Title key="s1" />, 
  <ExecutiveSummary key="s2" />, 
  <AdoptionTrendArea key="s3" />, 
  <ProductivityChart key="s4" />, 
  <AdoptionChart key="s5" />, 
  <ProsConsBar key="s6" />, 
  <Advantages key="s7" />, 
  <Disadvantages key="s8" />, 
  <Mitigations key="s9" />, 
  <Sources key="s10" />
]

export {} // ensure module
