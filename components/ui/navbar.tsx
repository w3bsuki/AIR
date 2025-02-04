"use client"

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: JSX.Element
  items?: MenuItem[]
}

interface NavbarProps {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
  auth?: {
    login: {
      text: string
      url: string
    }
    signup: {
      text: string
      url: string
    }
  }
}

export const demoData = {
  logo: {
    url: "/",
    src: "/logo.png",
    alt: "AIDR.ai",
    title: "AIDR.ai",
  },
  menu: [
    {
      title: "AGENTS",
      url: "/agents",
      items: [
        {
          title: "Browse Agents",
          description: "Explore our marketplace of AI agents",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/agents",
        },
        {
          title: "Featured Agents",
          description: "Top performing AI agents",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/agents/featured",
        },
      ],
    },
    {
      title: "SOLUTIONS",
      url: "/solutions",
      items: [
        {
          title: "Enterprise",
          description: "AI solutions for businesses",
          icon: <Book className="size-5 shrink-0" />,
          url: "/solutions/enterprise",
        },
        {
          title: "Research",
          description: "Latest AI research and findings",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/solutions/research",
        },
      ],
    },
    {
      title: "ABOUT",
      url: "/about",
    },
  ],
  auth: {
    login: { text: "Sign In", url: "/login" },
    signup: { text: "Get Started", url: "/signup" },
  },
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-white">
        <NavigationMenuTrigger className="bg-transparent hover:bg-white/10">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3 bg-black/95 backdrop-blur-sm border border-white/10">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 text-white hover:bg-white/10"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">{subItem.title}</div>
                      {subItem.description && (
                        <p className="text-sm text-white/70">{subItem.description}</p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <a
      key={item.title}
      className="text-white hover:text-white/90 px-4 py-2 text-sm"
      href={item.url}
    >
      {item.title}
    </a>
  )
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline text-white">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 text-white hover:bg-white/10"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm text-white/70">{subItem.description}</p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold text-white">
      {item.title}
    </a>
  )
}

export function Navbar1({ logo = demoData.logo, menu = demoData.menu, auth = demoData.auth }: NavbarProps) {
  return (
    <section className="py-4 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="sm" className="text-white hover:text-white/90">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm" className="bg-white text-black hover:bg-white/90">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{logo.title}</span>
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 backdrop-blur-sm border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white">
                    <a href={logo.url} className="flex items-center gap-2">
                      <span className="text-xl font-bold">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="ghost" className="text-white hover:text-white/90">
                      <a href={auth.login.url}>{auth.login.text}</a>
                    </Button>
                    <Button asChild className="bg-white text-black hover:bg-white/90">
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
} 