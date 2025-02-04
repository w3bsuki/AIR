'use client'

import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  gradient: string
  title: string
  description: string
  features: string[]
}

export function ServiceCard({
  icon: Icon,
  gradient,
  title,
  description,
  features
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="relative">
        <Icon className="w-8 h-8 mb-4 text-white/60" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/70 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-white/60">
              • {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 