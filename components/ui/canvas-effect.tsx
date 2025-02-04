"use client"

import { cn } from "@/lib/utils"

export function CanvasEffect({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 -z-10 bg-gradient-to-b from-black/20 to-black", className)} />
  )
}

