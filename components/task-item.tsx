"use client"

import type React from "react"

import { useState } from "react"
import type { Task } from "@/app/page"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Edit2, Check, X } from "lucide-react"

interface TaskItemProps {
  task: Task
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onUpdate: (id: string, title: string) => void
}

export default function TaskItem({ task, onDelete, onToggle, onUpdate }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(task.title)

  const handleSaveEdit = () => {
    if (editValue.trim()) {
      onUpdate(task.id, editValue.trim())
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setEditValue(task.title)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveEdit()
    } else if (e.key === "Escape") {
      handleCancelEdit()
    }
  }

  if (isEditing) {
    return (
      <div className="flex gap-2 p-3 bg-card rounded-lg border border-border animate-in fade-in-50 duration-200">
        <Input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1"
        />
        <Button size="sm" variant="default" onClick={handleSaveEdit} className="gap-1">
          <Check className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleCancelEdit} className="gap-1 bg-transparent">
          <X className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 animate-in fade-in-50 ${
        task.completed ? "bg-muted/50 border-border" : "bg-card border-border hover:border-primary/50"
      }`}
    >
      <Checkbox checked={task.completed} onCheckedChange={() => onToggle(task.id)} className="mt-0.5" />
      <span
        className={`flex-1 transition-all duration-200 ${
          task.completed ? "line-through text-muted-foreground" : "text-foreground"
        }`}
      >
        {task.title}
      </span>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsEditing(true)}
          className="gap-1 h-8 w-8 p-0"
          title="Edit task"
        >
          <Edit2 className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onDelete(task.id)}
          className="gap-1 h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
          title="Delete task"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
