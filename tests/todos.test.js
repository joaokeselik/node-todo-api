const todoController = require('../src/controllers/todoController');

const expectedTodos = [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' }
  ];

  describe('getAllTodos', () => {
    it('should return all todos', () => {
      const req = {}; 
      const res = {
        json: jest.fn() 
      }; 
  
      todoController.getAllTodos(req, res);        
      expect(res.json).toHaveBeenCalledWith(expectedTodos);
    });
  });

describe('getTodoById', () => {
  it('should return the todo with the specified ID', () => {
    const req = {
      params: { id: 1 } 
    };
    const res = {
      json: jest.fn()
    };

    todoController.getTodoById(req, res);
    expect(res.json).toHaveBeenCalledWith(expectedTodos[0]);
  });

  it('should return undefined if todo with the specified ID does not exist', () => {
    const req = {
      params: { id: 1000 } 
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    todoController.getTodoById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Todo not found' });
  });
});

describe('createTodo', () => {
    it('should create a new todo', () => {
      const req = {
        body: { id: 3, text: 'New task' }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn() 
      };
  
      todoController.createTodo(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 3, text: 'New task' });
    });
  });
  
  describe('updateTodo', () => {
    it('should update the text of the todo with the specified ID', () => {
      const req = {
        params: { id: 1 }, 
        body: { text: 'Updated task' } 
      };
      const res = {
        json: jest.fn() 
      };
  
      todoController.updateTodo(req, res);
      expect(res.json).toHaveBeenCalledWith({ id: 1, text: 'Updated task' });
    });
  
    it('should return null if todo with the specified ID does not exist', () => {
      const req = {
        params: { id: 1000 }, 
        body: { text: 'Updated task' } 
      };
      const res = {
        status: jest.fn().mockReturnThis(), 
        json: jest.fn() 
      };
  
      todoController.updateTodo(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Todo not found' });
    });
  });
  
  describe('deleteTodo', () => {
    it('should delete the todo with the specified ID', () => {
      const req = {
        params: { id: 1 } 
      };
      const res = {
        sendStatus: jest.fn() 
      };
  
      todoController.deleteTodo(req, res);

      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });
  
    it('should not throw an error if todo with the specified ID does not exist', () => {
      const req = {
        params: { id: 1000 } 
      };
      const res = {
        sendStatus: jest.fn() 
      };
  
      todoController.deleteTodo(req, res);
    });
  });