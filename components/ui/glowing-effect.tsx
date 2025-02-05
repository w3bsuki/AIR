'use client'

import { useEffect, useRef } from 'react'

interface GlowingEffectProps {
  spread?: number
  glow?: boolean
  disabled?: boolean
  proximity?: number
  inactiveZone?: number
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}: GlowingEffectProps) {
  const glowRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (disabled || !glowRef.current || !containerRef.current) return

    const container = containerRef.current
    const glowElement = glowRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate distance from center
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const distance = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      )

      // If within active zone, update glow position
      if (distance < rect.width * (1 - inactiveZone)) {
        glowElement.style.background = `
          radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) ${spread}px,
            transparent ${spread * 2}px
          )
        `
      } else {
        // Reset glow when cursor is in inactive zone
        glowElement.style.background = 'transparent'
      }
    }

    const handleMouseLeave = () => {
      glowElement.style.background = 'transparent'
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [spread, disabled, proximity, inactiveZone])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <div
        ref={glowRef}
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: glow ? 1 : 0,
          background: 'transparent',
        }}
      />
    </div>
  )
} 