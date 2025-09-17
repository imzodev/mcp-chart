'use client'

import { motion } from 'framer-motion'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'IA en Marketing 2019–2025',
  description: 'Evolución de la adopción, casos de uso y efecto en resultados (conversiones y productividad) con datos y fuentes recientes',
  author: 'Windsurf AI',
  date: '2025-09-16'
}

const Title = () => (
  <section className="h-full grid place-items-center">
    <div className="text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        IA en Marketing 2019–2025
      </motion.h1>
      <motion.p
        className="opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        Adopción, Casos de Uso e Impacto en Resultados
      </motion.p>
    </div>
  </section>
)

const ExecutiveSummary = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Resumen ejecutivo</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>La adopción de IA en equipos de marketing creció aceleradamente desde 2019, volviéndose mainstream en 2024–2025.</li>
        <li>Casos de uso líderes: generación/optimización de contenido, personalización/segmentación, email, ads, chatbots.</li>
        <li>Impacto medido: incrementos de conversión y productividad de dos dígitos impulsados por GenAI.</li>
        <li>Retos: gobernanza, calidad de datos, consistencia de marca, privacidad y bias.</li>
      </ul>
    </div>
  </section>
)

const GenAIWhatChanged = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">¿Qué cambió con la GenAI (2023–2025)?</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Contenido a escala: ideación, borradores, variantes y optimizaciones en minutos.</li>
        <li>Personalización granular: segmentación dinámica y experiencias one-to-few/one-to-one.</li>
        <li>Automatización de flujos: campañas multicanal orquestadas por agentes.</li>
        <li>Accesibilidad de IA: herramientas en suites de marketing y copilotos integrados.</li>
      </ul>
    </div>
  </section>
)

const AdoptionChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Adopción de IA en marketing (2019–2025)</h2>
      <p className="text-2xl opacity-80 mb-4">Visualización ilustrativa basada en rangos reportados por fuentes públicas (AllAboutAI 2025; SEO.com 2025). Gráfico de área.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/wSy2RqBqp94AAAAAR-AAAAgAoEACAQFr/original"
          alt="Gráfico de área: adopción de IA en marketing 2019–2025"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">
        Fuente: AllAboutAI (2025) · SEO.com (2025)
      </div>
    </div>
  </section>
)

const UseCasesChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Casos de uso principales (2025)</h2>
      <p className="text-2xl opacity-80 mb-4">Generación de contenido, personalización, email, ads, chatbots y scoring predictivo lideran. Gráfico de columnas.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/mu8iRKpU3E0AAAAAR5AAAAgAoEACAQFr/original"
          alt="Gráfico de columnas: casos de uso de IA en marketing 2025"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">
        Fuente: AllAboutAI (2025) · SEO.com (2025)
      </div>
    </div>
  </section>
)

const ContentOptimization = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Generación y optimización de contenido</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Ideación, outlines, drafts y variantes A/B para blogs, landing pages y anuncios.</li>
        <li>Optimización SEO: títulos, metadescripciones, entidades y estructura.</li>
        <li>Guardrails de marca: tono, terminología y compliance en prompts/plantillas.</li>
      </ul>
    </div>
  </section>
)

const Personalization = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Personalización y segmentación</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Segmentación dinámica con señales first‑party y comportamiento en tiempo real.</li>
        <li>Contenido on‑site y en email adaptado por audiencia, etapa y intención.</li>
        <li>Orquestación multicanal con triggers y objetivos (CTR, CVR, LTV).</li>
      </ul>
    </div>
  </section>
)

const AdsAutomation = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ads y pujas automatizadas</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Targeting y pujas asistidos por IA; budgets y creatividades adaptativos.</li>
        <li>Optimización continua: ROAS, CPA, frecuencia y saturación creativa.</li>
        <li>Incrementalidad y tests: geo‑split, holdouts, MMM + lift.</li>
      </ul>
    </div>
  </section>
)

const Chatbots = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Atención con chatbots y agentes</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Desvío de tickets de bajo/medio nivel; reducción de AHT y tiempo de primera respuesta.</li>
        <li>Integraciones con base de conocimiento, pedidos y CRM para resolución end‑to‑end.</li>
        <li>Medición: CSAT, NPS, FCR, contención y transferencias.</li>
      </ul>
    </div>
  </section>
)

const ImpactChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-2">Impacto en resultados (2023–2025)</h2>
      <p className="text-2xl opacity-80 mb-4">Mejoras en conversiones y productividad reportadas en adopciones recientes de IA. Gráfico de columnas agrupadas.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/A44xSqXaFN8AAAAARhAAAAgAoEACAQFr/original"
          alt="Gráfico de columnas agrupadas: conversiones vs productividad 2023–2025"
          className="w-full h-auto bg-white"
        />
      </div>
      <div className="text-2xl opacity-60 mt-2">Fuente: AllAboutAI (2025); tendencias corroboradas por Salesforce State of Marketing (resumen público).</div>
    </div>
  </section>
)

const RisksGovernance = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Riesgos y gobernanza</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Privacidad y cumplimiento: consentimiento, retención y transferencia de datos.</li>
        <li>Sesgos y seguridad de marca: revisión humana, datasets y evaluaciones.</li>
        <li>Protección de IP y contenidos: deduplicación, detección y atribución.</li>
      </ul>
    </div>
  </section>
)

const Sources = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Fuentes</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-sm">
        <li>
          AllAboutAI (2025): <a className="underline" href="https://www.allaboutai.com/resources/ai-statistics/marketing/" target="_blank" rel="noreferrer">AI Marketing Statistics for 2025</a>
        </li>
        <li>
          SEO.com (2025): <a className="underline" href="https://www.seo.com/ai/marketing-statistics/" target="_blank" rel="noreferrer">50+ AI Marketing Statistics</a>
        </li>
        <li>
          Salesforce — State of Marketing (9th Ed., resumen): <a className="underline" href="https://www.salesforce.com/resources/reports/state-of-marketing/" target="_blank" rel="noreferrer">Report Hub</a>
        </li>
      </ul>
    </div>
  </section>
)

const NextSteps = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Conclusiones y próximos pasos</h2>
      <ol className="list-decimal pl-6 space-y-2 opacity-90">
        <li>Definir casos de uso prioritarios por impacto y viabilidad (90 días).</li>
        <li>Preparar datos y guardrails: taxonomía, prompts, revisiones y métricas.</li>
        <li>Pilotos medibles por canal con diseño experimental y dashboards.</li>
      </ol>
    </div>
  </section>
)

export const slides: Slide[] = [
  <Title key="s1" />, 
  <ExecutiveSummary key="s2" />, 
  <GenAIWhatChanged key="s3" />, 
  <AdoptionChart key="s4" />, 
  <UseCasesChart key="s5" />, 
  <ContentOptimization key="s6" />, 
  <Personalization key="s7" />, 
  <AdsAutomation key="s8" />, 
  <Chatbots key="s9" />, 
  <ImpactChart key="s10" />, 
  <RisksGovernance key="s11" />, 
  <Sources key="s12" />, 
  <NextSteps key="s13" />
]

export {} // ensure this is a module
