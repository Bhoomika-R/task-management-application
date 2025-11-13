"use client"

import type { Task } from "@/app/page"
import TaskItem from "./task-item"

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
  onUpdateTask: (id: string, title: string) => void
}

export default function TaskList({ tasks, onDeleteTask, onToggleTask, onUpdateTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No tasks yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDeleteTask} onToggle={onToggleTask} onUpdate={onUpdateTask} />
      ))}
    </div>
  )
}
