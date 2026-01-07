"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { MobileMenuProvider, MobileMenuButton, MobileMenuPanel } from "@/components/nav/mobile-menu"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/clinics", label: "Clinics" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/consent", label: "Consent" },
  { href: "/aftercare", label: "Aftercare" },
]

export function TopNav() {
  const pathname = usePathname()

  return (
    <MobileMenuProvider>
      <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
              <Image
                src="/images/new-logo.png"
                alt="Patient Confidence Hub"
                width={220}
                height={48}
                className="h-8 sm:h-10 w-auto object-contain flex-shrink-0"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (link.href !== "/dashboard" && pathname?.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                      isActive
                        ? "text-foreground border-b-2 border-primary pb-1"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Right side: User Menu + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* User Menu */}
              <DropdownMenu
                trigger={
                  <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
                    <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                      <AvatarImage src="/images/avatar-img.png" alt="Sarah" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <span className="hidden lg:inline text-sm font-medium">Sarah</span>
                  </div>
                }
              >
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <MobileMenuButton />
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Panel - Positioned relative to nav */}
        <MobileMenuPanel navLinks={navLinks} pathname={pathname} />
      </nav>
    </MobileMenuProvider>
  )
}
