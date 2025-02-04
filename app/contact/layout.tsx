import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - AI Agent Marketplace',
  description: 'Get in touch with our team',
}

export default function ContactLayout({
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