'use client'

import { motion } from "framer-motion"
import { ArrowUpRight, Star, Users, Zap, Bot, HeartHandshake, ClipboardCheck } from "lucide-react"
import Link from "next/link"

const agents = [
  {
    title: "Aidr",
    subtitle: "Ultimate Agent",
    description: "The most advanced AI agent capable of handling complex tasks, problem-solving, and decision-making with exceptional accuracy.",
    icon: Bot,
    iconColor: "from-blue-500 to-cyan-500",
    stats: {
      rating: "4.9",
      users: "50k+",
      speed: "25ms",
    },
    href: "/agents/aidr",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    delay: 0,
  },
  {
    title: "Aidy",
    subtitle: "Customer Support",
    description: "Intelligent customer service agent providing 24/7 support with natural language understanding and empathetic responses.",
    icon: HeartHandshake,
    iconColor: "from-purple-500 to-pink-500",
    stats: {
      rating: "4.8",
      users: "35k+",
      speed: "30ms",
    },
    href: "/agents/aidy",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    delay: 0.1,
  },
  {
    title: "Aido",
    subtitle: "Task Manager & Administrator",
    description: "Efficient task management and administrative AI that streamlines workflows and automates routine operations.",
    icon: ClipboardCheck,
    iconColor: "from-emerald-500 to-teal-500",
    stats: {
      rating: "4.9",
      users: "40k+",
      speed: "28ms",
    },
    href: "/agents/aido",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    delay: 0.2,
  },
]

export function FeaturedAgents() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => {
        const Icon = agent.icon
        return (
          <motion.div
            key={agent.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: agent.delay,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-xl"
          >
            {/* Icon Header */}
            <div className="aspect-[2/1] overflow-hidden relative p-6 flex items-center justify-center">
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-20`} />
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${agent.iconColor} p-0.5`}>
                <div className="w-full h-full rounded-full bg-background/95 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-foreground" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-gradient transition-all duration-300">
                {agent.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">
                {agent.subtitle}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {agent.description}
              </p>

              {/* Stats */}
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {agent.stats.rating}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {agent.stats.users}
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4" />
                  {agent.stats.speed}
                </div>
              </div>

              {/* Link */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                <Link 
                  href={agent.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Learn more
                </Link>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Hover gradient */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${agent.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
          </motion.div>
        )
      })}
    </div>
  )
} 