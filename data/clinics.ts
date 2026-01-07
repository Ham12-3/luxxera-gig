export interface Clinic {
  id: string
  name: string
  location: string
  country: string
  accreditations: string[]
  rating: number
  reviewCount: number
  surgeonName: string
  surgeonExpYears: number
  priceRange: {
    min: number
    max: number
  }
  imageUrl: string
  beforeAfterImages?: {
    before: string
    after: string
  }
  description: string
  tags: string[]
}

export const clinics: Clinic[] = [
  {
    id: "1",
    name: "Aegean Aesthetic Center",
    location: "Athens, Greece",
    country: "Greece",
    accreditations: ["JCI Accredited", "ISO Certified"],
    rating: 4.8,
    reviewCount: 127,
    surgeonName: "Dr. Elena Papadopoulos",
    surgeonExpYears: 20,
    priceRange: {
      min: 2200,
      max: 2600,
    },
    imageUrl: "/images/athen-greece.png",
    beforeAfterImages: {
      before: "/images/before-1.png",
      after: "/images/after-1.png",
    },
    description: "Premier aesthetic center specializing in hair restoration and cosmetic procedures.",
    tags: ["Hair Transplant", "Cosmetic Surgery"],
  },
  {
    id: "2",
    name: "Istanbul Cosmetic Health",
    location: "Istanbul, Turkey",
    country: "Turkey",
    accreditations: ["JCI Accredited", "ISO Certified"],
    rating: 4.7,
    reviewCount: 203,
    surgeonName: "Dr. Mehmet Yilmaz",
    surgeonExpYears: 15,
    priceRange: {
      min: 1800,
      max: 2400,
    },
    imageUrl: "/images/istanbul.png",
    beforeAfterImages: {
      before: "/images/before-2.png",
      after: "/images/after-2.png",
    },
    description: "Leading cosmetic health facility with state-of-the-art technology.",
    tags: ["Hair Transplant", "Dental", "Cosmetic Surgery"],
  },
  {
    id: "3",
    name: "Hellenic Dental Center",
    location: "Thessaloniki, Greece",
    country: "Greece",
    accreditations: ["JCI Accredited", "ISO Certified"],
    rating: 4.7,
    reviewCount: 89,
    surgeonName: "Dr. Nikos Konstantinou",
    surgeonExpYears: 18,
    priceRange: {
      min: 1500,
      max: 2000,
    },
    imageUrl: "/images/hellenic.png",
    beforeAfterImages: {
      before: "/images/before-2.png",
      after: "/images/after-3.png",
    },
    description: "Specialized dental and aesthetic procedures in a modern facility.",
    tags: ["Dental", "Cosmetic Dentistry"],
  },
]

export function getClinicById(id: string): Clinic | undefined {
  return clinics.find((clinic) => clinic.id === id)
}

