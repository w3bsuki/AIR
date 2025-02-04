'use client'

import { ButtonColorful } from "@/components/ui/button-colorful";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react"

function ButtonDemo() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <ButtonColorful size="sm">
                Small Button
            </ButtonColorful>
            
            <ButtonColorful>
                Default Button
            </ButtonColorful>
            
            <ButtonColorful size="lg">
                Large Button
            </ButtonColorful>
        </div>
    )
}

export { ButtonDemo }