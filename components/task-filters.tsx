"use client"

import { Button } from "@/components/ui/button"
import type { FilterType } from "@/app/page"

interface TaskFiltersProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
  completedCount: number
}

export default function TaskFilters({ currentFilter, onFilterChange, activeCount, completedCount }: TaskFiltersProps) {
  return (
    <div className="mb-6 flex gap-2 border-b border-border pb-4">
      <Button
        variant={currentFilter === "all" ? "default" : "outline"}
        onClick={() => onFilterChange("all")}
        className="text-sm"
      >
        All
      </Button>
      <Button
        variant={currentFilter === "active" ? "default" : "outline"}
        onClick={() => onFilterChange("active")}
        className="text-sm"
      >
        Active ({activeCount})
      </Button>
      <Button
        variant={currentFilter === "completed" ? "default" : "outline"}
        onClick={() => onFilterChange("completed")}
        className="text-sm"
      >
        Completed ({completedCount})
      </Button>
    </div>
  )
}
