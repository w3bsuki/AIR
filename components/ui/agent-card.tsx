'use client'

import { motion } from "framer-motion"
import { ArrowUpRight, Cpu, Zap, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { routes } from "@/lib/routes"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

interface AgentCardProps {
  name: string
  description: string
  image: string
  id?: string
  features?: string[]
}

export function AgentCard({ name, description, image, id, features = [] }: AgentCardProps) {
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
    <div className="relative min-h-[28rem] list-none">
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={60} glow={true} proximity={80} />
        <Card className={cn(
          "relative overflow-hidden group hover-card spotlight-card dark-gradient-border h-full",
          "border border-border/50 bg-background/80",
          "dark:bg-background/90 dark:border-border/10"
        )}>
          <div className="p-6 space-y-6">
            {/* Header with Avatar and Title */}
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-border/10">
                <AvatarImage src={image} alt={name} />
              </Avatar>
              <div>
                <h3 className="font-semibold tracking-tight">{name}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
              {getMetrics().map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div 
                    key={metric.label}
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gradient-to-b from-muted/50 to-muted/10"
                  >
                    <div className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br mb-2",
                      metric.color
                    )}>
                      <Icon className="h-4 w-4 text-foreground/80" />
                    </div>
                    <div className="text-sm font-medium">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                )
              })}
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <div className="text-sm font-medium">Key Features:</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            {id && (
              <div className="pt-2">
                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-accent/50 group/button"
                  asChild
                >
                  <Link
                    href={`${routes.agents}/${id}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground/90"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
} 