import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty">
          <h3>No Tasks Yet</h3>
          <p>Add your first task above.</p>
        </div>
      ) : (
        tasks.map((item) => (
          <TaskItem
            key={item.id}
            task={item}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;