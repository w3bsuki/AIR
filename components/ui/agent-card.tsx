'use client'

import { motion } from "framer-motion"
import { Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AgentPlaceholder } from "./agent-placeholder"

interface AgentCardProps {
  agent: {
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
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-white/20 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Agent Image */}
      <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden bg-black/40">
        {agent.image ? (
          <Image
            src={agent.image}
            alt={agent.name}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <AgentPlaceholder />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/70">{agent.category}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span className="text-sm text-white/70">{agent.rating}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
        </div>

        {/* Description */}
        <p className="text-sm text-white/70">{agent.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {agent.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Capabilities */}
        <ul className="space-y-2">
          {agent.capabilities.map((capability) => (
            <li key={capability} className="flex items-center gap-2 text-sm text-white/70">
              <Check className="w-4 h-4 text-green-400" />
              {capability}
            </li>
          ))}
        </ul>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <span className="text-2xl font-bold text-white">${agent.price}</span>
            <span className="text-sm text-white/70">/mo</span>
          </div>
          <Link
            href={`/agents/${agent.id}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Hire
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 