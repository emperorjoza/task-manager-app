import React from 'react';
import './TaskCard.css'; // Add your own styles

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
    </div>
  );
};

export default TaskCard;
