function TaskItem({ task, onToggle, onDelete }) {
  return (
    <article className={`task-item ${task.completed ? 'completed' : ''}`}>
      <button
        className="check-button"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark task incomplete' : 'Mark task complete'}
      >
        {task.completed ? '✓' : ''}
      </button>

      <div className="task-content">
        <span className="task-title">{task.title}</span>
        <small>{task.completed ? 'Completed' : 'In progress'}</small>
      </div>

      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </article>
  )
}

export default TaskItem