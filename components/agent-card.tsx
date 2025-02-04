'use client'

import { motion } from "framer-motion"
import { Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { routes } from "@/lib/routes"

interface Agent {
  id: number
  name: string
  description: string
  category: string
  price: number
  rating: number
  reviews: number
  image: string
  tags: string[]
  capabilities: string[]
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
        <p className="text-sm text-white/70 mb-4">{agent.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>${agent.price}/mo</span>
          <span>⭐ {agent.rating} ({agent.reviews})</span>
        </div>
        <div className="mt-4">
          <Link
            href={routes.agent(agent.id)}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
} 