"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import TaskPanel from "@/components/task-panel"
import TaskModal from "@/components/task-modal"

export interface Task {
  id: string
  title: string
  description: string
  status: "In Progress" | "Pending" | "Completed"
  createdAt: number
}

export type StatusType = "In Progress" | "Pending" | "Completed"

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isHydrated, setIsHydrated] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<StatusType | "All">("All")

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks))
      } catch (e) {
        console.error("Failed to load tasks:", e)
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks, isHydrated])

  const addTask = (title: string, description: string, status: StatusType) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status,
      createdAt: Date.now(),
    }
    setTasks((prev) => [newTask, ...prev])
    setIsModalOpen(false)
  }

  const updateTask = (id: string, title: string, description: string, status: StatusType) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, title, description, status } : task)))
    setEditingTask(null)
    setIsModalOpen(false)
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "All" || task.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  const statusCounts = {
    "In Progress": tasks.filter((t) => t.status === "In Progress").length,
    Pending: tasks.filter((t) => t.status === "Pending").length,
    Completed: tasks.filter((t) => t.status === "Completed").length,
  }

  const handleOpenAddModal = () => {
    setEditingTask(null)
    setIsModalOpen(true)
  }

  const handleOpenEditModal = (task: Task) => {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  if (!isHydrated) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <main className="flex h-screen bg-gray-100">
      <Sidebar
        statusCounts={statusCounts}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddClick={handleOpenAddModal}
      />
      <TaskPanel
        tasks={filteredTasks}
        onAddTask={handleOpenAddModal}
        onEditTask={handleOpenEditModal}
        onDeleteTask={deleteTask}
      />
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingTask(null)
        }}
        onSubmit={(title, description, status) => {
          if (editingTask) {
            updateTask(editingTask.id, title, description, status)
          } else {
            addTask(title, description, status)
          }
        }}
        editingTask={editingTask}
      />
    </main>
  )
}
