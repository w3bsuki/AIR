"use client"

import { motion } from "framer-motion"
import { AgentCard } from "./ui/agent-card"

const agents = [
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
    skills: ["Natural Language", "Sentiment Analysis"],
  },
  {
    id: 4,
    name: "CodeGenius",
    description: "AI-powered code generation and optimization",
    skills: ["Multi-language", "Code Review"],
  },
  {
    id: 5,
    name: "MarketingGuru",
    description: "Creates and optimizes marketing campaigns",
    skills: ["SEO", "Social Media"],
  },
  {
    id: 6,
    name: "FinanceWizard",
    description: "AI-driven financial analysis and forecasting",
    skills: ["Risk Assessment", "Predictive Modeling"],
  },
]

export function AgentGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </motion.div>
  )
}

