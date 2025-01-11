import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState(''); 
  const addTask = (e) => {
    e.preventDefault(); 
    if (!task.trim()) return; 
    const newTask = { text: task, completed: false };
    setTasks([...tasks, newTask]); 
    setTask(''); 
  };
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <form onSubmit={addTask} className="form">
        <input
          type="text"
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
