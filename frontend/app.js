document.addEventListener('DOMContentLoaded', () => {
          const taskForm = document.getElementById('task-form');
          const taskList = document.getElementById('task-list');
      
          // Fetch tasks from the server
          const fetchTasks = async () => {
              const response = await fetch('/tasks');
              const tasks = await response.json();
              taskList.innerHTML = '';
              tasks.forEach(task => {
                  const li = document.createElement('li');
                  li.textContent = `${task.title}: ${task.description}`;
                  taskList.appendChild(li);
              });
          };
      
          // Add a new task
          taskForm.addEventListener('submit', async (e) => {
              e.preventDefault();
              const title = document.getElementById('title').value;
              const description = document.getElementById('description').value;
      
              const response = await fetch('/tasks', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ title, description })
              });
      
              if (response.ok) {
                  fetchTasks();
                  taskForm.reset();
              }
          });
      
          fetchTasks();
      });
      