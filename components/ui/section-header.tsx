interface SectionHeaderProps {
  title: string
  description: string
  className?: string
}

export function SectionHeader({ title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-white/70 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  )
} 