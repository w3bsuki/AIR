'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Cpu, Zap, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { routes } from "@/lib/routes"

interface Agent {
  id: number
  name: string
  description: string
  category: string
  image: string
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const getMetrics = () => [
    {
      label: "Processing Power",
      value: "12.4 TFLOPS",
      icon: Cpu,
      color: "from-blue-500/20 via-blue-500/10 to-transparent"
    },
    {
      label: "Response Time",
      value: "0.2s",
      icon: Zap,
      color: "from-amber-500/20 via-amber-500/10 to-transparent"
    },
    {
      label: "Active Users",
      value: "1.2k+",
      icon: Users,
      color: "from-emerald-500/20 via-emerald-500/10 to-transparent"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-gradient-to-b from-background/80 to-background border transition-all hover:border-primary/50",
        "backdrop-blur-sm spotlight-card dark-gradient-border",
      )}
    >
      <div className="h-full p-8">
        {/* Agent Header */}
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl border bg-background">
            <Image
              src={agent.image}
              alt={agent.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div>
            <div className="text-sm font-medium text-primary/80">
              {agent.category}
            </div>
            <h3 className="text-xl font-semibold leading-7 tracking-tight spotlight-text">
              {agent.name}
            </h3>
          </div>
        </div>

        {/* Agent Description */}
        <p className="mt-4 text-muted-foreground leading-7">
          {agent.description}
        </p>

        {/* Agent Metrics */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {getMetrics().map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="space-y-1">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br",
                  metric.color
                )}>
                  <Icon className="h-4 w-4 text-foreground/80" />
                </div>
                <div className="text-lg font-semibold">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Agent Action */}
        <div className="mt-8 flex items-center gap-3">
          <Link
            href={`${routes.agents}/${agent.id}`}
            className={cn(
              "group/link inline-flex items-center gap-2 text-sm font-medium text-foreground/90",
              "transition-colors hover:text-primary"
            )}
          >
            View Details
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/5 via-background/5 to-background/60" />
    </motion.div>
  )
} 