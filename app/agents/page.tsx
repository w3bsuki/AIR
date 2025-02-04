'use client'

import { AgentGrid } from "@/components/AgentGrid"

// Mark the page as dynamically rendered
export const dynamic = 'force-dynamic'

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Our AI Agents</h1>
      <AgentGrid />
    </div>
  )
} 