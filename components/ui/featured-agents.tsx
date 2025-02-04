'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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
    title: "Research Assistant",
    description: "Your personal AI research assistant for academic and business insights.",
    icon: "Search",
    link: "/agents/research-assistant"
  },
  {
    title: "Code Assistant",
    description: "Expert AI coding partner for development and technical solutions.",
    icon: "Code",
    link: "/agents/code-assistant"
  },
  {
    title: "Writing Assistant",
    description: "Professional AI writing aid for content creation and editing.",
    icon: "Files",
    link: "/agents/writing-assistant"
  }
]

export function FeaturedAgents() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-black/95 to-black/90 backdrop-blur-xl py-24">
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  )
} 