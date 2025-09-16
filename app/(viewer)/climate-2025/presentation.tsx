'use client'

import { motion } from 'framer-motion'
import type { Slide, PresentationMeta } from '@/components/viewer/types'

export const meta: PresentationMeta = {
  title: 'Climate Change Outlook 2025',
  description: 'Key signals, risks, and actions shaping the climate agenda in 2025',
  author: 'Windsurf AI',
  date: '2025'
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
        Climate Change Outlook 2025
      </motion.h1>
      <motion.p
        className="opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        Signals, Risks, and Actions for the Year Ahead
      </motion.p>
    </div>
  </section>
)

const StateOfClimate = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">State of the Climate (2025)</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Global mean temperature remains ~1.2–1.4°C above pre-industrial baseline</li>
        <li>Record-breaking heat waves across multiple continents in 2024–2025 winter/summer transition</li>
        <li>Ocean heat content and marine heatwaves at unprecedented levels, stressing coral and fisheries</li>
        <li>Arctic amplification continues; low sea ice extent impacts weather patterns in mid-latitudes</li>
      </ul>
    </div>
  </section>
)

const Emissions = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Emissions & Energy</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <h3 className="font-semibold mb-2">Global Emissions</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90 text-sm">
            <li>CO₂ emissions plateauing in some regions; modest decline in EU</li>
            <li>Continued growth in aviation and shipping emissions post-pandemic</li>
            <li>Methane reductions uneven; oil & gas leak mitigation scaling but patchy</li>
          </ul>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <h3 className="font-semibold mb-2">Energy Transition</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90 text-sm">
            <li>Record additions of solar and wind; grid integration and storage are key bottlenecks</li>
            <li>EV adoption surges in China/EU; charging and supply chain resilience in focus</li>
            <li>Hydrogen pilots expand; cost parity still sector-specific</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const Risks2025 = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Key Risks in 2025</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Compounded extreme weather driving food and water insecurity</li>
        <li>Escalating insurance losses and protection gap in climate-vulnerable regions</li>
        <li>Climate migration pressures intersecting with urban housing deficits</li>
        <li>Critical infrastructure disruptions: grids, ports, data centers, and transport</li>
      </ul>
    </div>
  </section>
)

const Opportunities = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Opportunities & Solutions</h2>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <h3 className="font-semibold mb-2">Mitigation</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Deep electrification + clean power</li>
            <li>Efficiency: buildings, industry, transport</li>
            <li>Nature-based carbon removals at quality</li>
          </ul>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <h3 className="font-semibold mb-2">Adaptation</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Heat-resilient cities and cooling access</li>
            <li>Water management & drought resilience</li>
            <li>Climate-smart agriculture & insurance</li>
          </ul>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <h3 className="font-semibold mb-2">Enablers</h3>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            <li>Policy certainty and carbon pricing</li>
            <li>Green finance and transition plans</li>
            <li>Data transparency and MRV systems</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

const Timeline = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">2025 Milestones to Watch</h2>
      <ol className="list-decimal pl-6 space-y-2 opacity-90">
        <li>National climate target updates and sectoral policies (power, transport, industry)</li>
        <li>Grid-scale storage deployments and permitting reforms</li>
        <li>Methane regulations rollout and compliance tracking</li>
        <li>Insurance market responses and adaptation funding mechanisms</li>
        <li>Corporate transition plan disclosures under evolving standards</li>
      </ol>
    </div>
  </section>
)

const Actions = () => (
  <section className="h-full grid place-items-center p-6">
    <div className="max-w-3xl w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">What to Do in 2025</h2>
      <ul className="list-disc pl-6 space-y-2 opacity-90">
        <li>Accelerate no-regret measures: efficiency, heat-pumps, building retrofits</li>
        <li>Invest in resilience: flood defenses, cooling access, early warning systems</li>
        <li>De-risk clean energy pipelines: PPAs, storage hybrids, flexible demand</li>
        <li>Engage supply chains: low-carbon materials, logistics, and transparency</li>
        <li>Upskill workforce for transition roles; support just transition pathways</li>
      </ul>
    </div>
  </section>
)

const Closing = () => (
  <section className="h-full grid place-items-center">
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-2">The 2025 Imperative</h2>
      <p className="opacity-80 max-w-xl mx-auto">
        2025 is a pivotal execution year. Bridging ambition and delivery requires
        faster permitting, resilient infrastructure, credible finance, and inclusive policies.
      </p>
      <div className="mt-6 text-sm opacity-70">Use ← → to navigate</div>
    </div>
  </section>
)

export const slides: Slide[] = [
  <Title key="s1" />, 
  <StateOfClimate key="s2" />, 
  <Emissions key="s3" />, 
  <Risks2025 key="s4" />, 
  <Opportunities key="s5" />, 
  <Timeline key="s6" />, 
  <Actions key="s7" />, 
  <Closing key="s8" />
]

export {} // ensure this is a module
