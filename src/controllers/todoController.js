const todoData = require('../data/todoData');

exports.getAllTodos = (req, res) => {
  const todos = todoData.getAllTodos();
  res.json(todos);
};

exports.getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todoData.getTodoById(id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { text } = req.body;
  const newTodo = todoData.createTodo(text);
  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  const updatedTodo = todoData.updateTodo(id, text);
  if (!updatedTodo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(updatedTodo);
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  todoData.deleteTodo(id);
  res.sendStatus(204);
};
