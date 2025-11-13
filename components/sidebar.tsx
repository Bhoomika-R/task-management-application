"use client"

import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import type { StatusType } from "@/app/page"

interface SidebarProps {
  statusCounts: Record<string, number>
  selectedStatus: StatusType | "All"
  onStatusChange: (status: StatusType | "All") => void
  searchQuery: string
  onSearchChange: (query: string) => void
  onAddClick: () => void
}

export default function Sidebar({
  statusCounts,
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
  onAddClick,
}: SidebarProps) {
  const statuses: (StatusType | "All")[] = ["All", "In Progress", "Pending", "Completed"]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-amber-100 text-amber-800"
      case "Pending":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusDot = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-amber-500"
      case "Pending":
        return "bg-blue-500"
      case "Completed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white bg-blue-600 px-4 py-3 rounded">TODO APP</h1>
      </div>

      {/* Search */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search To-Do"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-gray-50 border-gray-200"
        />
      </div>

      {/* Status Filters */}
      <div className="space-y-3 flex-1">
        {statuses.map((status) => (
          <div key={status}>
            <button
              onClick={() => onStatusChange(status)}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                selectedStatus === status
                  ? "bg-gray-200 font-semibold text-gray-900"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {status !== "All" && <span className={`w-2 h-2 rounded-full ${getStatusDot(status)}`}></span>}
                  {status}
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  (
                  {status === "All"
                    ? Object.values(statusCounts).reduce((a, b) => a + b, 0)
                    : statusCounts[status as StatusType] || 0}
                  )
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <button
        onClick={onAddClick}
        className="fixed bottom-6 left-6 w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
      >
        <Plus className="w-8 h-8" />
      </button>
    </aside>
  )
}
