import { Metadata } from 'next'
import { Zap, Brain, Lock, Cloud, Chart, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our AI-powered services',
}

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs. From chatbots to predictive analytics.",
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Robust cloud infrastructure setup and management with high availability and scalability.",
    features: ["24/7 Monitoring", "Auto-scaling", "Disaster Recovery"]
  },
  {
    icon: Chart,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics services.",
    features: ["Real-time Analytics", "Custom Dashboards", "Predictive Models"]
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Enterprise-grade security solutions to protect your AI infrastructure and data.",
    features: ["Encryption", "Access Control", "Security Audits"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your AI models and infrastructure for maximum efficiency and speed.",
    features: ["Load Balancing", "Cache Optimization", "Response Time Improvement"]
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    description: "Ensure your AI systems comply with regulations and industry standards.",
    features: ["GDPR Compliance", "Audit Trails", "Policy Management"]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive AI solutions to transform your business operations and drive innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative space-y-4">
                <service.icon className="w-8 h-8 text-white/70" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-white/70">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
} 