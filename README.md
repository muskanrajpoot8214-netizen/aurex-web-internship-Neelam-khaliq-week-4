# AUREX React Task Manager

A React-based Task Manager developed as part of the AUREX Internship – Month 2, Week 1.

## Project Overview

This project is a simple and responsive Task Manager built using React.js and Vite.

The application allows users to:

- Add new tasks
- View tasks dynamically
- Mark tasks as completed
- Delete tasks
- Prevent empty tasks from being added
- Add a task by pressing the Enter key

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

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