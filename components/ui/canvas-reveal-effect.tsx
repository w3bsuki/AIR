"use client"

import { cn } from "@/lib/utils"

interface CanvasRevealEffectProps {
  animationSpeed?: number
  colors?: [number, number, number][]
  containerClassName?: string
  dotSize?: number
  opacities?: number[]
}

export function CanvasRevealEffect({
  containerClassName,
  colors = [[0, 255, 255]],
}: CanvasRevealEffectProps) {
  return (
    <div 
      className={cn(
        "relative h-full w-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
        containerClassName
      )}
    />
  )
} 