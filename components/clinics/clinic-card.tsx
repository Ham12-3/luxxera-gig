import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Clinic } from "@/data/clinics"

interface ClinicCardProps {
  clinic: Clinic
  featured?: boolean
}

export function ClinicCard({ clinic, featured = false }: ClinicCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          } else if (i === fullStars && hasHalfStar) {
            return <Star key={i} className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
          } else {
            return <Star key={i} className="h-4 w-4 fill-none text-muted-foreground" />
          }
        })}
        <span className="ml-1 text-sm font-medium">{rating}</span>
      </div>
    )
  }

  if (featured) {
    return (
      <AnimatedCard>
        <CardHeader className="p-4 sm:p-6 pb-3">
          <CardTitle className="text-lg sm:text-xl font-semibold">Featured Clinic</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">{clinic.name}</h3>
            <p className="text-sm text-muted-foreground">{clinic.location}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {clinic.accreditations.map((acc, index) => {
              const badgeImage = acc === "JCI Accredited" 
                ? "/images/JCI-accredited.svg"
                : acc === "ISO Certified"
                ? "/images/ISO-certified.svg"
                : null
              
              return badgeImage ? (
                <Image
                  key={index}
                  src={badgeImage}
                  alt={acc}
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
              ) : (
                <Badge key={index} variant="secondary" className="gap-1">
                  <Check className="h-3 w-3" />
                  {acc}
                </Badge>
              )
            })}
          </div>

          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Surgeon:</span> {clinic.surgeonName}
            </p>
            <p className="text-muted-foreground">
              {clinic.surgeonExpYears}+ Years Experience
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={clinic.imageUrl}
              alt={clinic.name}
              fill
              className="object-cover"
            />
          </div>

          {clinic.beforeAfterImages && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 space-y-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border bg-muted/30 shadow-md">
                    <Image
                      src={clinic.beforeAfterImages.before}
                      alt="Before"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs font-medium text-center text-foreground">Before</p>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border bg-muted/30 shadow-md">
                    <Image
                      src={clinic.beforeAfterImages.after}
                      alt="After"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs font-medium text-center text-foreground">After</p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-2 sm:gap-3 px-2">
                  {renderStars(clinic.rating)}
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Check className="h-3 w-3 text-primary" />
                    Transparent Pricing
                  </p>
                </div>
              </div>
            </div>
          )}

          <PrimaryButton asChild className="w-full">
            <Link href={`/clinics/${clinic.id}`}>Safety & Results Info &gt;</Link>
          </PrimaryButton>
        </CardContent>
      </AnimatedCard>
    )
  }

  return (
    <AnimatedCard>
      <CardContent className="p-0">
        <div className="relative w-full aspect-video">
          <Image
            src={clinic.imageUrl}
            alt={clinic.name}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{clinic.name}</h3>
            <p className="text-sm text-muted-foreground">{clinic.location}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {clinic.accreditations.map((acc, index) => {
              const badgeImage = acc === "JCI Accredited" 
                ? "/images/JCI-accredited.svg"
                : acc === "ISO Certified"
                ? "/images/ISO-certified.svg"
                : null
              
              return badgeImage ? (
                <Image
                  key={index}
                  src={badgeImage}
                  alt={acc}
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                />
              ) : (
                <Badge key={index} variant="secondary" className="gap-1">
                  <Check className="h-3 w-3" />
                  {acc}
                </Badge>
              )
            })}
          </div>

          <div className="text-sm space-y-1">
            <p>
              <span className="font-medium">Surgeon:</span> {clinic.surgeonName}
            </p>
            <p className="text-muted-foreground">
              {clinic.surgeonExpYears}+ Years Experience
            </p>
          </div>

          <div className="flex items-center justify-between">
            {renderStars(clinic.rating)}
            <PrimaryButton asChild variant="outline" size="sm">
              <Link href={`/clinics/${clinic.id}`}>View Details &gt;</Link>
            </PrimaryButton>
          </div>
        </div>
      </CardContent>
    </AnimatedCard>
  )
}

