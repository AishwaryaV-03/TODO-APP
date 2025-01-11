const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

let tasks = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/add', (req, res) => {
  const task = req.body.task;
  if (task) {
    tasks.push({ text: task, completed: false });
    res.status(201).json({ message: 'Task added' });
  } else {
    res.status(400).json({ error: 'Task cannot be empty' });
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
