"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion()

    return (
      <motion.div
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        <Button
          ref={ref}
          className={cn(
            "transition-all duration-150 hover:brightness-110",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  }
)
PrimaryButton.displayName = "PrimaryButton"

