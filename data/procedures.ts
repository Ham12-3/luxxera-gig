export interface Procedure {
  id: string
  name: string
  category: string
  description: string
  averageCost: {
    us: { min: number; max: number }
    international: { min: number; max: number }
  }
}

export const procedures: Procedure[] = [
  {
    id: "hair-transplant",
    name: "Hair Transplant",
    category: "Cosmetic",
    description: "Advanced FUE hair transplant procedure",
    averageCost: {
      us: { min: 14000, max: 16000 },
      international: { min: 2200, max: 2600 },
    },
  },
  {
    id: "facelift",
    name: "Facelift",
    category: "Cosmetic",
    description: "Comprehensive facial rejuvenation",
    averageCost: {
      us: { min: 12000, max: 15000 },
      international: { min: 3500, max: 5000 },
    },
  },
  {
    id: "veneers",
    name: "Dental Veneers",
    category: "Dental",
    description: "Porcelain veneers for smile enhancement",
    averageCost: {
      us: { min: 1000, max: 2500 },
      international: { min: 300, max: 800 },
    },
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    category: "Dental",
    description: "Single or multiple dental implants",
    averageCost: {
      us: { min: 3000, max: 6000 },
      international: { min: 800, max: 2000 },
    },
  },
]

export function getProcedureById(id: string): Procedure | undefined {
  return procedures.find((proc) => proc.id === id)
}

