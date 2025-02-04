import { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: 'Agent Details',
  description: 'View detailed information about this AI agent',
}

export default function AgentPage({ params }: Props) {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Agent {params.id}</h1>
      {/* Add agent details later */}
    </div>
  )
} 