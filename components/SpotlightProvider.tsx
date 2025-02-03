"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

const SpotlightContext = createContext({ mouseX: 0, mouseY: 0 })

export const useSpotlight = () => useContext(SpotlightContext)

export function SpotlightProvider({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ mouseX: event.clientX, mouseY: event.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty("--mouse-x", `${mousePosition.mouseX}px`)
    document.documentElement.style.setProperty("--mouse-y", `${mousePosition.mouseY}px`)
  }, [mousePosition])

  return (
    <SpotlightContext.Provider value={mousePosition}>
      <div className="spotlight">{children}</div>
    </SpotlightContext.Provider>
  )
}

