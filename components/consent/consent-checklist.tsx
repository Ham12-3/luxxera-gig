"use client"

import { AnimatedCard } from "@/components/ui/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

interface ConsentChecklistProps {
  items: Array<{ id: string; label: string; checked: boolean }>
  onItemChange?: (id: string, checked: boolean) => void
}

export function ConsentChecklist({ items: initialItems, onItemChange }: ConsentChecklistProps) {
  const [items, setItems] = useState(initialItems)

  const handleChange = (id: string, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked } : item))
    )
    onItemChange?.(id, checked)
  }

  const allChecked = items.every((item) => item.checked)

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <Checkbox
              checked={item.checked}
              onChange={(e) => handleChange(item.id, e.target.checked)}
            />
            <label className="flex-1 text-sm sm:text-base cursor-pointer">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <PrimaryButton
        className="w-full"
        disabled={!allChecked}
        variant={allChecked ? "default" : "secondary"}
      >
        Ready to Book {'>'}
      </PrimaryButton>
    </div>
  )
}
