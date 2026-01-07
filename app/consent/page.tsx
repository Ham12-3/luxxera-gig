"use client"

import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { ConsentChecklist } from "@/components/consent/consent-checklist"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"

export default function ConsentPage() {
  const consentChecklistItems = [
    { id: "1", label: "Risks & Recovery", checked: true },
    { id: "2", label: "Alternative Options", checked: true },
    { id: "3", label: "Aftercare Plan", checked: true },
    { id: "4", label: "Standard Consent", checked: true },
  ]

  const consentClinicsItems = [
    { id: "1", label: "Clinic commitment to your patient journey", checked: true },
    { id: "2", label: "Aftercare Plan", checked: true },
    { id: "3", label: "Aftercare call", checked: true },
    { id: "4", label: "Your treatment expectations, goals, and outcomes", checked: true },
  ]

  return (
    <Container>
      <div className="py-6 sm:py-8">
        <PageHeader>Consent</PageHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <AnimatedCard>
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">Consent Checklist</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ConsentChecklist items={consentChecklistItems} />
            </CardContent>
          </AnimatedCard>

          <AnimatedCard>
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">Consent Clinics</CardTitle>
            </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
            <div className="space-y-3">
              {consentClinicsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-lg"
                >
                  <div className="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <label className="flex-1 text-sm sm:text-base">{item.label}</label>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Informed Consent</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Acknowledge risks, recovery time, and potential complications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Confirm understanding of treatment options and alternatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Agree to follow aftercare instructions and attend follow-up appointments.</span>
                </li>
              </ul>
            </div>

            <PrimaryButton className="w-full" size="lg">
              Standards & Safety Information &gt;
            </PrimaryButton>
          </CardContent>
        </AnimatedCard>
      </div>

        {/* Doctor-Patient Consultation Image */}
        <div className="mt-6 sm:mt-8">
          <AnimatedCard>
            <CardContent className="p-0">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/doctor-patient-consultation.png"
                  alt="Doctor and patient consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
    </Container>
  )
}

