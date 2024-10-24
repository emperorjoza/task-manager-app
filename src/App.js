import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import TaskCard from './components/TaskCard';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: '', description: '' });
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <Button onClick={() => setIsModalOpen(true)} className="add-task-button">
        Add Task
      </Button>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>New Task</h2>
        <Input
          value={newTask.title}
          onChange={(title) => setNewTask({ ...newTask, title })}
          placeholder="Task Title"
        />
        <Input
          value={newTask.description}
          onChange={(description) => setNewTask({ ...newTask, description })}
          placeholder="Task Description"
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </Modal>
    </div>
  );
};

export default App;
