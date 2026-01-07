"use client"

import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { procedures } from "@/data/procedures"
import { useState } from "react"
import { ClinicCard } from "@/components/clinics/clinic-card"
import { clinics } from "@/data/clinics"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"

export default function QuotePage() {
  const [treatmentType, setTreatmentType] = useState("hair-transplant")
  const [destination, setDestination] = useState("greece")
  const [dates, setDates] = useState("Oct 12 - Oct 18, 2025")
  const [additionalDetails, setAdditionalDetails] = useState("")

  const selectedProcedure = procedures.find((p) => p.id === treatmentType)
  const estimatedCost = selectedProcedure
    ? `${selectedProcedure.averageCost.international.min.toLocaleString()} - ${selectedProcedure.averageCost.international.max.toLocaleString()}`
    : "N/A"
  const usCost = selectedProcedure
    ? `${selectedProcedure.averageCost.us.min.toLocaleString()} - ${selectedProcedure.averageCost.us.max.toLocaleString()}`
    : "N/A"

  const filteredClinics = clinics.filter((clinic) => {
    if (destination === "greece") {
      return clinic.country === "Greece"
    } else if (destination === "turkey") {
      return clinic.country === "Turkey"
    }
    return true
  })

  return (
    <Container>
      <div className="py-6 sm:py-8">
        <PageHeader>Get a Quote</PageHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <AnimatedCard>
              <CardHeader className="p-4 sm:p-6 pb-3">
                <CardTitle className="text-lg sm:text-xl font-semibold">Treatment Details</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold">Treatment Type</label>
                <Select
                  value={treatmentType}
                  onChange={(e) => setTreatmentType(e.target.value)}
                >
                  {procedures.map((proc) => (
                    <option key={proc.id} value={proc.id}>
                      {proc.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold">Destination</label>
                <Select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="greece">Greece</option>
                  <option value="turkey">Turkey</option>
                  <option value="spain">Spain</option>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold">Preferred Dates</label>
                <Input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="Select dates"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold">Additional Medical Details</label>
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  placeholder="Any additional information..."
                />
              </div>

              <div className="pt-4 space-y-2 border-t border-border">
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Estimated Cost</p>
                  <p className="text-3xl sm:text-4xl font-bold">${estimatedCost}</p>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Compare: US: ${usCost}
                </p>
              </div>

              <PrimaryButton className="w-full" size="lg">
                View Details &gt;
              </PrimaryButton>
            </CardContent>
          </AnimatedCard>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Available Clinics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredClinics.map((clinic) => (
              <ClinicCard key={clinic.id} clinic={clinic} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </Container>
  )
}

