'use client'

import { Button } from "@/components/ui/button"
import { AgentGrid } from "@/components/AgentGrid"
import { ArrowRight, BarChart, Zap, Shield, MoveRight, Brain } from "lucide-react"
import { ButtonColorful } from "@/components/ui/button-colorful"
import { HeroGeometric as Hero } from "@/components/ui/hero-geometric"
import { FeaturedServices } from "@/components/ui/featured-services"
import { LogoCarousel } from "@/components/logo-carousel"
import { SectionHeader } from "@/components/ui/section-header"
import Link from "next/link"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { FeatureSectionWrapper } from "@/components/ui/feature-section-wrapper"
import { ResearchSection } from "@/components/ui/research-section"
import { routes } from '@/lib/routes'
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"
import { AgentCard } from "@/components/ui/agent-card"

// Featured agents data (showing only 3)
const featuredAgents = [
  {
    id: 1,
    name: "DataAnalyst Pro",
    description: "Advanced data analysis and visualization agent with real-time insights.",
    category: "Data Analysis",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    id: 2,
    name: "ContentWriter AI",
    description: "Professional content creation agent with SEO optimization.",
    category: "Content Creation",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=faces&q=80",
  },
  {
    id: 3,
    name: "CustomerService Bot",
    description: "24/7 customer support agent with multilingual capabilities.",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1675475422160-4ca6552b2b39?w=400&h=400&fit=crop&crop=faces&q=80",
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

const featuredServices = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs. From chatbots to predictive analytics.",
    icon: Brain,
    gradient: "from-cyan-400/20 via-cyan-400/0 to-cyan-400/0",
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"],
    href: routes.services
  },
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics services.",
    icon: BarChart,
    gradient: "from-purple-400/20 via-purple-400/0 to-purple-400/0",
    features: ["Real-time Analytics", "Custom Dashboards", "Predictive Models"],
    href: routes.services
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions to protect your AI infrastructure and data.",
    icon: Shield,
    gradient: "from-emerald-400/20 via-emerald-400/0 to-emerald-400/0",
    features: ["Encryption", "Access Control", "Security Audits"],
    href: routes.services
  }
]

const researchPosts = [
  {
    category: "Research",
    title: "LLMs Easily Jailbroken as Browser Agents",
    icon: Brain,
    href: "/research/llm-browser-agents"
  },
  {
    category: "Research",
    title: "Multi-Turn Human Jailbreaks on LLM Defenses",
    icon: Shield,
    href: "/research/llm-defenses"
  },
  {
    category: "Leaderboards",
    title: "SEAL Leaderboards: Expert-Driven Private Evaluations",
    icon: BarChart,
    href: "/research/seal-leaderboards"
  }
]

const agents = [
  {
    name: "Data Analysis Agent",
    description: "Analyze complex datasets and generate insights with advanced AI algorithms.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "data-analysis"
  },
  {
    name: "Content Creation Agent",
    description: "Create engaging content across multiple formats and platforms.",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "content-creation"
  },
  {
    name: "Customer Service Agent",
    description: "Provide 24/7 customer support with natural language understanding.",
    image: "https://images.unsplash.com/photo-1675475422160-4ca6552b2b39?w=400&h=400&fit=crop&crop=faces&q=80",
    id: "customer-service"
  }
]

const testimonials = [
  {
    text: "This AI platform has revolutionized how we handle data analysis. The speed and accuracy are unmatched.",
    author: "Sarah Chen",
    title: "Data Scientist at TechCorp"
  },
  {
    text: "The content creation capabilities are mind-blowing. It's like having a full creative team at your fingertips.",
    author: "Michael Rodriguez",
    title: "Marketing Director"
  },
  {
    text: "Customer service has never been more efficient. Our response times have improved by 300%.",
    author: "Emily Watson",
    title: "Customer Success Manager"
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative">
        <Hero />
      </div>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Featured Services Section */}
      <div className="relative py-24">
        <FeaturedServices />
      </div>

      {/* Agents Grid Section */}
      <section className="relative py-24 bg-background/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Agents
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Discover our specialized AI agents designed to handle specific tasks with exceptional accuracy and efficiency.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
            {agents.map((agent) => (
              <AgentCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="relative py-24">
        <FeaturesSectionWithHoverEffects />
      </div>

      {/* Research Section */}
      <div className="relative py-24 bg-background/50">
        <ResearchSection />
      </div>

      {/* Testimonials Section */}
      <div className="relative py-24">
        <TestimonialsSection
          testimonials={testimonials}
          title="What Our Users Say"
          description="Discover how our AI agents are transforming businesses and workflows across industries."
        />
      </div>

      {/* CTA Section */}
      <section className="relative py-24 bg-background/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Start Your AI Journey Today
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              Join thousands of users who are already leveraging our AI agents to transform their work.
            </p>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
              href="/signup"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
