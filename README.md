# Node.js Todo API
This is a simple RESTful API built with Node.js and Express.js for managing todo items. It includes a web app to interact with the API.

## Getting Started
To get started with this project, follow these steps:

1. Clone the repository:
git clone <repository-url>

2. Install dependencies:
npm install

3. Start the server:

        node server.js (API)

        node webapp.js (Web app)

The server will start running on http://localhost:3000 by default.

## Endpoints
- `GET /todos`: Get all todos
- `GET /todos/:id`: Get a single todo by ID
- `POST /todos`: Create a new todo
- `PUT /todos/:id`: Update a todo
- `DELETE /todos/:id`: Delete a todo

## Usage
You can interact with the API using tools like Postman or by running the web app.

## Testing
This project utilizes Jest for writing and running unit tests. To run the tests:

        npx jest tests/todos.test.js
