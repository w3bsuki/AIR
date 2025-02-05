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
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

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

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="spotlight-hero">
        <Hero />
      </div>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Featured Services Section */}
      <div className="spotlight-section">
        <FeaturedServices services={featuredServices} />
      </div>

      {/* Agents Grid Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 spotlight-section">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionHeader
            title="Featured Agents"
            description="Discover our collection of specialized AI agents designed to enhance your workflow"
          />
        </div>
        <div className="mb-16">
          <AgentGrid agents={featuredAgents} />
        </div>
        <div className="text-center">
          <Link href={routes.agents}>
            <Button variant="outline" className="group">
              View All Agents
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <div className="spotlight-section">
        <FeatureSectionWrapper>
          <FeaturesSectionWithHoverEffects />
        </FeatureSectionWrapper>
      </div>

      {/* Research Section */}
      <div className="spotlight-section">
        <ResearchSection />
      </div>

      {/* Testimonials Section */}
      <div className="spotlight-section">
        <TestimonialsSection
          title="Trusted by innovative teams worldwide"
          description="Join thousands of developers and enterprises who are already building the future with our AI platform"
          testimonials={testimonials}
        />
      </div>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 spotlight-section">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/10 via-primary/5 to-background/5 dark:from-primary/20 dark:via-primary/10 dark:to-background/5 px-6 py-20 sm:px-12 sm:py-32 dark-gradient-border">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl spotlight-text">
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
