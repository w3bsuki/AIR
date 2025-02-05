"use client"

import React from "react"
import { DIcons } from "dicons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Chatbot() {
  return (
    <div className="w-full">
      <div className="relative mx-auto w-full items-center justify-center">
        <div className="relative flex w-full items-center justify-center p-4">
          <div className="z-20 w-full">
            <ScrollArea className="h-[360px] w-full overflow-auto p-1">
              <div className="px-6">
                <div className="relative flex h-full w-full justify-center text-center">
                  <h1 className="flex select-none py-2 text-center text-2xl font-extrabold leading-none tracking-tight md:text-2xl lg:text-4xl">
                    <span className="px-2">AI.</span>
                    <span className="px-2">Chat.</span>
                    <span className="px-2">Experience.</span>
                  </h1>
                </div>
                <p className="md:text-md lg:text-md mx-auto mt-1 text-center text-xs text-primary/60 md:max-w-2xl">
                  How can I help you today?
                </p>
              </div>
              <div id="chat" className="h-38 w-full">
                <div className="">
                  <div className={cn("pt-4")}>
                    <div className="space-y-2 overflow-hidden p-2">
                      <p className="font-bold text-primary"> </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="relative mt-2 w-full">
              <form>
                <div className="">
                  <Input className="pl-12" placeholder="Ask something with AI" />
                </div>
              </form>

              <Button variant="default" size="icon" className="absolute left-1.5 top-1.5 h-7 rounded-sm">
                <DIcons.Plus className="h-5 w-5" />
                <span className="sr-only">New Chat</span>
              </Button>

              <Button
                type="submit"
                variant="default"
                size="icon"
                className="absolute right-1.5 top-1.5 h-7 rounded-sm"
              >
                <DIcons.Send className="mx-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

