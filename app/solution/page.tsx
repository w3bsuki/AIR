import { Metadata } from 'next'
import { Zap, Brain, Lock, Cloud, Chart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Solution',
  description: 'Enterprise AI Solutions',
}

const solutions = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs. From chatbots to predictive analytics.",
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"]
  },
  // ... other solutions
]

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Enterprise AI Solution
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Transform your business with our comprehensive AI solutions
          </p>
        </div>
        
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ... solution cards ... */}
        </div>
      </div>
    </div>
  )
} 