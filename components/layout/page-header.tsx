import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface PageHeaderProps {
  children: ReactNode
  className?: string
}

export function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <h1 className={cn("text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8", className)}>
      {children}
    </h1>
  )
}

