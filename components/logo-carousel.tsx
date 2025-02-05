'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { 
    id: 1, 
    alt: "NVIDIA", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nvidia.svg" 
  },
  { 
    id: 2, 
    alt: "OpenAI", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg" 
  },
  { 
    id: 3, 
    alt: "Google", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" 
  },
  { 
    id: 4, 
    alt: "Meta", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg" 
  },
  { 
    id: 5, 
    alt: "Microsoft", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" 
  },
  { 
    id: 6, 
    alt: "Anthropic", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/a.svg" 
  },
  { 
    id: 7, 
    alt: "Amazon", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" 
  },
  { 
    id: 8, 
    alt: "Apple", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg" 
  },
  { 
    id: 9, 
    alt: "Intel", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intel.svg" 
  },
  { 
    id: 10, 
    alt: "AMD", 
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amd.svg" 
  }
];

export function LogoCarousel() {
  return (
    <div className="w-full py-16 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-base font-medium text-white/60 mb-12">
          Trusted by innovative companies worldwide
        </h3>
      </div>

      <div className="relative flex overflow-hidden select-none">
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

        {/* First Carousel */}
        <div className="flex animate-carousel">
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="relative mx-8 w-[clamp(10rem,12vw,16rem)] h-16 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={30}
                className="w-auto h-8 opacity-50 invert"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Second Carousel */}
        <div className="flex animate-carousel" aria-hidden="true">
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}-duplicate`}
              className="relative mx-8 w-[clamp(10rem,12vw,16rem)] h-16 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={30}
                className="w-auto h-8 opacity-50 invert"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 