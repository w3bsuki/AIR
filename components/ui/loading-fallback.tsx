import { cn } from "@/lib/utils"

interface LoadingFallbackProps {
  className?: string
}

export function LoadingFallback({ className }: LoadingFallbackProps) {
  return (
    <div 
      className={cn(
        "w-full animate-pulse bg-muted/5 rounded-lg",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer",
        className
      )}
      style={{ 
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    />
  )
} 