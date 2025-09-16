'use client'

import { motion } from 'framer-motion'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: '¿A quién perjudica más la IA? (2025)',
  description: 'Evidencia reciente sobre impacto por seniority, ocupación y reconfiguración organizacional; implicaciones para skills y políticas',
  author: 'Windsurf AI',
  date: '2025-09-16'
}

const Title = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full text-center">
      <motion.h2
        className="text-2xl lg:text-5xl font-semibold mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        ¿A quién perjudica más la IA?
      </motion.h2>
      <motion.p
        className="text-2xl opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        Evidencia 2023–2025 y escenarios organizacionales
      </motion.p>
    </div>
  </section>
)

const ExecutiveSummary = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Resumen ejecutivo</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Empresas líderes anticipan reducción de plantilla donde IA automatiza tareas; recortes recientes en big tech incluyen mandos intermedios.</li>
        <li>Juniors pueden ser reemplazados en tareas básicas, pero también potenciados por IA para cubrir tareas de nivel medio.</li>
        <li>Seniors experimentados orientados a rutinas o reacios a adoptar IA enfrentan riesgo por deskilling y optimización de costos.</li>
        <li>Reconfiguración: menos puestos mid-level, más juniors + IA con supervisión de pocos seniors, y menor peso de tareas administrativas.</li>
      </ul>
    </div>
  </section>
)

const EvidenceBySeniority = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Evidencia por seniority y sector</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>ADP: en IT, empleo de <span className="font-semibold">juniors (&lt;2 años)</span> alcanzó pico en 2023 y cayó ~20–25% desde entonces; atención al cliente muestra patrón similar.</li>
        <li>Estudios de productividad: asistentes de codificación elevan más a desarrolladores novatos que a seniors; los mid-level amplifican valor de equipo.</li>
        <li>Casos cualitativos: despidos en Microsoft/Google/Meta/Amazon desde 2022 incluyen desarrolladores y mandos intermedios.</li>
      </ul>
    </div>
  </section>
)

const ColumnChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Variación de empleo (ilustrativo según artículo)</h2>
      <p className="text-2xl opacity-70 mb-4">Cambios aproximados desde 2023 en categorías más mencionadas.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/Gvr-R4hiSSgAAAAAR4AAAAgAoEACAQFr/original"
          alt="Variación de empleo por antigüedad y sector"
          className="w-full h-auto"
        />
      </div>
      <div className="text-sm opacity-60 mt-2">Nota: valores ilustrativos basados en el relato del artículo (ADP, tendencias IT y atención al cliente).</div>
    </div>
  </section>
)

const Fishbone = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Factores del impacto diferencial</h2>
      <p className="text-2xl opacity-70 mb-4">Causas y grupos potencialmente más afectados por IA según el artículo.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/rxKUTLksgQYAAAAASpAAAAgAoEACAQFr/original"
          alt="Diagrama de espina de pez: factores del impacto diferencial"
          className="w-full h-auto"
        />
      </div>
      <div className="text-sm opacity-60 mt-2">Basado en discusión de expertos y casos: juniors, seniors, mid-level, administrativos.</div>
    </div>
  </section>
)

const FlowOrg = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Reconfiguración organizacional con IA</h2>
      <p className="text-2xl opacity-70 mb-4">Estructura emergente: juniors + IA ejecutan tareas de nivel medio, supervisión senior, menos mandos intermedios.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/UmM8RJGwdpEAAAAASHAAAAgAoEACAQFr/original"
          alt="Diagrama de flujo: reconfiguración organizacional con IA"
          className="w-full h-auto"
        />
      </div>
      <div className="text-sm opacity-60 mt-2">Ilustración de flujos de tareas y efectos en headcount.</div>
    </div>
  </section>
)

const Implications = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Implicaciones para personas y empresas</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Juniors: desarrollar competencias transversales (QA, revisión de código, comunicación) y uso experto de herramientas IA.</li>
        <li>Seniors: migrar de ejecución rutinaria a tutoría, evaluación, diseño de sistemas y gobernanza de IA.</li>
        <li>Empresas: rediseño de roles y escalas, con foco en métricas de valor (calidad, time‑to‑market) y guardrails.</li>
      </ul>
    </div>
  </section>
)

const Sources = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Fuentes</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Artículo base (NYT, 13 julio 2025): síntesis de declaraciones de Andy Jassy (Amazon), Brad Lightcap (OpenAI), expertos ADP/Stanford/MIT.</li>
        <li>Estudios referidos: productividad diferencial por seniority (asistentes de codificación), tendencias de empleo en IT y atención al cliente (ADP).</li>
      </ul>
    </div>
  </section>
)

const NextSteps = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Conclusiones y próximos pasos</h2>
      <ol className="list-decimal pl-6 space-y-3 opacity-90 text-2xl">
        <li>Auditar tareas por rol para identificar automatización complementaria vs. sustitución.</li>
        <li>Plan de upskilling: juniors (QA + IA), seniors (mentoría + diseño), estándares de revisión.</li>
        <li>Medir resultados: calidad, tiempos de entrega, coste por función; gobernanza y seguridad.</li>
      </ol>
    </div>
  </section>
)

export const slides: Slide[] = [
  <Title key="s1" />, 
  <ExecutiveSummary key="s2" />, 
  <EvidenceBySeniority key="s3" />, 
  <ColumnChart key="s4" />, 
  <Fishbone key="s5" />, 
  <FlowOrg key="s6" />, 
  <Implications key="s7" />, 
  <Sources key="s8" />, 
  <NextSteps key="s9" />
]

export {} // ensure this is a module
