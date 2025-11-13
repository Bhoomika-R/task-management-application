interface TaskHeaderProps {
  totalTasks: number
  completedCount: number
}

export default function TaskHeader({ totalTasks, completedCount }: TaskHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-foreground mb-2">My Tasks</h1>
      <p className="text-muted-foreground">
        {completedCount} of {totalTasks} completed
      </p>
    </div>
  )
}
