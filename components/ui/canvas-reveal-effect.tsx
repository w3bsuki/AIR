"use client"

import React, { useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"
import { cn } from "@/lib/utils"

export interface CanvasRevealEffectProps {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}

export function CanvasRevealEffect({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
}: CanvasRevealEffectProps) {
  // Move all the shader implementation here
  // ... rest of the shader code
} 