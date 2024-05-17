const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const app = express();
const port = 5001; // Ensure this port is not in use

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sync database
db.sequelize.sync().then(() => {
  console.log(`Server running on http://localhost:${port}`);
});

// Routes
app.get('/todos', async (req, res) => {
  const todos = await db.Todo.findAll();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  try {
      const newTodo = await db.Todo.create({
          text: req.body.text,
          due_date: req.body.due_date,
          category: req.body.category,
          priority: req.body.priority
      });
      res.json(newTodo);
  } catch (error) {
      console.error("Error creating todo:", error);
      res.status(500).json({ error: "Error creating todo" });
  }
});

app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await db.Todo.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json(updatedTodo[1][0]);
});

app.delete('/todos/:id', async (req, res) => {
  await db.Todo.destroy({
    where: { id: req.params.id },
  });
  res.json({ message: 'Todo deleted' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
