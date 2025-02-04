'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { id: 1, alt: "Company 1" },
  { id: 2, alt: "Company 2" },
  { id: 3, alt: "Company 3" },
  { id: 4, alt: "Company 4" },
  { id: 5, alt: "Company 5" },
  { id: 6, alt: "Company 6" },
  { id: 7, alt: "Company 7" },
  { id: 8, alt: "Company 8" },
  { id: 9, alt: "Company 9" },
  { id: 10, alt: "Company 10" },
];

export function LogoCarousel() {
  return (
    <div className="w-full bg-black py-20 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-white/50 text-sm font-medium mb-12">
          Trusted by innovative companies worldwide
        </h3>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
        
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 items-center"
        >
          {[...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="relative w-32 h-12 flex-shrink-0 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
            >
              <span className="text-white/30 text-sm font-medium">
                {logo.alt}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 