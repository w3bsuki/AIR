import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - AI Agent Marketplace',
  description: 'Sign in to your account',
}

export default function LoginLayout({
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