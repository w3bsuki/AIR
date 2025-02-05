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
    <div className="w-full py-20 border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-muted-foreground text-sm font-medium mb-12">
          Trusted by innovative companies worldwide
        </h3>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
        
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-16 items-center"
        >
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <motion.div
              key={`${logo.id}-${idx}`}
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-12 flex-shrink-0 rounded-xl bg-background/50 border border-border/50 flex items-center justify-center hover:border-border hover:bg-accent/5 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={30}
                className="w-auto h-6 opacity-50 hover:opacity-100 transition-opacity duration-300 dark:invert"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex gap-16 items-center absolute left-[calc(100%+1rem)]"
        >
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <motion.div
              key={`${logo.id}-${idx}-duplicate`}
              whileHover={{ scale: 1.05 }}
              className="relative w-32 h-12 flex-shrink-0 rounded-xl bg-background/50 border border-border/50 flex items-center justify-center hover:border-border hover:bg-accent/5 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={30}
                className="w-auto h-6 opacity-50 hover:opacity-100 transition-opacity duration-300 dark:invert"
                unoptimized
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 