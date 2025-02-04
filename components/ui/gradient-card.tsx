'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface GradientCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  className?: string
}

export function GradientCard({ icon: Icon, title, description, features, className = '' }: GradientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-white/20 transition-all duration-300 group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className="w-8 h-8 text-white/70 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/70 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-white/50 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/30" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
} 