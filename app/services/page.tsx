'use client'

import { ServiceCard } from "@/components/ui/service-card"
import { Brain, BarChart, Shield } from "lucide-react"
import { SectionHeader } from '@/components/ui/section-header'

const services = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs. From chatbots to predictive analytics.",
    icon: Brain,
    gradient: "from-cyan-400/20 via-cyan-400/0 to-cyan-400/0",
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"] as const
  },
  {
    title: "Performance Optimization",
    description: "Optimize your applications for maximum performance and efficiency.",
    icon: BarChart,
    gradient: "from-purple-400/20 via-purple-400/0 to-purple-400/0",
    features: ["Load Balancing", "Cache Optimization", "Response Time Improvement"] as const
  },
  {
    title: "Security Solutions",
    description: "Enterprise-grade security solutions to protect your infrastructure.",
    icon: Shield,
    gradient: "from-emerald-400/20 via-emerald-400/0 to-emerald-400/0",
    features: ["Encryption", "Access Control", "Security Audits"] as const
  }
] as const

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services"
          description="Comprehensive AI solutions to transform your business operations"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              gradient={service.gradient}
              title={service.title}
              description={service.description}
              features={[...service.features]}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 