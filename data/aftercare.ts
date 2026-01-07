export interface AftercareTip {
  id: string
  title: string
  description: string
  category: string
}

export interface SymptomQuestion {
  id: string
  question: string
  options: string[]
  severity: "mild" | "moderate" | "severe"
}

export const aftercareTips: AftercareTip[] = [
  {
    id: "1",
    title: "Keep the area clean",
    description: "Gently clean the treated area with recommended solutions. Avoid harsh scrubbing.",
    category: "Hygiene",
  },
  {
    id: "2",
    title: "Avoid strenuous activities",
    description: "Rest for the first 48 hours. Avoid heavy lifting or intense exercise for at least one week.",
    category: "Activity",
  },
  {
    id: "3",
    title: "Follow medication schedule",
    description: "Take prescribed medications exactly as directed. Do not skip doses.",
    category: "Medication",
  },
  {
    id: "4",
    title: "Protect from sun exposure",
    description: "Wear protective clothing and use SPF 50+ sunscreen when going outside.",
    category: "Protection",
  },
  {
    id: "5",
    title: "Stay hydrated",
    description: "Drink plenty of water to aid in the healing process.",
    category: "Nutrition",
  },
]

export const symptomQuestions: SymptomQuestion[] = [
  {
    id: "swelling",
    question: "Are you experiencing swelling?",
    options: ["Mild", "Moderate", "Severe"],
    severity: "moderate",
  },
  {
    id: "bleeding",
    question: "Are you experiencing bleeding?",
    options: ["Minimal", "Moderate", "Heavy"],
    severity: "severe",
  },
  {
    id: "pain",
    question: "Are you experiencing increased pain?",
    options: ["Mild", "Moderate", "Severe"],
    severity: "moderate",
  },
]

