"use client"

import type { Task } from "@/app/page"
import { Edit2, Trash2 } from "lucide-react"
import { useState } from "react"

interface TaskCardProps {
  task: Task
  onEdit: (task: Task) => void
  onDelete: (id: string) => void
}

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const [isHovering, setIsHovering] = useState(false)

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

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base line-clamp-2">{task.title}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{task.description}</p>
          <div className="flex items-center gap-3 mt-3">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${getStatusColor(task.status)}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(task.status)}`}></span>
              {task.status}
            </span>
            <span className="text-xs text-gray-500">{formatDate(task.createdAt)}</span>
          </div>
        </div>
        <div className={`flex gap-2 transition-opacity ${isHovering ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="Edit"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
            title="Delete"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
