'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { DIcons } from "dicons"
import { routes } from "@/lib/routes"

interface Agent {
  title: string
  description: string
  icon: keyof typeof DIcons
  link: string
}

const agents: Agent[] = [
  {
    title: "DataAnalyst Pro",
    description: "Advanced data analysis and visualization agent with real-time insights.",
    icon: "Search",
    link: "/agents/data-analyst"
  },
  {
    title: "ContentWriter AI",
    description: "Professional content creation agent with SEO optimization.",
    icon: "Files",
    link: "/agents/content-writer"
  },
  {
    title: "CustomerService Bot",
    description: "24/7 customer support agent with multilingual capabilities.",
    icon: "Code",
    link: "/agents/customer-service"
  }
]

export function FeaturedAgents() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-xl py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Agents</h2>
          <p className="text-white/70">
            Meet some of our top-performing AI agents
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => {
            const Icon = DIcons[agent.icon]
            return (
              <Link href={agent.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm hover:bg-black/60 hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-white/70">
                        {agent.title}
                      </span>
                      <Icon className="w-6 h-6 text-white/70" />
                    </div>
                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                      {agent.description}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/agents" className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
            View all agents →
          </Link>
        </div>
      </div>
    </section>
  )
} 