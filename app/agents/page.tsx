import { Metadata } from 'next'
import { AgentCard } from "@/components/ui/agent-card"
import { AgentFilters } from "@/components/ui/agent-filters"
import { Zap, Brain, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: 'AI Agents Marketplace',
  description: 'Browse and deploy powerful AI agents for your business needs',
}

const agents = [
  {
    id: 1,
    name: "DataAnalyst Pro",
    description: "Advanced data analysis and visualization agent with real-time insights.",
    category: "Data Analysis",
    price: 49,
    rating: 4.8,
    reviews: 128,
    image: "/agents/data-analyst.png",
    tags: ["Analytics", "Business Intelligence", "Reporting"],
    capabilities: [
      "Real-time data processing",
      "Custom visualization",
      "Predictive analytics",
      "Automated reporting"
    ]
  },
  {
    id: 2,
    name: "ContentWriter AI",
    description: "Professional content creation agent with SEO optimization.",
    category: "Content Creation",
    price: 39,
    rating: 4.6,
    reviews: 95,
    image: "/agents/content-writer.png",
    tags: ["SEO", "Blogging", "Copywriting"],
    capabilities: [
      "SEO optimization",
      "Topic research",
      "Content strategy",
      "Multiple formats"
    ]
  },
  {
    id: 3,
    name: "CustomerService Bot",
    description: "24/7 customer support agent with multilingual capabilities.",
    category: "Customer Service",
    price: 59,
    rating: 4.9,
    reviews: 203,
    image: "/agents/customer-service.png",
    tags: ["Support", "Multilingual", "Chat"],
    capabilities: [
      "24/7 availability",
      "Multiple language support",
      "Ticket management",
      "Quick response time"
    ]
  },
  {
    id: 4,
    name: "ResearchAssistant AI",
    description: "Comprehensive research and analysis agent for academic and business needs.",
    category: "Research",
    price: 69,
    rating: 4.7,
    reviews: 156,
    image: "/agents/research.png",
    tags: ["Academic", "Market Research", "Analysis"],
    capabilities: [
      "Literature review",
      "Data collection",
      "Trend analysis",
      "Report generation"
    ]
  },
  {
    id: 5,
    name: "DevOps Engineer",
    description: "Automated infrastructure management and deployment agent.",
    category: "Development",
    price: 89,
    rating: 4.8,
    reviews: 178,
    image: "/agents/devops.png",
    tags: ["Infrastructure", "Automation", "CI/CD"],
    capabilities: [
      "Infrastructure as code",
      "Automated deployment",
      "Performance monitoring",
      "Security compliance"
    ]
  },
  {
    id: 6,
    name: "MarketingStrategist AI",
    description: "Comprehensive marketing strategy and campaign management agent.",
    category: "Marketing",
    price: 79,
    rating: 4.7,
    reviews: 142,
    image: "/agents/marketing.png",
    tags: ["Digital Marketing", "Analytics", "Social Media"],
    capabilities: [
      "Campaign planning",
      "Performance tracking",
      "Content scheduling",
      "ROI analysis"
    ]
  }
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Our AI agents process tasks at superhuman speeds, delivering results in record time."
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "Agents evolve and improve with each interaction, constantly enhancing their capabilities."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and privacy measures keep your data safe and secure."
  }
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            AI Agent Marketplace
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover and deploy powerful AI agents tailored for your specific needs. Each agent is thoroughly tested and optimized for maximum efficiency.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tighter text-white text-center mb-12">
            Why Choose Our AI Agents?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-8 h-8 text-white/70 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employee of the Month Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold tracking-tighter text-white text-center mb-12">
            Employee of the Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.slice(0, 3).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>

        {/* All Agents Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <AgentFilters />
          </aside>
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
} 