"use client"

import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { procedures } from "@/data/procedures"
import { useState } from "react"
import Link from "next/link"

export function QuoteForm() {
  const [treatmentType, setTreatmentType] = useState("hair-transplant")
  const [destination, setDestination] = useState("greece")
  const [dates, setDates] = useState("Oct 12 - Oct 18, 2025")

  const selectedProcedure = procedures.find((p) => p.id === treatmentType)
  const estimatedCost = selectedProcedure
    ? `${selectedProcedure.averageCost.international.min.toLocaleString()} - ${selectedProcedure.averageCost.international.max.toLocaleString()}`
    : "N/A"
  const usCost = selectedProcedure
    ? `${selectedProcedure.averageCost.us.min.toLocaleString()} - ${selectedProcedure.averageCost.us.max.toLocaleString()}`
    : "N/A"

  return (
    <AnimatedCard>
      <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
        <CardTitle className="text-lg sm:text-xl font-semibold">Your Treatment Quote</CardTitle>
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

        <div className="pt-4 space-y-2 border-t border-border">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Estimated Cost</p>
            <p className="text-3xl sm:text-4xl font-bold">${estimatedCost}</p>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Compare: US: ${usCost}
          </p>
        </div>

        <PrimaryButton asChild className="w-full" size="lg">
          <Link href="/quote">View Clinic Options &gt;</Link>
        </PrimaryButton>
      </CardContent>
    </AnimatedCard>
  )
}

