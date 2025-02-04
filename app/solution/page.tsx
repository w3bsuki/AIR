import { Metadata } from 'next'
import { Zap, Brain, Lock, Cloud, BarChart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Solution',
  description: 'Explore our comprehensive AI solutions',
}

export default function SolutionPage() {
  const features = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs."
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security for your AI operations."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud providers."
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Fine-grained control over AI agent permissions."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed and efficiency."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Solution</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 rounded-lg border border-white/10 bg-black/40"
          >
            <feature.icon className="w-8 h-8 mb-4 text-white/60" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 