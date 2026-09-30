function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span>{task.title}</span>
      </div>

      <button
        className="delete"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;