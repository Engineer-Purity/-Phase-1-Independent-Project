const Recipe = require('./models/Recipe');

// Create Recipe
app.post('/api/recipes', async (req, res) => {
  try {
    const { title, cuisine } = req.body;
    const newRecipe = new Recipe({ title, cuisine });
    await newRecipe.save();
    res.status(201).send('Recipe created successfully!');
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get All Recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Update Recipe
app.put('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, cuisine } = req.body;
    await Recipe.findByIdAndUpdate(id, { title, cuisine });
    res.status(200).send('Recipe updated successfully!');
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete Recipe
app.delete('/api/recipes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    res.status(200).send('Recipe deleted successfully!');
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(500).send('Internal Server Error');
  }
});
