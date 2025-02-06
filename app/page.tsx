'use client'

import { lazy, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, LazyMotion, domAnimation } from "framer-motion"

// Lightweight components loaded immediately
import { Hero } from '@/components/sections/hero'
import { LoadingFallback } from '@/components/ui/loading-fallback'

// Heavy components loaded lazily
const LogoCarousel = lazy(() => import('@/components/sections/logo-carousel').then(mod => ({ default: mod.default })))
const FeaturesGrid = lazy(() => import('@/components/sections/features-grid').then(mod => ({ default: mod.default })))
const StatsSection = lazy(() => import('@/components/sections/stats').then(mod => ({ default: mod.default })))
const FeaturedAgents = lazy(() => import('@/components/sections/featured-agents').then(mod => ({ default: mod.default })))
const HoverCard3D = lazy(() => import('@/components/ui/hover-card-3d'))

// Navigation components loaded after main content
const FloatingNav = lazy(() => import('@/components/navigation/floating-nav'))
const ScrollProgress = lazy(() => import('@/components/navigation/scroll-progress'))
const BackToTop = lazy(() => import('@/components/navigation/back-to-top'))
const ThemeSwitcher = lazy(() => import('@/components/navigation/theme-switcher'))
const SearchOverlay = lazy(() => import('@/components/navigation/search-overlay'))
const CookieConsent = lazy(() => import('@/components/navigation/cookie-consent'))

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
        {/* Navigation - Loaded after main content */}
        <Suspense fallback={null}>
          <div className="fixed-elements">
            <ScrollProgress />
            <FloatingNav />
            <BackToTop />
            <ThemeSwitcher />
            <SearchOverlay />
            <CookieConsent />
          </div>
        </Suspense>

        {/* Hero Section - Immediately visible content */}
        <Hero />

        {/* Main content - Lazy loaded with proper loading states */}
        <main className="content-sections">
          <Suspense fallback={<LoadingFallback className="logo-section-height" />}>
            <LogoCarousel />
          </Suspense>

          <Suspense fallback={<LoadingFallback className="stats-section-height" />}>
            <StatsSection />
          </Suspense>

          <section id="features" className="section-padding">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-gradient mb-6 text-3xl md:text-4xl font-bold">
                    Everything you need to build AI
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground">
                    Our comprehensive platform provides all the tools and features you need to develop,
                    train, and deploy AI models at scale.
                  </p>
                </motion.div>
              </div>

              <Suspense fallback={<LoadingFallback className="features-grid-height" />}>
                <HoverCard3D className="perspective-1000">
                  <FeaturesGrid />
                </HoverCard3D>
              </Suspense>
            </div>
          </section>

          <section id="agents" className="section-padding">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-gradient mb-6 text-3xl md:text-4xl font-bold">
                    Featured AI Agents
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground">
                    Explore our collection of powerful AI agents designed to help you solve complex problems
                    and accelerate your development workflow.
                  </p>
                </motion.div>
              </div>

              <Suspense fallback={<LoadingFallback className="agents-grid-height" />}>
                <FeaturedAgents />
              </Suspense>
            </div>

            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-y-0 right-0 w-[800px] opacity-20">
                <div className="absolute inset-0 bg-gradient-conic from-purple-500 via-cyan-500 to-blue-500 blur-[96px]" />
              </div>
            </div>
          </section>

          <section id="cta" className="section-padding">
            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-gradient text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground">
                    Join thousands of developers who are already building the future with our platform.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="bg-gradient hover:opacity-90 w-full sm:w-auto">
                      Sign Up Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Contact Sales
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/4 right-0 h-[1000px] w-[1000px] rounded-full bg-blue-500/20 blur-[120px] opacity-50" />
              <div className="absolute -top-1/4 left-0 h-[1000px] w-[1000px] rounded-full bg-cyan-500/20 blur-[120px] opacity-50" />
            </div>
          </section>
        </main>
      </div>
    </LazyMotion>
  )
}
