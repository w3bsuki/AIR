'use client'

import { motion, useReducedMotion } from "framer-motion"
import { Brain, Code, Zap, Shield, BarChart, Cloud } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

const features = [
  {
    title: "AI Model Development",
    description: "Build and train custom AI models with our intuitive platform. Support for all major frameworks.",
    icon: Brain,
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    delay: 0,
  },
  {
    title: "High-Performance APIs",
    description: "Deploy models with production-ready APIs. Auto-scaling and load balancing included.",
    icon: Code,
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    delay: 0.1,
  },
  {
    title: "Real-time Processing",
    description: "Process data in real-time with our optimized inference pipeline and edge deployment.",
    icon: Zap,
    gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    delay: 0.2,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 Type II compliance and end-to-end encryption.",
    icon: Shield,
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    delay: 0.3,
  },
  {
    title: "Advanced Analytics",
    description: "Monitor model performance and get insights with our comprehensive analytics suite.",
    icon: BarChart,
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    delay: 0.4,
  },
  {
    title: "Scalable Infrastructure",
    description: "Built on modern cloud infrastructure that scales automatically with your needs.",
    icon: Cloud,
    gradient: "from-pink-500/10 via-pink-500/5 to-transparent",
    delay: 0.5,
  },
]

export function FeaturesGrid() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion()
  
  // Check if device is mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Disable animations on mobile or if user prefers reduced motion
  const shouldAnimate = !prefersReducedMotion && !isMobile

  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={shouldAnimate ? { opacity: 1, y: 0 } : false}
          transition={shouldAnimate ? {
            duration: 0.3,
            delay: feature.delay * 0.5, // Reduced delay on mobile
            ease: [0.21, 0.47, 0.32, 0.98],
          } : undefined}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative overflow-hidden rounded-2xl border bg-background/50 p-4 sm:p-6 backdrop-blur-xl will-change-transform"
        >
          <div className="relative z-10">
            <div className={`inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5 sm:p-3`}>
              <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">{feature.description}</p>
          </div>
          <div 
            className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ willChange: 'opacity' }}
          />
        </motion.div>
      ))}
    </div>
  )
} 