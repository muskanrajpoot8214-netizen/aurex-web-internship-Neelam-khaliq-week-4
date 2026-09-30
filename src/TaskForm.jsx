import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const cleanInput = input.trim()

    if (!cleanInput) {
      setError('Please enter a task before adding it.')
      return
    }

    onAddTask(cleanInput)
    setInput('')
    setError('')
  }

  const handleChange = (event) => {
    setInput(event.target.value)
    if (error) setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-input">Add a new task</label>
      <div className="form-row">
        <input
          id="task-input"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="e.g. Learn React components"
          aria-describedby="task-error"
        />
        <button type="submit">+ Add Task</button>
      </div>
      {error && <p id="task-error" className="error">{error}</p>}
    </form>
  )
}

export default TaskForm