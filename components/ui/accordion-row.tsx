"use client"

import { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionRowProps {
  label: string
  children?: React.ReactNode
  defaultOpen?: boolean
  completed?: boolean
  onToggle?: (open: boolean) => void
}

export function AccordionRow({ 
  label, 
  children, 
  defaultOpen = false,
  completed = false,
  onToggle 
}: AccordionRowProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const shouldReduceMotion = useReducedMotion()

  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    onToggle?.(newState)
  }

  const chevronRotation = shouldReduceMotion ? 0 : isOpen ? 180 : 0

  return (
    <div className="space-y-2">
      <button
        onClick={handleToggle}
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors w-full text-left"
      >
        <div
          className={cn(
            "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
            completed
              ? "bg-primary border-primary"
              : "border-input bg-background"
          )}
        >
          {completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-3 h-3 bg-primary-foreground rounded-full"
            />
          )}
        </div>
        <span className="flex-1 text-sm">{label}</span>
        {children && (
          <motion.div
            animate={{ rotate: chevronRotation }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </motion.div>
        )}
      </button>
      
      {children && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? {} : { height: "auto", opacity: 1 }}
              exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pl-9 pr-2 pb-2">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

