"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface KpiNumberProps {
  value: number | string
  className?: string
  duration?: number
}

export function KpiNumber({ value, className, duration = 1.5 }: KpiNumberProps) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // If value is a string (like "84% Savings"), don't animate
  if (typeof value === "string") {
    return <span className={cn("text-kpi", className)}>{value}</span>
  }

  const numericValue = Number(value)

  if (shouldReduceMotion || !isInView) {
    return <span className={cn("text-kpi", className)} ref={ref}>{numericValue}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={cn("text-kpi", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CountUpNumber value={numericValue} duration={duration} />
    </motion.span>
  )
}

function CountUpNumber({ value, duration }: { value: number; duration: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(startValue + (value - startValue) * easeOut)

      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  return <>{displayValue}</>
}

