"use client"

import { motion } from "framer-motion"
import { AgentCard } from "@/components/ui/agent-card"

interface Agent {
  name: string
  description: string
  image: string
  id: string
  features: string[]
}

interface AgentGridProps {
  agents: Agent[]
}

export function AgentGrid({ agents }: AgentGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          name={agent.name}
          description={agent.description}
          image={agent.image}
          id={agent.id}
          features={agent.features}
        />
      ))}
    </div>
  )
}

