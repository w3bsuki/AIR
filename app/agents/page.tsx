'use client'

import { AgentGrid } from "@/components/AgentGrid"

// Mark the page as dynamically rendered
export const dynamic = 'force-dynamic'

const agents = [
  {
    id: 1,
    name: "NeuroSales Agent v2.1",
    description: "Closes deals using LLM-powered negotiation",
    category: "Sales",
    image: "/agents/data-analyst.png",
  },
  {
    id: 2,
    name: "DataMiner Pro",
    description: "Extracts insights from complex datasets",
    category: "Data Analysis",
    image: "/agents/data-analyst.png",
  },
  {
    id: 3,
    name: "AIssistant",
    description: "24/7 customer support with human-like interactions",
    category: "Customer Service",
    image: "/agents/customer-service.png",
  },
  {
    id: 4,
    name: "CodeGenius",
    description: "AI-powered code generation and optimization",
    category: "Development",
    image: "/agents/data-analyst.png",
  },
  {
    id: 5,
    name: "MarketingGuru",
    description: "Creates and optimizes marketing campaigns",
    category: "Marketing",
    image: "/agents/content-writer.png",
  },
  {
    id: 6,
    name: "FinanceWizard",
    description: "AI-driven financial analysis and forecasting",
    category: "Finance",
    image: "/agents/data-analyst.png",
  }
]

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Our AI Agents</h1>
      <AgentGrid agents={agents} />
    </div>
  )
} 