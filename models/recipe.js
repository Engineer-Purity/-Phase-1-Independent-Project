const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  cuisine: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Recipe', recipeSchema);
