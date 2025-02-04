export const routes = {
  home: '/',
  signup: '/signup',
  demo: '/demo',
  agents: '/agents',
  agent: (id: number) => `/agents/${id}` as const,
  services: '/services',
  research: '/research',
} as const

export type Route = typeof routes[keyof typeof routes] 