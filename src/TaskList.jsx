import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>
        <h3>No tasks yet</h3>
        <p>Add your first task above to get started.</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      <div className="list-heading">
        <h2>Your Tasks</h2>
        <span>{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span>
      </div>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList