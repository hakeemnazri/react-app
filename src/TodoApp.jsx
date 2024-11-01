import React, { useState } from 'react';
 
function TodoApp() {
  const [tasks, setTasks] = useState([]);      // To store the list of tasks
  const [newTask, setNewTask] = useState('');  // To store the new task input
 
  // Handle input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
 
  // Add a new task to the list
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Prevent empty tasks
    setTasks([...tasks, newTask]);
    setNewTask(''); // Clear the input after adding
  };
 
  // Remove a task by its index
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
 
  return (
    <div>
      <h1>To-Do List</h1>
 
      {/* Input field and Add button */}
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
 
      {/* Task list display */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default TodoApp;