'use client'

import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'Riesgos de Seguridad en la Nube 2025',
  description:
    'Panorama de amenazas, vectores comunes, buenas prácticas y próximos pasos para reducir riesgo en nubes públicas y privadas',
  author: 'Windsurf AI',
  date: '2025-09-16'
}

const Title = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Título de la presentación">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Riesgos de Seguridad en la Nube</h2>
      <p className="text-2xl opacity-80">Panorama 2025 · amenazas, controles y recomendaciones</p>
    </div>
  </section>
)

const ExecutiveSummary = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Resumen ejecutivo">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Resumen ejecutivo</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>La nube reduce costos y acelera el delivery, pero amplía la superficie de ataque.</li>
        <li>Los incidentes más frecuentes provienen de errores de configuración e identidades débiles.</li>
        <li>La responsabilidad es compartida: proveedor (seguridad de la nube) y cliente (seguridad en la nube).</li>
        <li>Controles clave: identidad fuerte, segmentación, cifrado, observabilidad y automatización.</li>
      </ul>
    </div>
  </section>
)

const ThreatLandscape = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Panorama de amenazas">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Panorama de amenazas 2025</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>Exposición de datos por buckets/volúmenes públicos o ACL mal definidas.</li>
        <li>Compromiso de credenciales/API keys; abuso de tokens y roles sobre-permisivos.</li>
        <li>Errores de configuración en control plane, redes y seguridad perimetral.</li>
        <li>Dependencias y cadena de suministro (contenedores, imágenes, IaC, librerías).</li>
        <li>APIs inseguras y falta de rate limiting/validación.</li>
      </ul>
    </div>
  </section>
)

const IdentityAccess = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Identidad y Acceso">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Identidad y acceso (IAM)</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>Principio de menor privilegio, roles a medida, revisiones periódicas y <span className="font-semibold">JIT</span> access.</li>
        <li>Autenticación fuerte: MFA/FIDO2, rotación automática de credenciales y secret managers.</li>
        <li>Segmentación por cuentas/proyectos (multi‑account) y límites de blast radius.</li>
      </ul>
    </div>
  </section>
)

const DataProtection = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Protección de datos">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Protección de datos</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>Cifrado en tránsito (TLS 1.2+) y en reposo con KMS/HSM; control de llaves y rotación.</li>
        <li>Clasificación de datos y políticas de acceso basadas en sensibilidad.</li>
        <li>Backups inmutables, versiones y pruebas regulares de restauración (DR/BCP).</li>
      </ul>
    </div>
  </section>
)

const NetworkSecurity = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Segmentación y red">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Segmentación y red</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>Zero Trust: verificación continua de identidad, contexto y postura del dispositivo.</li>
        <li>Micro‑segmentación: VPCs/VNets, subredes, SG/NSG, políticas de egress y eWAF.</li>
        <li>Privado por defecto: endpoints privados, servicios gestionados sin exposición pública.</li>
      </ul>
    </div>
  </section>
)

const Observability = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Observabilidad y respuesta">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Observabilidad y respuesta</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>Logs inmutables, trazas y métricas centralizadas con retención adecuada.</li>
        <li>Detecciones gestionadas (CSPM, CWPP, CIEM, DSPM) y alertas accionables.</li>
        <li>Runbooks y automatización (SOAR/Lambda/Functions) para contención y remediación.</li>
      </ul>
    </div>
  </section>
)

const Compliance = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Cumplimiento y responsabilidades">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Cumplimiento y responsabilidad compartida</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-2xl">
        <li>Modelo de responsabilidad compartida: proveedor asegura la infraestructura; el cliente, su configuración y datos.</li>
        <li>Controles mapeados a marcos: NIST SP 800‑53/CSF, ISO 27001, SOC 2, PCI DSS.</li>
        <li>Gobernanza de IaC: validación, escaneo y políticas preventivas (OPA/Conftest/Policy as Code).</li>
      </ul>
    </div>
  </section>
)

const Sources = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Fuentes y referencias">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Fuentes</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90 text-xl">
        <li>
          CSA — Cloud Security Alliance: <a className="underline" href="https://cloudsecurityalliance.org/" target="_blank" rel="noreferrer">Top Threats & Guidance</a>
        </li>
        <li>
          Verizon — DBIR 2024: <a className="underline" href="https://www.verizon.com/business/resources/T9d/dbir/2024/summary-of-findings/" target="_blank" rel="noreferrer">Summary</a>
        </li>
        <li>
          ENISA — Cloud Security: <a className="underline" href="https://www.enisa.europa.eu/topics/cloud-and-big-data" target="_blank" rel="noreferrer">Reports</a>
        </li>
        <li>
          NIST — SP 800‑207 Zero Trust: <a className="underline" href="https://csrc.nist.gov/publications/detail/sp/800-207/final" target="_blank" rel="noreferrer">Publication</a>
        </li>
        <li>
          OWASP — API Security Top 10 (2023): <a className="underline" href="https://owasp.org/API-Security/" target="_blank" rel="noreferrer">Project</a>
        </li>
      </ul>
    </div>
  </section>
)

const NextSteps = () => (
  <section className="h-full grid place-items-center p-6" aria-label="Próximos pasos">
    <div className="max-w-7xl w-full">
      <h2 className="text-2xl lg:text-5xl font-semibold mb-4">Conclusiones y próximos pasos</h2>
      <ol className="list-decimal pl-6 space-y-2 opacity-90 text-2xl">
        <li>Inventario de activos y datos críticos; definir zonas de confianza y segmentación.</li>
        <li>Endurecer IAM: MFA, rotación de secretos, revisión de permisos y adopción JIT.</li>
        <li>Automatizar guardrails: IaC escaneado, políticas preventivas y detección gestionada.</li>
        <li>Plan de respuesta y ejercicios de tabletop; métricas de MTTD/MTTR y riesgo residual.</li>
      </ol>
    </div>
  </section>
)

export const slides: Slide[] = [
  <Title key="s1" />,
  <ExecutiveSummary key="s2" />,
  <ThreatLandscape key="s3" />,
  <IdentityAccess key="s4" />,
  <DataProtection key="s5" />,
  <NetworkSecurity key="s6" />,
  <Observability key="s7" />,
  <Compliance key="s8" />,
  <Sources key="s9" />,
  <NextSteps key="s10" />
]

export {} // ensure this is a module
