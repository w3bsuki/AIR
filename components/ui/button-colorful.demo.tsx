'use client'

import { ButtonColorful } from "@/components/ui/button-colorful";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react"

function ButtonDemo() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <ButtonColorful size="sm" href="#">
                Small Button
            </ButtonColorful>
            
            <ButtonColorful href="#">
                Default Button
            </ButtonColorful>
            
            <ButtonColorful size="lg" href="#">
                Large Button
            </ButtonColorful>
        </div>
    )
}

export { ButtonDemo }