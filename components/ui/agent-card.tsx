'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Cpu, Zap, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { routes } from "@/lib/routes"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface AgentCardProps {
  name: string
  description: string
  image: string
  id?: string
}

export function AgentCard({ name, description, image, id }: AgentCardProps) {
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
    <Card className={cn(
      "relative overflow-hidden group hover-card",
      "border border-border/50 bg-background/80",
      "dark:bg-background/90 dark:border-border/10"
    )}>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-border/10" src={image} alt={name} />
          <div>
            <h3 className="font-semibold tracking-tight">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        {id && (
          <div className="mt-4">
            <Button
              variant="ghost"
              className="group/button w-full justify-between hover:bg-accent/50"
              asChild
            >
              <Link
                href={`${routes.agents}/${id}`}
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-foreground/90"
              >
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
} 