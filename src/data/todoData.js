let todos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' }
  ];
  
  exports.getAllTodos = () => todos;
  
  exports.getTodoById = (id) => todos.find(todo => todo.id === id);
  
  exports.createTodo = (text) => {
    const newTodo = { id: todos.length + 1, text };
    todos.push(newTodo);
    return newTodo;
  };
  
  exports.updateTodo = (id, text) => {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return null;
    todo.text = text;
    return todo;
  };
  
  exports.deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
  };
  