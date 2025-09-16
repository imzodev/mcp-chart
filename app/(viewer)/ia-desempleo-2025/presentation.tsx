'use client'

import { motion } from 'framer-motion'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'Desempleo y Desplazamiento por IA (2023–2025)',
  description: 'Panorama de exposición laboral, riesgos de desplazamiento y respuestas de política ante la adopción de IA',
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
        Desempleo y Desplazamiento por IA (2023–2025)
      </motion.h2>
      <motion.p
        className="text-2xl opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        Evidencia reciente y rutas de mitigación
      </motion.p>
    </div>
  </section>
)

const ExecutiveSummary = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Resumen ejecutivo</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>IMF (2024): ~40% del empleo global está expuesto a IA; ~60% en economías avanzadas, ~40% en emergentes y ~26% en bajos ingresos.</li>
        <li>WEF (2025): ~40% de empleadores prevén reducir plantilla donde la IA automatiza tareas, pero también se crean nuevos roles y se reubican funciones.</li>
        <li>OECD (2024): la disrupción alcanza ocupaciones cognitivas no rutinarias ("white‑collar"); el efecto neto depende de complementos, regulación y adopción.</li>
        <li>OIT/ILO (2023–2024): el impacto neto en desempleo depende de transiciones, calidad del trabajo y políticas de habilidades; el upskilling es crítico.</li>
      </ul>
    </div>
  </section>
)

const ExposureChart = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Exposición del empleo a la IA por nivel de ingresos</h2>
      <p className="opacity-70 mb-4 text-2xl">IMF (2024): mayor exposición en economías avanzadas; implicaciones distributivas y de desigualdad.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/fnaES487jRQAAAAASBAAAAgAoEACAQFr/original"
          alt="Exposición del empleo a la IA por nivel de ingresos (IMF, 2024)"
          className="w-full h-auto"
        />
      </div>
      <div className="text-sm opacity-60 mt-2">Fuente: IMF Blog (2024) y nota técnica asociada.</div>
    </div>
  </section>
)

const EmployersPie = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Expectativas de ajuste de plantilla</h2>
      <p className="opacity-70 mb-4 text-2xl">WEF Future of Jobs 2025: parte de empleadores anticipa reducción donde la IA automatiza; otros reubican o amplían funciones.</p>
      <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden bg-white">
        <img
          src="https://mdn.alipayobjects.com/one_clip/afts/img/QaOZRqcJrrQAAAAAR2AAAAgAoEACAQFr/original"
          alt="Porcentaje de empleadores que esperan reducir plantilla donde la IA automatiza (WEF 2025)"
          className="w-full h-auto"
        />
      </div>
      <div className="text-sm opacity-60 mt-2">Fuente: World Economic Forum — Future of Jobs 2025 (digest/resumen).</div>
    </div>
  </section>
)

const OccupationsAtRisk = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Ocupaciones y tareas más expuestas</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>OECD (2024): IA afecta tareas no rutinarias cognitivas; riesgo en analistas, roles administrativos, banca/seguros y soporte profesional.</li>
        <li>Exposición no implica reemplazo total: tareas complementadas pueden elevar productividad y salarios si hay adopción complementaria.</li>
        <li>Riesgo diferencial: mujeres y jóvenes pueden enfrentar mayores fricciones en transiciones si la capacitación no es accesible.</li>
      </ul>
    </div>
  </section>
)

const UnemploymentDynamics = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Dinámicas de desempleo y transición</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Impacto a corto plazo: shocks de productividad pueden generar despidos en ocupaciones específicas; efecto neto depende del dinamismo sectorial.</li>
        <li>Mediano plazo: creación de nuevas ocupaciones (ingeniería de prompts, MLOps, integraciones, supervisión humana) y recomposición de tareas.</li>
        <li>Cuellos de botella: desajuste de habilidades, movilidad geográfica limitada, rezagos en formación y certificación.</li>
      </ul>
    </div>
  </section>
)

const PolicyResponses = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Respuestas de política y empresa</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>Habilidades: programas de upskilling/reskilling basados en competencias (OIT/OECD); micro‑credenciales y aprendizaje modular.</li>
        <li>Mercado laboral: apoyo a transiciones (orientación, matching, seguros, protección social) y movilidad sectorial.</li>
        <li>Gobernanza de IA: evaluación de impacto en empleo, transparencia de usos, seguridad, y participación social.</li>
      </ul>
    </div>
  </section>
)

const Sources = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Fuentes</h2>
      <ul className="list-disc pl-6 space-y-3 opacity-90 text-2xl">
        <li>IMF (2024): <a className="underline" href="https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity" target="_blank" rel="noreferrer">AI will transform the global economy</a></li>
        <li>WEF (2025): <a className="underline" href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/" target="_blank" rel="noreferrer">Future of Jobs 2025 (Digest)</a></li>
        <li>OECD (2024): <a className="underline" href="https://www.oecd.org/en/publications/who-will-be-the-workers-most-affected-by-ai_14dc6f89-en.html" target="_blank" rel="noreferrer">Who will be the workers most affected by AI?</a></li>
        <li>ILO/OIT (2023): <a className="underline" href="https://www.ilo.org/artificial-intelligence" target="_blank" rel="noreferrer">Generative AI and Jobs: global analysis</a></li>
      </ul>
    </div>
  </section>
)

const NextSteps = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Conclusiones y próximos pasos</h2>
      <ol className="list-decimal pl-6 space-y-3 opacity-90 text-2xl">
        <li>Mapear tareas por rol y priorizar automatización complementaria antes que sustitución.</li>
        <li>Diseñar un plan de upskilling de 90 días con métricas de adopción y productividad.</li>
        <li>Establecer guardrails y evaluaciones de impacto en empleo y equidad.</li>
      </ol>
    </div>
  </section>
)

export const slides: Slide[] = [
  <Title key="s1" />, 
  <ExecutiveSummary key="s2" />, 
  <ExposureChart key="s3" />, 
  <EmployersPie key="s4" />, 
  <OccupationsAtRisk key="s5" />, 
  <UnemploymentDynamics key="s6" />, 
  <PolicyResponses key="s7" />, 
  <Sources key="s8" />, 
  <NextSteps key="s9" />
]

export {} // ensure this is a module
