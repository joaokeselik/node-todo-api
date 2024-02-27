const express = require('express');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});