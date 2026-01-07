import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "default" | "text" | "circular" | "rectangular"
}

export function Skeleton({ className, variant = "default" }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-muted rounded"
  
  const variantClasses = {
    default: "rounded",
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-none",
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    />
  )
}

export function SkeletonImage({ className }: { className?: string }) {
  return <Skeleton className={cn("w-full", className)} variant="rectangular" />
}

export function SkeletonText({ lines = 1, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} variant="text" className={i === lines - 1 ? "w-3/4" : "w-full"} />
      ))}
    </div>
  )
}

