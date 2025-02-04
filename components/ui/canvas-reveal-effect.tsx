"use client"

import { cn } from "@/lib/utils"

interface CanvasRevealEffectProps {
  containerClassName?: string
  variant?: 'red' | 'blue' | 'cyan'
}

export function CanvasRevealEffect({
  containerClassName,
  variant = 'cyan'
}: CanvasRevealEffectProps) {
  const gradientClass = {
    red: "bg-gradient-to-r from-red-500/20 to-rose-500/20",
    blue: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20",
    cyan: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
  }[variant]

  return (
    <div 
      className={cn(
        "relative h-full w-full animate-gradient-xy",
        gradientClass,
        containerClassName
      )}
    />
  )
} 