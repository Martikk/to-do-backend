const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

// Sync database
db.sequelize.sync().then(() => {
  console.log(`Server running on http://localhost:${port}`);
});

// Routes
app.get('/todos', async (req, res) => {
  try {
    const todos = await db.Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).send("Error fetching todos");
  }
});

app.post('/todos', async (req, res) => {
  try {
    const newTodo = await db.Todo.create(req.body);
    res.json(newTodo);
  } catch (error) {
    res.status(500).send("Error creating todo");
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await db.Todo.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json(updatedTodo[1][0]);
  } catch (error) {
    res.status(500).send("Error updating todo");
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    await db.Todo.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).send("Error deleting todo");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
