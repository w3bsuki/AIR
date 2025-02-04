import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demo - AI Agent Marketplace',
  description: 'See our AI agents in action',
}

export default function DemoLayout({
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