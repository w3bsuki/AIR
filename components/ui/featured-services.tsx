'use client'

import { motion } from "framer-motion"
import { ArrowRight, Brain, BarChart, Shield, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { routes } from "@/lib/routes"
import { cn } from "@/lib/utils"

interface ServiceProps {
  title: string
  description: string
  icon: React.ElementType
  gradient: string
  features: string[]
  href: string
}

interface FeaturedServicesProps {
  services: ServiceProps[]
}

const defaultServices: ServiceProps[] = [
  {
    title: "AI Development",
    description: "Build and deploy custom AI solutions that scale with your business needs. From concept to production, we handle the entire lifecycle.",
    icon: Brain,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    features: ["Custom Model Training", "API Integration", "Scalable Infrastructure"],
    href: routes.services
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics platform. Make data-driven decisions with confidence.",
    icon: BarChart,
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    features: ["Real-time Analytics", "Predictive Models", "Custom Dashboards"],
    href: routes.services
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions to protect your AI infrastructure. Stay compliant with industry standards and regulations.",
    icon: Shield,
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    features: ["End-to-end Encryption", "Access Control", "Audit Trails"],
    href: routes.services
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
}

export function FeaturedServices({ services: externalServices }: FeaturedServicesProps) {
  const displayServices = externalServices || defaultServices;
  
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="container relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AI Solutions for Modern Enterprises
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Leverage cutting-edge AI technology to transform your business operations and stay ahead of the competition.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {displayServices.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={cn(
                  "group relative overflow-hidden rounded-3xl bg-gradient-to-b from-background/80 to-background border transition-all hover:border-primary/50",
                  "backdrop-blur-sm"
                )}
              >
                <div className="h-full p-8">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                      service.gradient
                    )}>
                      <Icon className="h-6 w-6 text-foreground/80" />
                    </div>
                    <h3 className="text-xl font-semibold leading-7">{service.title}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-7">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex gap-3 text-sm text-muted-foreground/90">
                        <ArrowRight className="h-5 w-5 flex-none text-primary/60" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href={service.href}
                      className={cn(
                        "group/link inline-flex items-center gap-2 text-sm font-medium text-foreground/90",
                        "transition-colors hover:text-primary"
                      )}
                    >
                      Learn more
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/5 via-background/5 to-background/60" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 