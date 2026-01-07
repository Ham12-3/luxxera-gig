import { ClinicCard } from "@/components/clinics/clinic-card"
import { clinics } from "@/data/clinics"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"

export default function ClinicsPage() {
  return (
    <Container>
      <div className="py-6 sm:py-8">
        <PageHeader>Clinics</PageHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>
      </div>
    </Container>
  )
}

