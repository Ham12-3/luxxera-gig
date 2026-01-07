import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Heart, Activity, Phone, Calendar } from "lucide-react"
import Link from "next/link"

interface AftercareCardProps {
  nextFollowUp?: string
}

export function AftercareCard({ nextFollowUp = "In 2 Days" }: AftercareCardProps) {
  return (
    <AnimatedCard>
      <CardHeader className="p-4 sm:p-6 pb-3">
        <CardTitle className="text-lg sm:text-xl font-semibold">Aftercare Support</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 space-y-4 pb-6">
        {nextFollowUp && (
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>Next Follow-Up: {nextFollowUp}</span>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          <PrimaryButton
            asChild
            variant="outline"
            size="sm"
            className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 h-auto min-h-[80px] sm:min-h-[90px] py-2.5 sm:py-3 w-full"
          >
            <Link href="/aftercare" className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 w-full">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-center">Healing Tips</span>
            </Link>
          </PrimaryButton>
          <PrimaryButton
            asChild
            variant="outline"
            size="sm"
            className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 h-auto min-h-[80px] sm:min-h-[90px] py-2.5 sm:py-3 w-full"
          >
            <Link href="/aftercare" className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 w-full">
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-center">Symptom Checker</span>
            </Link>
          </PrimaryButton>
          <PrimaryButton
            asChild
            variant="outline"
            size="sm"
            className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 h-auto min-h-[80px] sm:min-h-[90px] py-2.5 sm:py-3 w-full"
          >
            <Link href="/aftercare" className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 w-full">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-center">Contact Clinic</span>
            </Link>
          </PrimaryButton>
        </div>
      </CardContent>
    </AnimatedCard>
  )
}

