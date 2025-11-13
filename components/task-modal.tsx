"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"
import type { Task, StatusType } from "@/app/page"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (title: string, description: string, status: StatusType) => void
  editingTask: Task | null
}

export default function TaskModal({ isOpen, onClose, onSubmit, editingTask }: TaskModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<StatusType>("Pending")

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setDescription(editingTask.description)
      setStatus(editingTask.status)
    } else {
      setTitle("")
      setDescription("")
      setStatus("Pending")
    }
  }, [editingTask, isOpen])

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit(title.trim(), description.trim(), status)
      setTitle("")
      setDescription("")
      setStatus("Pending")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-end z-50">
      {/* Modal Slide-in from Right */}
      <div className="w-96 h-screen bg-white flex flex-col animate-in slide-in-from-right-full duration-300">
        {/* Header */}
        <div className="bg-blue-600 text-white px-6 py-4 flex items-center gap-3">
          <button onClick={onClose} className="p-1 hover:bg-blue-700 rounded transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold">{editingTask ? "Edit Task" : "Add Task"}</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <Input
              type="text"
              placeholder="Enter the title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              placeholder="Enter the description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusType)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            {editingTask ? "Update" : "ADD"}
          </Button>
        </div>
      </div>
    </div>
  )
}
