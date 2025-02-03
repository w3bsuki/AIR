"use client"
import { AgentCard } from "./AgentCard"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

const agents = [
  {
    id: 1,
    name: "NeuroSales Agent v2.1",
    description: "Closes deals using LLM-powered negotiation",
    skills: ["Multilingual", "CRM Integration"],
  },
  {
    id: 2,
    name: "DataMiner Pro",
    description: "Extracts insights from complex datasets",
    skills: ["Big Data", "Machine Learning"],
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
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative spotlight"
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

