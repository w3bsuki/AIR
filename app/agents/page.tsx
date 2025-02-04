import { AgentCard } from "@/components/ui/agent-card"
import { AgentFilters } from "@/components/ui/agent-filters"

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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <AgentFilters />
          </aside>

          {/* Agents Grid */}
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