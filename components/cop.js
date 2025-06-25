// Place this inside a React component
useEffect(() => {
  // Get all tasks
  fetch('http://127.0.0.1:8000/tasks')
    .then(response => response.json())
    .then(data => console.log(data));
}, []);

function createTask() {
  fetch('http://127.0.0.1:8000/tasks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: { title: 'New Task', description: 'Task details' }
  })
    .then(response => response.json())
    .then(data => console.log(data));
}
