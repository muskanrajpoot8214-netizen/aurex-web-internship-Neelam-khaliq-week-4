function TaskForm({ task, setTask, addTask }) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <button onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;