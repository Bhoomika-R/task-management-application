"use client"

import type { Task } from "@/app/page"
import TaskCard from "@/components/task-card"
import { Plus } from "lucide-react"

interface TaskPanelProps {
  tasks: Task[]
  onAddTask: () => void
  onEditTask: (task: Task) => void
  onDeleteTask: (id: string) => void
}

export default function TaskPanel({ tasks, onAddTask, onEditTask, onDeleteTask }: TaskPanelProps) {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">TODO APP</h2>
        <button
          onClick={onAddTask}
          className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            <p>No tasks found</p>
          </div>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} onEdit={onEditTask} onDelete={onDeleteTask} />)
        )}
      </div>
    </div>
  )
}
