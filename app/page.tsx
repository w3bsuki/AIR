import { Button } from "@/components/ui/button"
import { AgentGrid } from "@/components/AgentGrid"
import { ArrowRight, BarChart, Zap, Shield, MoveRight, Brain } from "lucide-react"
import { ButtonColorful } from "@/components/ui/button-colorful"
import { Hero } from "@/components/ui/animated-hero"
import { FeaturedServices } from "@/components/ui/featured-services"
import { LogoCarousel } from "@/components/logo-carousel"
import Link from "next/link"

// Featured agents data (showing only 3)
const featuredAgents = [
  {
    id: 1,
    name: "DataAnalyst Pro",
    description: "Advanced data analysis and visualization agent with real-time insights.",
    category: "Data Analysis",
    image: "/agents/data-analyst.png",
  },
  {
    id: 2,
    name: "ContentWriter AI",
    description: "Professional content creation agent with SEO optimization.",
    category: "Content Creation",
    image: "/agents/content-writer.png",
  },
  {
    id: 3,
    name: "CustomerService Bot",
    description: "24/7 customer support agent with multilingual capabilities.",
    category: "Customer Service",
    image: "/agents/customer-service.png",
  },
]

// Featured services data
const services = [
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
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] relative overflow-hidden">
        <Hero />
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Features Section */}
      <section className="px-4 py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="mb-12 text-3xl font-extrabold leading-none tracking-tight text-center text-white md:text-4xl lg:text-5xl">
            Why Choose Our AI Agents?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Our AI agents process tasks at superhuman speeds, delivering results in record time.",
              },
              {
                icon: BarChart,
                title: "Continuous Learning",
                description:
                  "Agents evolve and improve with each interaction, constantly enhancing their capabilities.",
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                description: "Bank-level encryption and privacy measures keep your data safe and secure.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border rounded-lg border-white/10 hover:bg-white/5"
              >
                <feature.icon className="w-8 h-8 mb-4 opacity-75 text-primary" strokeWidth={1.5} />
                <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-3xl font-extrabold leading-none tracking-tight text-center select-none md:text-4xl lg:text-5xl">
            Hire
          </h2>
          <AgentGrid />
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="text-white transition-all duration-300 border-white hover:bg-white/10"
            >
              View All Agents <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black/40 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Ready to Revolutionize Your Business?
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl text-white/70">
            Join the AI revolution today and stay ahead of the competition. Our AI agents are ready to transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Get Started Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:ring-white/40"
            >
              View Demo <MoveRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">
              Our Services
            </h2>
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
                <p className="text-sm text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/solution" className="text-sm text-white/70 hover:text-white flex items-center justify-center gap-2">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Agents Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">
              Featured Agents
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Meet some of our top-performing AI agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAgents.map((agent) => (
              <div
                key={agent.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
                <p className="text-sm text-white/70 mb-4">{agent.description}</p>
                <span className="text-xs text-white/40">{agent.category}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/agents" className="text-sm text-white/70 hover:text-white flex items-center justify-center gap-2">
              View all agents <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
