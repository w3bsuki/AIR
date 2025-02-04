import { Route } from 'next'

export const routes = {
  home: '/' as Route,
  signup: '/signup' as Route,
  demo: '/demo' as Route,
  agents: '/agents' as Route,
  services: '/services' as Route,
  research: '/research' as Route,
} as const

// For dynamic routes, we need a separate function
export function getAgentRoute(id: number): Route {
  return `/agents/${id}` as Route
} 