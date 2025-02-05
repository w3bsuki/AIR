'use client'

import { AgentGrid } from "@/components/AgentGrid"

// Mark the page as dynamically rendered
export const dynamic = 'force-dynamic'

const agents = [
  {
    name: "NeuroSales Agent v2.1",
    description: "Enterprise-grade AI sales agent with advanced negotiation capabilities and deep customer understanding.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "neurosales",
    features: [
      "Natural language negotiation",
      "Customer sentiment analysis",
      "Real-time market adaptation"
    ]
  },
  {
    name: "DataMiner Pro",
    description: "Advanced analytics agent that processes complex datasets using state-of-the-art machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "dataminer",
    features: [
      "Multi-source data integration",
      "Predictive analytics",
      "Automated reporting"
    ]
  },
  {
    name: "AIssistant",
    description: "24/7 customer support agent with multilingual capabilities and emotional intelligence.",
    image: "https://images.unsplash.com/photo-1675475422160-4ca6552b2b39?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "aissistant",
    features: [
      "Natural conversation flow",
      "Multi-language support",
      "Context awareness"
    ]
  },
  {
    name: "CodeGenius",
    description: "AI-powered development assistant that generates production-ready code and performs intelligent code reviews.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "codegenius",
    features: [
      "Code generation",
      "Automated testing",
      "Performance optimization"
    ]
  },
  {
    name: "MarketingGuru",
    description: "Intelligent marketing agent that creates data-driven campaigns and optimizes content across channels.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "marketingguru",
    features: [
      "Content optimization",
      "A/B testing",
      "Campaign analytics"
    ]
  },
  {
    name: "FinanceWizard",
    description: "Advanced financial analysis agent providing real-time market insights and risk assessment.",
    image: "https://images.unsplash.com/photo-1675475422160-4ca6552b2b39?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "financewizard",
    features: [
      "Market analysis",
      "Risk assessment",
      "Portfolio optimization"
    ]
  }
]

export default function AgentsPage() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="container relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AI Agents Marketplace
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover our collection of specialized AI agents designed to enhance your workflow and transform your business operations.
          </p>
        </div>

        <div className="mx-auto mt-16">
          <AgentGrid agents={agents} />
        </div>
      </div>
    </section>
  )
} 