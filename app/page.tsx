'use client'

import { Button } from "@/components/ui/button"
import { AgentGrid } from "@/components/AgentGrid"
import { ArrowRight, BarChart, Zap, Shield, MoveRight, Brain } from "lucide-react"
import { ButtonColorful } from "@/components/ui/button-colorful"
import { Hero } from "@/components/ui/animated-hero"
import { FeaturedServices } from "@/components/ui/featured-services"
import { LogoCarousel } from "@/components/logo-carousel"
import { SectionHeader } from "@/components/ui/section-header"
import Link from "next/link"
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { FeatureSectionWrapper } from "@/components/ui/feature-section-wrapper"
import { ResearchSection } from "@/components/ui/research-section"
import { routes } from '@/lib/routes'

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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Featured Services Section */}
      <FeaturedServices services={featuredServices} />

      {/* Agents Grid Section */}
      <section className="container mx-auto px-4 py-20">
        <SectionHeader
          title="Featured Agents"
          description="Discover our collection of specialized AI agents designed to enhance your workflow"
        />
        <AgentGrid agents={featuredAgents} />
        <div className="mt-12 text-center">
          <Link href={routes.agents}>
            <Button variant="outline" className="group">
              View All Agents
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSectionWrapper>
        <FeaturesSectionWithHoverEffects />
      </FeatureSectionWrapper>

      {/* Research Section */}
      <ResearchSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/10 via-primary/5 to-background px-6 py-20 sm:px-12 sm:py-32">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to transform your business with AI?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Get started with our AI solutions today and stay ahead of the competition.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <ButtonColorful href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonColorful>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20 [mask-image:radial-gradient(closest-side,white,transparent)]">
            <div className="absolute inset-0 bg-gradient-radial from-primary/40" />
          </div>
        </div>
      </section>
    </div>
  )
}
