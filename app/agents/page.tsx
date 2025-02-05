'use client'

import { FeaturedAgents } from "@/components/featured-agents"

// Mark the page as dynamically rendered
export const dynamic = 'force-dynamic'

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
          <FeaturedAgents />
        </div>
      </div>
    </section>
  )
} 