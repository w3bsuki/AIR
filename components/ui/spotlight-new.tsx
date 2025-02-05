'use client'

import { useEffect, useRef } from "react"

export function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return

      const rect = spotlightRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      spotlightRef.current.style.setProperty("--x", `${x}px`)
      spotlightRef.current.style.setProperty("--y", `${y}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="absolute inset-0 opacity-0 mix-blend-soft-light group-hover:opacity-100 transition-opacity"
      style={{
        background: "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)",
      }}
    />
  )
} 