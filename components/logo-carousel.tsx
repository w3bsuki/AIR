'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", 
    alt: "Google" 
  },
  { 
    src: "https://www.cursor.so/cursor.svg", 
    alt: "Cursor" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", 
    alt: "OpenAI" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Microsoft_Azure_Logo.svg", 
    alt: "Microsoft Azure" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Anthropic_logo.svg", 
    alt: "Anthropic" 
  },
  { 
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg", 
    alt: "Notion" 
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Salesforce_logo.svg",
    alt: "Salesforce"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    alt: "GitHub"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    alt: "Netflix"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google Full"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
    alt: "Uber"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
    alt: "Slack"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
    alt: "Visa"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    alt: "Mastercard"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    alt: "Microsoft"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Intel_logo_%282020%2C_light_blue%29.svg",
    alt: "Intel"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Adobe_logo.svg",
    alt: "Adobe"
  }
];

export function LogoCarousel() {
  return (
    <div className="w-full bg-black/40 backdrop-blur-sm py-8 -mt-16">
      <div className="container mx-auto">
        <p className="text-center text-sm text-white/50 mb-8">Trusted by leading companies worldwide</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        <motion.div
          className="flex gap-12 py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative w-24 h-10 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain brightness-200 contrast-200 invert"
                unoptimized
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 