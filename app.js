document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const recipeList = document.getElementById('recipe-list');
  
    // Show login form
    function showLoginForm() {
      document.getElementById('login').classList.remove('hidden');
      document.getElementById('signup').classList.add('hidden');
    }
  
    // Show signup form
    function showSignupForm() {
      document.getElementById('signup').classList.remove('hidden');
      document.getElementById('login').classList.add('hidden');
    }
  
    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      // Simulate login request (replace with actual API call)
      alert(`Logged in as ${username}!`);
    });
  
    // Handle signup form submission
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
      // Simulate signup request (replace with actual API call)
      alert(`Account created for ${username}! Please log in.`);
      showLoginForm();
    });
  
    // Simulated recipe data
    const recipes = [
      { title: 'Spaghetti Carbonara', cuisine: 'Italian' },
      { title: 'Chicken Curry', cuisine: 'Indian' },
      { title: 'Tacos', cuisine: 'Mexican' }
    ];
  
    // Display recipes
    function displayRecipes() {
      recipeList.innerHTML = '';
      recipes.forEach(recipe => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `<h3>${recipe.title}</h3><p>Cuisine: ${recipe.cuisine}</p>`;
        recipeList.appendChild(recipeItem);
      });
    }
  
    // Initially display recipes
    displayRecipes();
  });
  