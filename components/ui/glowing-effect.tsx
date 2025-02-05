"use client"

import { useRef, type ReactNode } from "react"
import { useMotionValue, motion, useMotionTemplate } from "framer-motion"

interface GlowingEffectProps {
  children: ReactNode
  glow?: number
  spread?: number
  proximity?: number
}

export function GlowingEffect({
  children,
  glow = 20,
  spread = 50,
  proximity = 0.8,
}: GlowingEffectProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      ref={containerRef}
      className="group relative"
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${spread}px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, ${proximity}),
              transparent ${glow}%
            )
          `,
        }}
      />
      {children}
    </div>
  )
} 