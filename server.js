const express = require('express');
const app = express();
const PORT = 3000;

const recipes = [
  { id: 1, title: 'Spaghetti Carbonara', cuisine: 'Italian' },
  { id: 2, title: 'Chicken Curry', cuisine: 'Indian' },
  { id: 3, title: 'Tacos', cuisine: 'Mexican' }
];

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
