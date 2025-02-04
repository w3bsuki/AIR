"use client"

import React, { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { cn } from "@/lib/utils"

interface ShaderProps {
  source: string
  uniforms: Record<string, { value: number[] | number[][] | number; type: string }>
  maxFps?: number
}

const ShaderMaterial = ({ source, uniforms, maxFps = 60 }: ShaderProps) => {
  const { size } = useThree()
  const ref = useRef<THREE.Mesh>(null!)
  let lastFrameTime = 0

  useFrame(({ clock }) => {
    const timestamp = clock.getElapsedTime()
    if (timestamp - lastFrameTime < 1 / maxFps) return
    lastFrameTime = timestamp

    const material = ref.current.material as THREE.ShaderMaterial
    material.uniforms.u_time.value = timestamp
  })

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 coordinates;
        uniform vec2 u_resolution;
        out vec2 fragCoord;
        void main() {
          gl_Position = vec4(position.xy, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
          fragCoord.y = u_resolution.y - fragCoord.y;
        }
      `,
      fragmentShader: source,
      uniforms: {
        ...uniforms,
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(size.width * 2, size.height * 2) }
      },
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    })
  }, [size.width, size.height, source, uniforms])

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  )
}

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
  dotSize = 3,
}: CanvasRevealEffectProps) {
  const uniforms = useMemo(() => {
    const colorsArray = colors.length === 1 
      ? Array(6).fill(colors[0])
      : colors.length === 2
      ? [...Array(3).fill(colors[0]), ...Array(3).fill(colors[1])]
      : [...Array(2).fill(colors[0]), ...Array(2).fill(colors[1]), ...Array(2).fill(colors[2])]

    return {
      u_colors: {
        value: colorsArray.map(color => color.map(c => c / 255)),
        type: "uniform3fv",
      },
      u_opacities: {
        value: opacities,
        type: "uniform1fv",
      },
      u_total_size: {
        value: 4,
        type: "uniform1f",
      },
      u_dot_size: {
        value: dotSize,
        type: "uniform1f",
      },
    }
  }, [colors, opacities, dotSize])

  return (
    <div className={cn("relative h-full w-full bg-black", containerClassName)}>
      <Canvas>
        <ShaderMaterial
          source={`
            precision mediump float;
            in vec2 fragCoord;
            uniform float u_time;
            uniform float u_opacities[10];
            uniform vec3 u_colors[6];
            uniform float u_total_size;
            uniform float u_dot_size;
            uniform vec2 u_resolution;
            out vec4 fragColor;

            float PHI = 1.61803398874989484820459;
            
            float random(vec2 xy) {
              return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
            }

            void main() {
              vec2 st = fragCoord.xy;
              st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));
              st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));

              float opacity = step(0.0, st.x) * step(0.0, st.y);
              vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));

              float show_offset = random(st2);
              float rand = random(st2 * floor((u_time / 5.0) + show_offset + 5.0) + 1.0);
              
              opacity *= u_opacities[int(rand * 10.0)];
              opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
              opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

              vec3 color = u_colors[int(show_offset * 6.0)];
              
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
              opacity *= step(intro_offset, u_time * animation_speed_factor);
              opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);

              fragColor = vec4(color, opacity);
              fragColor.rgb *= fragColor.a;
            }
          `}
          uniforms={uniforms}
          maxFps={60}
        />
      </Canvas>
    </div>
  )
} 