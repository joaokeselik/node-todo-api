const express = require('express');
const app = express();
const path = require('path');
const todoRoutes = require('./src/routes/todoRoutes');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

