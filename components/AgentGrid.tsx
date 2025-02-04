"use client"

import { motion } from "framer-motion"
import { AgentCard } from "./ui/agent-card"
import { useMemo } from "react"

export function AgentGrid() {
  // Memoize the agents data to prevent unnecessary re-renders
  const agents = useMemo(() => [
    {
      id: 1,
      name: "NeuroSales Agent v2.1",
      description: "Closes deals using LLM-powered negotiation",
      category: "Sales",
      price: 49,
      rating: 4.8,
      reviews: 128,
      image: "/agents/data-analyst.png",
      tags: ["Multilingual", "CRM Integration"],
      capabilities: [
        "Natural language negotiation",
        "Deal tracking",
        "Pipeline management",
        "Performance analytics"
      ]
    },
    {
      id: 2,
      name: "DataMiner Pro",
      description: "Extracts insights from complex datasets",
      category: "Data Analysis",
      price: 59,
      rating: 4.7,
      reviews: 156,
      image: "/agents/data-analyst.png",
      tags: ["Big Data", "Machine Learning"],
      capabilities: [
        "Data processing",
        "Pattern recognition",
        "Predictive analytics",
        "Visualization"
      ]
    },
    {
      id: 3,
      name: "AIssistant",
      description: "24/7 customer support with human-like interactions",
      category: "Customer Service",
      price: 39,
      rating: 4.9,
      reviews: 203,
      image: "/agents/customer-service.png",
      tags: ["Natural Language", "Sentiment Analysis"],
      capabilities: [
        "24/7 Support",
        "Multi-language",
        "Ticket management",
        "Customer insights"
      ]
    },
    {
      id: 4,
      name: "CodeGenius",
      description: "AI-powered code generation and optimization",
      category: "Development",
      price: 69,
      rating: 4.6,
      reviews: 89,
      image: "/agents/data-analyst.png",
      tags: ["Multi-language", "Code Review"],
      capabilities: [
        "Code generation",
        "Code review",
        "Optimization",
        "Documentation"
      ]
    },
    {
      id: 5,
      name: "MarketingGuru",
      description: "Creates and optimizes marketing campaigns",
      category: "Marketing",
      price: 54,
      rating: 4.7,
      reviews: 167,
      image: "/agents/content-writer.png",
      tags: ["SEO", "Social Media"],
      capabilities: [
        "Campaign creation",
        "Analytics",
        "A/B testing",
        "Content optimization"
      ]
    },
    {
      id: 6,
      name: "FinanceWizard",
      description: "AI-driven financial analysis and forecasting",
      category: "Finance",
      price: 79,
      rating: 4.8,
      reviews: 142,
      image: "/agents/data-analyst.png",
      tags: ["Risk Assessment", "Predictive Modeling"],
      capabilities: [
        "Financial analysis",
        "Risk assessment",
        "Forecasting",
        "Portfolio management"
      ]
    }
  ], [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  )
}

