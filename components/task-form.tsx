"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

interface TaskFormProps {
  onAddTask: (title: string) => void
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onAddTask(input.trim())
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" className="gap-2">
          <Plus className="w-4 h-4" />
          Add
        </Button>
      </div>
    </form>
  )
}
