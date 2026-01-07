"use client"

import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { AftercareCard } from "@/components/aftercare/aftercare-card"
import { aftercareTips, symptomQuestions } from "@/data/aftercare"
import { Heart, Activity, Phone, Calendar, TrendingUp, Droplet } from "lucide-react"
import { useState } from "react"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"

export default function AftercarePage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId]
    )
  }

  const symptomIcons = {
    swelling: Activity,
    bleeding: Droplet,
    pain: TrendingUp,
  }

  return (
    <Container>
      <div className="py-6 sm:py-8 pb-24 sm:pb-12">
        <PageHeader>Aftercare</PageHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <AnimatedCard>
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">Next Follow-Up Checklist</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
              <div className="space-y-3">
                {[
                  { id: "1", label: "Healing Tips", checked: true },
                  { id: "2", label: "Symptom Checker", checked: true },
                  { id: "3", label: "Aftercare Plan", checked: true },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-2 rounded-lg"
                  >
                    <div className="w-5 h-5 rounded border-2 border-primary bg-primary flex items-center justify-center">
                      <Heart className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <label className="flex-1 text-sm sm:text-base">{item.label}</label>
                  </div>
                ))}
              </div>

              <PrimaryButton className="w-full" size="lg">
                Ready to Book {'>'}
              </PrimaryButton>
            </CardContent>
          </AnimatedCard>

          <AftercareCard nextFollowUp="In 2 Days" />
        </div>

        <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
          <AnimatedCard>
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">Healing Tips</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aftercareTips.map((tip) => (
                  <div key={tip.id} className="p-4 rounded-lg bg-muted/50">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard>
            <CardHeader className="p-4 sm:p-6 pb-3">
              <CardTitle className="text-lg sm:text-xl font-semibold">Symptom Checker</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 space-y-4 sm:space-y-6">
              <div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Are you experiencing any of the following?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {symptomQuestions.map((question) => {
                    const Icon = symptomIcons[question.id as keyof typeof symptomIcons] || Activity
                    const isSelected = selectedSymptoms.includes(question.id)
                    return (
                      <button
                        key={question.id}
                        onClick={() => toggleSymptom(question.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-colors ${
                          isSelected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            isSelected ? "bg-primary" : "bg-muted"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              isSelected ? "text-primary-foreground" : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <span className="text-sm sm:text-base font-medium text-center">{question.question.split("?")[0]}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {selectedSymptoms.length > 0 && (
                <PrimaryButton className="w-full" size="lg">
                  Escalate to Clinic {'>'}
                </PrimaryButton>
              )}
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
    </Container>
  )
}
