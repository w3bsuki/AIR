'use client'

import { AgentGrid } from "@/components/AgentGrid"

// Mark the page as dynamically rendered
export const dynamic = 'force-dynamic'

const agents = [
  {
    name: "NeuroSales Agent v2.1",
    description: "Advanced AI sales agent powered by state-of-the-art LLMs, capable of understanding complex customer needs and negotiating deals with human-like precision.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "neurosales"
  },
  {
    name: "DataMiner Pro",
    description: "Enterprise-grade data analysis agent that processes and extracts actionable insights from complex datasets using advanced machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "dataminer"
  },
  {
    name: "AIssistant",
    description: "24/7 customer support agent with multilingual capabilities, emotional intelligence, and deep learning-based context understanding for superior service.",
    image: "https://images.unsplash.com/photo-1675475422160-4ca6552b2b39?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "aissistant"
  },
  {
    name: "CodeGenius",
    description: "AI-powered development assistant that generates production-ready code, performs code reviews, and suggests optimizations using latest coding standards.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "codegenius"
  },
  {
    name: "MarketingGuru",
    description: "Intelligent marketing agent that creates data-driven campaigns, analyzes market trends, and optimizes content for maximum engagement across channels.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "marketingguru"
  },
  {
    name: "FinanceWizard",
    description: "Advanced financial analysis agent providing real-time market insights, risk assessment, and predictive modeling for informed decision-making.",
    image: "https://images.unsplash.com/photo-1675475422160-4ca6552b2b39?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "financewizard"
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

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <AgentGrid agents={agents} />
        </div>
      </div>
    </section>
  )
} 