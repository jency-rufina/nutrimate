import React from 'react'

function TaskPage() {
const getTasks = () => {
    fetch("http://127.0.0.1:8000/tasks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // Create a new task
  const createTask = () => {
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { title: "New Task", description: "Task details" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  function deleteTask(taskId) {
   fetch(`http://localhost:8000/tasks/${taskId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
}

    return (
     <div>
      <button onClick={getTasks}>Get All Tasks</button>
      <button onClick={createTask}>Create Task</button>
      <button onClick={() => deleteTask(8 )}>Delete Task with ID </button>
    </div>
  )
}

export default TaskPage
