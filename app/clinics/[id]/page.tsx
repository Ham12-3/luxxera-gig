import { getClinicById } from "@/data/clinics"
import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Check, Star, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ClinicDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ClinicDetailPage({ params }: ClinicDetailPageProps) {
  const { id } = await params
  const clinic = getClinicById(id)

  if (!clinic) {
    notFound()
  }

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          } else if (i === fullStars && hasHalfStar) {
            return <Star key={i} className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />
          } else {
            return <Star key={i} className="h-5 w-5 fill-none text-muted-foreground" />
          }
        })}
        <span className="ml-2 text-lg font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground">({clinic.reviewCount} reviews)</span>
      </div>
    )
  }

  return (
    <Container>
      <div className="py-6 sm:py-8">
        <Link
          href="/clinics"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 sm:mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Clinics
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{clinic.name}</h1>
              <p className="text-sm sm:text-base text-muted-foreground">{clinic.location}</p>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <Image
                src={clinic.imageUrl}
                alt={clinic.name}
                fill
                className="object-cover"
              />
            </div>

          <AnimatedCard className="w-full">
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">About</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <p className="text-sm sm:text-base text-muted-foreground">{clinic.description}</p>
            </CardContent>
          </AnimatedCard>

          {clinic.beforeAfterImages && (
            <AnimatedCard className="w-full">
              <CardHeader className="p-4 sm:p-6 pb-3">
                <CardTitle className="text-lg sm:text-xl font-semibold">Before & After</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border bg-muted/30 shadow-lg">
                      <Image
                        src={clinic.beforeAfterImages.before}
                        alt="Before"
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-foreground">Before</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-border bg-muted/30 shadow-lg">
                      <Image
                        src={clinic.beforeAfterImages.after}
                        alt="After"
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-foreground">After</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          )}

          {/* Procedure-Specific Images */}
          {clinic.tags.some(tag => tag.toLowerCase().includes("hair")) && (
            <AnimatedCard className="w-full">
              <CardHeader className="p-4 sm:p-6 pb-3">
                <CardTitle className="text-lg sm:text-xl font-semibold">Our Procedure</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/hair-transplant.png"
                    alt="Hair transplant procedure"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mt-3">
                  Our expert team uses advanced techniques to ensure natural-looking results with minimal discomfort.
                </p>
              </CardContent>
            </AnimatedCard>
          )}

          {clinic.tags.some(tag => tag.toLowerCase().includes("dental")) && (
            <AnimatedCard className="w-full">
              <CardHeader className="p-4 sm:p-6 pb-3">
                <CardTitle className="text-lg sm:text-xl font-semibold">Our Procedure</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/dental-examine.png"
                    alt="Dental examination"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mt-3">
                  State-of-the-art dental care with modern equipment and experienced professionals.
                </p>
              </CardContent>
            </AnimatedCard>
          )}
        </div>

        <div className="lg:col-span-4">
          <AnimatedCard className="w-full h-fit self-start lg:sticky lg:top-24">
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">Details</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">Rating</p>
                {renderStars(clinic.rating)}
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1.5">Accreditations</p>
                <div className="flex flex-wrap gap-2">
                  {clinic.accreditations.map((acc, index) => (
                    <Badge key={index} variant="secondary" className="gap-1">
                      <Check className="h-3 w-3" />
                      {acc}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">Surgeon</p>
                <p className="text-sm sm:text-base font-medium">{clinic.surgeonName}</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {clinic.surgeonExpYears}+ Years Experience
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">Price Range</p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  ${clinic.priceRange.min.toLocaleString()} - ${clinic.priceRange.max.toLocaleString()}
                </p>
              </div>

              <PrimaryButton className="w-full" size="lg">
                Get a Quote
              </PrimaryButton>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
      </div>
    </Container>
  )
}

