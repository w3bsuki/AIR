import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our AI-powered services',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm">
      {children}
    </div>
  )
} 