'use client'

import { ReactNode } from 'react'

interface FeatureSectionWrapperProps {
  children: ReactNode
}

export function FeatureSectionWrapper({ children }: FeatureSectionWrapperProps) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-[#0F172A]" />
      <div className="container relative z-10 mx-auto px-4">
        {children}
      </div>
    </section>
  )
} 