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
    features: ["Custom Model Training", "API Integration", "Scalable Solutions"]
  },
  {
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics services.",
    icon: BarChart,
    gradient: "from-purple-400/20 via-purple-400/0 to-purple-400/0",
    features: ["Real-time Analytics", "Custom Dashboards", "Predictive Models"]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions to protect your AI infrastructure and data.",
    icon: Shield,
    gradient: "from-emerald-400/20 via-emerald-400/0 to-emerald-400/0",
    features: ["Encryption", "Access Control", "Security Audits"]
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
      <ResearchSection />
    </div>
  )
}
