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
    icon: "Edit",
    link: "/agents/writing-assistant"
  }
]

export function FeaturedAgents() {
  return (
    <section className="container py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">Featured Agents</h2>
        <p className="mt-4 text-muted-foreground">
          Explore our most popular AI agents ready to assist you
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => {
          const Icon = DIcons[agent.icon]
          return (
            <Link href={agent.link} key={agent.title}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-lg border bg-background p-2 cursor-pointer"
              >
                <div className="flex h-[400px] flex-col rounded-lg p-6">
                  <div className="flex items-center justify-center rounded-lg bg-secondary p-2">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="mt-4 flex-1">
                    <h3 className="text-xl font-semibold">{agent.title}</h3>
                    <p className="mt-2 text-muted-foreground">{agent.description}</p>
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