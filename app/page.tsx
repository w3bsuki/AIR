'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LogoCarousel } from "@/components/logo-carousel"
import { FeaturesGrid } from "@/components/features-grid"
import { StatsSection } from "@/components/stats-section"
import { FeaturedAgents } from "@/components/featured-agents"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { CookieConsent } from "@/components/cookie-consent"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { SearchOverlay } from "@/components/search-overlay"
import { HoverCard3D } from "@/components/ui/hover-card-3d"

export default function Home() {
  return (
    <div className="relative">
      <ScrollProgress />
      <FloatingNav />
      <BackToTop />
      <ThemeSwitcher />
      <SearchOverlay />
      <CookieConsent />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              className="text-gradient mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              The Platform for AI Development
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Build, train, and deploy AI models with unprecedented speed and accuracy.
              Our end-to-end platform provides everything you need to turn your AI vision into reality.
            </motion.p>
            <motion.div 
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-gradient hover:opacity-90">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule a demo
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/4 right-0 h-[1000px] w-[1000px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute -top-1/4 left-0 h-[1000px] w-[1000px] rounded-full bg-cyan-500/20 blur-[120px]" />
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <section id="features" className="relative py-24 scroll-mt-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-gradient mb-6">
              Everything you need to build AI
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive platform provides all the tools and features you need to develop,
              train, and deploy AI models at scale.
            </p>
          </div>
          <HoverCard3D className="perspective-1000">
            <FeaturesGrid />
          </HoverCard3D>
        </div>
      </section>

      {/* Featured Agents Section */}
      <section id="agents" className="relative py-24 scroll-mt-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-gradient mb-6">
              Featured AI Agents
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our collection of powerful AI agents designed to help you solve complex problems
              and accelerate your development workflow.
            </p>
          </div>
          <FeaturedAgents />
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-0 w-[800px] opacity-20">
            <div className="absolute inset-0 bg-gradient-conic from-purple-500 via-cyan-500 to-blue-500 blur-[96px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="relative py-24 overflow-hidden scroll-mt-16">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of developers who are already building the future with our platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient hover:opacity-90">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/4 right-0 h-[1000px] w-[1000px] rounded-full bg-blue-500/20 blur-[120px] opacity-50" />
          <div className="absolute -top-1/4 left-0 h-[1000px] w-[1000px] rounded-full bg-cyan-500/20 blur-[120px] opacity-50" />
        </div>
      </section>
    </div>
  )
}
