'use client'

import Image from "next/image"

const LOGOS = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Intel_logo_%282020%2C_dark_blue%29.svg",
    alt: "Intel",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    alt: "Tesla",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
    alt: "Firefox",
  }
]

export function LogoCarousel() {
  return (
    <div className="w-full py-16">
      <div className="container">
        <h3 className="text-center text-base font-medium text-foreground mb-12">
          Trusted by innovative companies worldwide
        </h3>
        <div className="relative">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Logo marquee */}
          <div className="flex overflow-hidden select-none">
            <div className="flex animate-marquee">
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="mx-12 w-[160px] h-[90px] shrink-0 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative w-[120px] h-[60px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex animate-marquee" aria-hidden="true">
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <div
                  key={idx + "clone"}
                  className="mx-12 w-[160px] h-[90px] shrink-0 flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative w-[120px] h-[60px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 