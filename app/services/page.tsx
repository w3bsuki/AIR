import { Metadata } from 'next'
import { Brain, Shield, Zap } from 'lucide-react'

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
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <service.icon className="w-8 h-8 text-white/70 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-white/70 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-white/50 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 