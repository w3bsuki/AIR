"use client"

import { cn } from "@/lib/utils"
import { CanvasRevealEffect } from "./canvas-reveal-effect"

export function CanvasEffect({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <CanvasRevealEffect 
        animationSpeed={0.4}
        colors={[[0, 255, 255]]}
        dotSize={3}
      />
    </div>
  )
}

