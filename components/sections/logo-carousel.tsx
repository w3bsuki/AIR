'use client'

import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useEffect, useState, memo } from "react"

const LOGOS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
    width: 100,
    height: 40,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
    width: 100,
    height: 40,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Intel_logo_%282020%2C_dark_blue%29.svg",
    alt: "Intel",
    width: 100,
    height: 40,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    alt: "Tesla",
    width: 100,
    height: 40,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
    width: 100,
    height: 40,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
    alt: "Firefox",
    width: 100,
    height: 40,
  }
] as const

function LogoCarouselComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full py-8 md:py-12">
        <div className="container">
          <div className="h-[40px] animate-pulse bg-muted/5 rounded-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full py-8 md:py-12 overflow-hidden">
      <div className="container">
        <h3 className="text-center text-base font-medium text-foreground mb-8">
          Trusted by innovative companies worldwide
        </h3>
        <div className="relative mx-auto max-w-6xl">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Logo row */}
          <div className="flex items-center">
            <div 
              className={`flex items-center gap-12 ${!isMobile ? 'animate-marquee' : ''}`}
              style={{ 
                willChange: 'transform',
                paddingLeft: isMobile ? '0' : '100%',
              }}
            >
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[100px] h-[40px] relative grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="100px"
                    className="object-contain"
                    priority={idx < 6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(LogoCarouselComponent) 