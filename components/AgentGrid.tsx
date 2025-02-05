"use client"

import { motion } from "framer-motion"
import { AgentCard } from "./ui/agent-card"

interface Agent {
  name: string
  description: string
  image: string
  id?: string
}

interface AgentGridProps {
  agents: Agent[]
}

export function AgentGrid({ agents }: AgentGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {agents.map((agent) => (
        <AgentCard key={agent.id} {...agent} />
      ))}
    </div>
  )
}

