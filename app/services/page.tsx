import { Metadata } from 'next'
import { Brain, Shield, Zap } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'
import { SectionHeader } from '@/components/ui/section-header'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our AI-powered services',
}

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs.",
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your AI models and infrastructure for maximum efficiency.",
    features: ["Load Balancing", "Cache Optimization", "Response Time Improvement"]
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Enterprise-grade security solutions to protect your AI infrastructure.",
    features: ["Encryption", "Access Control", "Security Audits"]
  }
] as const

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services"
          description="Comprehensive AI solutions to transform your business operations"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GradientCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 