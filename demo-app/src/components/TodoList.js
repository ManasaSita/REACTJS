import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editTask === null) {
      setTasks([...tasks, newTask]);
    } else {
      tasks[editTask] = newTask;
      setTasks([...tasks]);
      setEditTask(null);
    }
    setNewTask('');
  };

  const handleEdit = (index) => {
    setNewTask(tasks[index]);
    setEditTask(index);
  };

    const handleDelete = (index) => {
      tasks.splice(index, 1);
      setTasks([...tasks]);
    };
    
    
    return (
      <div className='form-class'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit">{editTask === null ? 'Add' : 'Save'}</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  
}   
      
export default TodoList;