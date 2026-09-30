import { useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  const completedTasks = tasks.filter(
    (item) => item.completed
  ).length;

  const pendingTasks = tasks.filter(
    (item) => !item.completed
  ).length;

  return (
    <div className="app">
      <div className="container">

        <Header />

        <TaskForm
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <div className="stats">
          <div>
            <strong>{tasks.length}</strong>
            <span>Total Tasks</span>
          </div>

          <div>
            <strong>{completedTasks}</strong>
            <span>Completed</span>
          </div>

          <div>
            <strong>{pendingTasks}</strong>
            <span>Pending</span>
          </div>
        </div>

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        <footer>
          AUREX React Internship • Task Manager
        </footer>

      </div>
    </div>
  );
}

export default App;