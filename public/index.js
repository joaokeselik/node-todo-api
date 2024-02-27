async function fetchTodos() {
    const response = await fetch('http://localhost:3000/todos');
    const todos = await response.json();

    const todosContainer = document.getElementById('todos');
    todosContainer.innerHTML = '';

    todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        const textElement = document.createElement('span');
        textElement.textContent = todo.text;
        todoElement.appendChild(textElement);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTodo(todo.id));

        todoElement.appendChild(deleteButton);
        todosContainer.appendChild(todoElement);
    });
}

async function handleAddTodoForm(event) {
    event.preventDefault();

    const todoText = document.getElementById('todoText').value;
    const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: todoText })
    });

    if (response.ok) {
        fetchTodos(); 
        document.getElementById('addTodoForm').reset(); 
    } else {
        alert('Failed to add todo.');
    }
}

async function deleteTodo(todoId) {
    const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        fetchTodos(); // Refresh todo list after deletion
    } else {
        alert('Failed to delete todo.');
    }
}

document.getElementById('addTodoForm').addEventListener('submit', handleAddTodoForm);

fetchTodos();