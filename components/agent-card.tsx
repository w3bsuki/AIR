'use client'

import { motion } from "framer-motion"
import { Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAgentRoute } from "@/lib/routes"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Badge } from "@/components/ui/badge"

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
    <GlowingEffect className="h-full">
      <div className="glow-card group h-full">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="gradient-text font-semibold">{agent.name}</h3>
          <p className="text-sm text-white/70">{agent.description}</p>
          <div className="flex items-center gap-2">
            {agent.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </GlowingEffect>
  )
} 