'use client'

import { motion } from "framer-motion"
import Image from "next/image"

interface Agent {
  id: number
  name: string
  description: string
  category: string
  image: string
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="mb-4">
          <Image
            src={agent.image}
            alt={agent.name}
            width={64}
            height={64}
            className="rounded-lg"
          />
        </div>
        <div className="mb-2 text-sm text-white/60">{agent.category}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
        <p className="text-sm text-white/70">{agent.description}</p>
      </div>
    </div>
  )
} 