"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function AnimatedCard({ children, className, hover = true }: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion()

  const hoverAnimation = hover && !shouldReduceMotion
    ? {
        y: -3,
        transition: { duration: 0.18, ease: "easeOut" },
      }
    : {}

  return (
    <motion.div
      whileHover={hoverAnimation}
      className={cn(className)}
    >
      <Card className="w-full transition-all duration-180 ease-out hover:shadow-xl hover:border-primary/20">
        {children}
      </Card>
    </motion.div>
  )
}

