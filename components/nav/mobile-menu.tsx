"use client"

import { useState, useEffect, createContext, useContext } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

interface NavLink {
  href: string
  label: string
}

interface MobileMenuContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const MobileMenuContext = createContext<MobileMenuContextType | null>(null)

export function MobileMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export function MobileMenuButton() {
  const context = useContext(MobileMenuContext)
  if (!context) return null
  
  const { isOpen, setIsOpen } = context

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-md hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  )
}

export function MobileMenuPanel({ navLinks, pathname }: { navLinks: NavLink[]; pathname: string }) {
  const context = useContext(MobileMenuContext)
  const shouldReduceMotion = useReducedMotion()
  
  if (!context) return null
  
  const { isOpen, setIsOpen } = context

  const handleClose = () => setIsOpen(false)
  const handleLinkClick = () => setIsOpen(false)

  const animationDuration = shouldReduceMotion ? 0 : 0.3
  const animationEase = "easeOut"

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Translucent Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: animationDuration, ease: animationEase }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Menu Panel - Positioned below header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: animationDuration, 
                ease: animationEase,
                type: "tween"
              }}
              className="absolute left-0 right-0 top-full mt-2 mx-4 rounded-2xl bg-card/95 backdrop-blur-md border border-white/10 shadow-2xl z-50 md:hidden"
            >
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || 
                    (link.href !== "/dashboard" && pathname?.startsWith(link.href))
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "block w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground active:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
