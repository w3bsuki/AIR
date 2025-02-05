'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { DIcons } from "dicons"
import { routes } from "@/lib/routes"
import type { ElementType } from 'react'

interface ServiceProps {
  title: string
  description: string
  icon: ElementType
  gradient: string
  features: string[]
}

interface FeaturedServicesProps {
  services: ServiceProps[]
}

// At the top, let's see what icons are actually available
console.log('Available DIcons:', Object.keys(DIcons))

const services: ServiceProps[] = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs.",
    icon: DIcons.Brain,
    gradient: "from-cyan-400/20 via-cyan-400/0 to-cyan-400/0",
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"]
  },
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics services.",
    icon: DIcons.ChartBar,
    gradient: "from-purple-400/20 via-purple-400/0 to-purple-400/0",
    features: ["Real-time Analytics", "Custom Dashboards", "Predictive Models"]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions to protect your AI infrastructure and data.",
    icon: DIcons.Shield,
    gradient: "from-emerald-400/20 via-emerald-400/0 to-emerald-400/0",
    features: ["Encryption", "Access Control", "Security Audits"]
  }
]

export function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <section className="container py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">AI Solutions</h2>
        <p className="mt-4 text-muted-foreground">
          Discover how our AI solutions can transform your business
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[400px] flex-col rounded-lg p-6">
                <div className="flex items-center justify-center rounded-lg bg-secondary p-2">
                  <Icon className="w-12 h-12 text-foreground" />
                </div>
                <div className="mt-4 flex-1">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
} 