import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent } from "@/components/ui/card"
import { KpiNumber } from "@/components/ui/kpi-number"
import { AccordionRow } from "@/components/ui/accordion-row"
import { Shield, Sparkles, CheckCircle2, PiggyBank } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface KPICardProps {
  type: "trust" | "savings" | "next-steps"
  value?: string | number
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  items?: Array<{ label: string; completed?: boolean }>
}

export function KPICard({ type, value, subtitle, ctaText, ctaHref, items }: KPICardProps) {
  const icons = {
    trust: Shield,
    savings: PiggyBank,
    "next-steps": CheckCircle2,
  }

  const Icon = icons[type]

  if (type === "next-steps" && items) {
    return (
      <AnimatedCard>
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
            </div>
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Next Steps</h3>
          <div className="space-y-2 sm:space-y-3">
            {items.map((item, index) => (
              <AccordionRow
                key={index}
                label={item.label}
                completed={item.completed}
              />
            ))}
          </div>
        </CardContent>
      </AnimatedCard>
    )
  }

  return (
    <AnimatedCard>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          {type === "savings" ? (
            <div className="p-1.5 sm:p-2 rounded-lg bg-orange-500/20">
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
            </div>
          ) : (
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
          )}
          {type === "savings" && (
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
          )}
        </div>
        {value && (
          <div className="mb-2">
            <div className="text-3xl sm:text-4xl font-bold">
              {typeof value === 'number' ? <KpiNumber value={value} /> : value}
            </div>
          </div>
        )}
        {subtitle && (
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{subtitle}</p>
        )}
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="text-sm sm:text-base text-primary hover:underline inline-flex items-center gap-1"
          >
            {ctaText}
          </Link>
        )}
      </CardContent>
    </AnimatedCard>
  )
}

