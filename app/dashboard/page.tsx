import { KPICard } from "@/components/cards/kpi-card"
import { ClinicCard } from "@/components/clinics/clinic-card"
import { QuoteForm } from "@/components/quote/quote-form"
import { ConsentChecklist } from "@/components/consent/consent-checklist"
import { AftercareCard } from "@/components/aftercare/aftercare-card"
import { clinics } from "@/data/clinics"
import Image from "next/image"
import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"

export default function DashboardPage() {
  const featuredClinic = clinics[0]

  const nextStepsItems = [
    { label: "Upload Medical Documents", completed: false },
    { label: "Schedule Consultation Call", completed: false },
    { label: "Review Consent Forms", completed: false },
  ]

  const consentItems = [
    { id: "1", label: "Risks & Recovery", checked: true },
    { id: "2", label: "Alternative Options", checked: false },
    { id: "3", label: "Aftercare Plan", checked: true },
  ]

  return (
    <Container>
      <div className="py-6 sm:py-8">
        <PageHeader>Dashboard</PageHeader>

        {/* Row 1: KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <KPICard
            type="trust"
            value={92}
            subtitle="Verified & Safe"
            ctaText="See Safety Standards >"
            ctaHref="/consent"
          />
          <KPICard
            type="savings"
            value="84% Savings"
            subtitle="Compared to US Rates"
          />
          <KPICard
            type="next-steps"
            items={nextStepsItems}
          />
        </div>

        {/* Row 2: Featured Clinic and Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <ClinicCard clinic={featuredClinic} featured />
          <QuoteForm />
        </div>

        {/* Row 3: Consent Checklist and Aftercare */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <ConsentChecklist items={consentItems} />
          <AftercareCard />
        </div>

        {/* Medical Team & Professional Care Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatedCard>
            <CardContent className="p-0">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/medical-team.png"
                  alt="Professional medical team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Expert Medical Team</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Our experienced professionals are dedicated to your care and safety.
                </p>
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard>
            <CardContent className="p-0">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/medical-professional-care.png"
                  alt="Professional medical care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Personalized Care</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Every patient receives individualized attention and care throughout their journey.
                </p>
              </div>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
    </Container>
  )
}

