import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents Marketplace',
  description: 'Browse and deploy powerful AI agents for your business needs',
}

export default function AgentsLayout({
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