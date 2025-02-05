'use client'

import { motion } from "framer-motion"
import { Brain, Code, Shield, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    name: "AI Development",
    description: "Build and deploy custom AI solutions that scale with your business needs.",
    icon: Brain,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent"
  },
  {
    name: "Research & Innovation",
    description: "Stay ahead with cutting-edge AI research and innovative solutions.",
    icon: Code,
    gradient: "from-violet-500/20 via-violet-500/10 to-transparent"
  },
  {
    name: "Security & Compliance",
    description: "Enterprise-grade security with industry compliance standards.",
    icon: Shield,
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent"
  },
  {
    name: "Performance Optimization",
    description: "Optimize your AI systems for maximum efficiency and speed.",
    icon: Zap,
    gradient: "from-amber-500/20 via-amber-500/10 to-transparent"
  }
]

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Advanced AI Features
          </h2>
          <p className="max-w-[900px] text-muted-foreground mx-auto">
            Discover our comprehensive suite of AI features designed to transform your business operations
            and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.name}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl p-8",
                  "bg-gradient-to-b from-background/80 to-background border",
                  "transition-all hover:border-primary/50",
                  "backdrop-blur-sm"
                )}
              >
                <div className="relative z-10 space-y-4">
                  <div className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-lg",
                    "bg-gradient-to-br",
                    feature.gradient
                  )}>
                    <Icon className="h-6 w-6 text-foreground/80" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/5 to-background/60" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 