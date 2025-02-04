'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { DIcons } from "dicons"
import { routes } from "@/lib/routes"

interface Service {
  title: string
  description: string
  icon: keyof typeof DIcons
  link: typeof routes[keyof typeof routes]
}

// At the top, let's see what icons are actually available
console.log('Available DIcons:', Object.keys(DIcons))

const services: Service[] = [
  {
    title: "AI Agents",
    description: "Discover our marketplace of specialized AI agents ready to assist with your tasks.",
    icon: "Bot",
    link: routes.agents
  },
  {
    title: "Services",
    description: "Explore our range of AI-powered services designed for businesses.",
    icon: "Settings",
    link: routes.services
  },
  {
    title: "Research",
    description: "Learn about the latest developments in AI technology and research.",
    icon: "Search",
    link: routes.research
  }
]

export function FeaturedServices() {
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
          const Icon = DIcons[service.icon]
          return (
            <Link href={service.link} key={service.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-lg border bg-background p-2 cursor-pointer"
              >
                <div className="flex h-[400px] flex-col rounded-lg p-6">
                  <div className="flex items-center justify-center rounded-lg bg-secondary p-2">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="mt-4 flex-1">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Learn more</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </section>
  )
} 