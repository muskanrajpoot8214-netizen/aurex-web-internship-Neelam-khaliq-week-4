# AUREX React Task Manager

A React-based Task Manager developed as part of the AUREX Internship – Month 2, Week 1.

## Project Overview

This project is a simple and responsive Task Manager built using React.js and Vite.

The application allows users to:

* Add new tasks
* View tasks dynamically
* Mark tasks as completed
* Delete tasks
* Prevent empty tasks from being added
* Add a task by pressing the Enter key

## Technologies Used

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

## Features

### 1. Add Tasks

Users can enter a task in the input field and click the **Add Task** button.

### 2. Dynamic Task List

Tasks are displayed dynamically using React's `.map()` method.

### 3. Complete Tasks

Users can mark a task as completed using the checkbox.

### 4. Delete Tasks

Users can remove a task using the **Delete** button.

### 5. Empty Task Validation

The application does not allow empty tasks to be added.

### 6. Enter Key Support

Users can press the **Enter** key to add a task.

## Component Structure

```text
App
├── Header
├── TaskForm
├── TaskList
│   └── TaskItem
└── Footer
```

## State Management

The application uses React `useState` for state management.

### Tasks State

Stores all tasks in an array.

Each task contains:

```text
id
title
completed
```

### Task Input State

Stores the value entered in the task input field.

## State Flow

```text
App
│
├── tasks
├── task
│
├── Header
│
├── TaskForm
│   ├── task
│   ├── setTask
│   └── addTask
│
└── TaskList
    └── TaskItem
        ├── toggleTask
        └── deleteTask
```

## How to Run the Project

### Step 1: Install Node.js

Install Node.js on your computer.

### Step 2: Open the Project

Open the project folder in VS Code.

### Step 3: Open Terminal

In VS Code, select:

**Terminal → New Terminal**

### Step 4: Install Dependencies

Run:

```bash
npm install
```

### Step 5: Start the Development Server

Run:

```bash
npm run dev
```

### Step 6: Open the Website

Open the localhost URL shown in the terminal.

Example:

```text
http://localhost:5174/
```

The port number may be different on another computer.

## Project Testing

The following functionality was tested:

| Test                  | Result |
| --------------------- | ------ |
| Add Task              | PASS   |
| Complete Task         | PASS   |
| Delete Task           | PASS   |
| Empty Task Validation | PASS   |
| Enter Key             | PASS   |

## Learning Outcomes

Through this project, I practiced:

* React components
* JSX
* Props
* React `useState`
* Controlled form inputs
* Event handling
* Array `.map()`
* Array `.filter()`
* Conditional rendering
* Component communication
* Basic React project structure

## Internship Task

**Program:** AUREX Internship

**Month:** 2

**Week:** 1

**Project:** React Task Manager

## Author

AUREX Internship Student

## Future Improvements

Possible future improvements include:

* Edit task functionality
* Task filters
* Local storage
* Due dates
* Task categories
* Dark/light theme
* Backend integration
