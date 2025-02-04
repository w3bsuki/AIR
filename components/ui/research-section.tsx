'use client'

import { Brain, Shield, BarChart, ArrowRight, LucideIcon } from "lucide-react"
import Link from "next/link"
import { routes } from "@/lib/routes"

interface ResearchPost {
  title: string
  description: string
  category: string
  href: typeof routes[keyof typeof routes]
  icon: LucideIcon
}

const posts: ResearchPost[] = [
  {
    title: "LLMs Easily Jailbroken as Browser Agents",
    description: "Research on LLM vulnerabilities when deployed as browser agents",
    category: "Research",
    href: routes.researchLLMBrowser,
    icon: Brain
  },
  {
    title: "Multi-Turn Human Jailbreaks on LLM Defenses",
    description: "Analysis of human-driven jailbreak attempts on LLM safety measures",
    category: "Research",
    href: routes.researchLLMDefenses,
    icon: Shield
  },
  {
    title: "SEAL Leaderboards: Expert-Driven Private Evaluations",
    description: "Private evaluation framework for assessing LLM capabilities",
    category: "Leaderboards",
    href: routes.researchSEAL,
    icon: BarChart
  }
]

export function ResearchSection() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.href}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-white/60">{post.category}</span>
                <post.icon className="w-6 h-6 text-white/60" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link 
          href={routes.research}
          className="inline-flex items-center justify-center text-sm text-white/70 hover:text-white gap-2"
        >
          View all research <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </>
  )
} 