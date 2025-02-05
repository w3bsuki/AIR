'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ResearchCard {
  category: string
  date: string
  title: string
  description: string
  readTime: string
  href: string
}

const researchItems: ResearchCard[] = [
  {
    category: 'AI Safety',
    date: 'Mar 2024',
    title: 'Advancing AI Safety',
    description: 'Exploring new methodologies for safer and more reliable AI systems',
    readTime: '8 min read',
    href: '/research/ai-safety',
  },
  {
    category: 'LLMs',
    date: 'Mar 2024',
    title: 'Large Language Model Breakthroughs',
    description: 'Recent developments in LLM architectures and their implications',
    readTime: '12 min read',
    href: '/research/llm-breakthroughs',
  },
  {
    category: 'Deep Learning',
    date: 'Mar 2024',
    title: 'Neural Networks Evolution',
    description: 'The future of neural network architectures and training methods',
    readTime: '10 min read',
    href: '/research/neural-networks',
  },
]

function ResearchCard({ item }: { item: ResearchCard }) {
  return (
    <Link 
      href={item.href}
      className="group relative flex flex-col gap-4 rounded-xl bg-card/50 p-6 transition-all hover:bg-card dark:hover:bg-card/80 dark-hover dark-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-primary">{item.category}</span>
          <span className="text-sm text-muted-foreground">{item.date}</span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
        <p className="text-muted-foreground">{item.description}</p>
      </div>
      <div className="mt-auto">
        <span className="text-sm text-muted-foreground">{item.readTime}</span>
      </div>
    </Link>
  )
}

export function ResearchSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-[#0F172A]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured Research
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our latest research on AI safety, security, and performance optimization
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {researchItems.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
} 