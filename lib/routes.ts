export const routes = {
  home: '/',
  signup: '/signup',
  demo: '/demo',
  agents: '/agents',
  services: '/services',
  research: '/research',
} as const

export type Route = typeof routes[keyof typeof routes] 