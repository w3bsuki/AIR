import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up - AI Agent Marketplace',
  description: 'Create your account to get started with AI agents',
}

export default function SignupLayout({
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