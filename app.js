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
      // Perform login request using fetch
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.ok) {
          alert('Login successful!');
          // Redirect or display personalized content
        } else {
          alert('Invalid username or password');
        }
      })
      .catch(error => console.error('Error:', error));
    });
  
    // Handle signup form submission
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('signup-username').value;
      const password = document.getElementById('signup-password').value;
      // Perform signup request using fetch
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.ok) {
          alert('Account created successfully! Please log in.');
          showLoginForm();
        } else {
          alert('Error creating account. Please try again.');
        }
      })
      .catch(error => console.error('Error:', error));
    });
  
    // Fetch and display recipes
    fetch('http://localhost:3000/api/recipes')
      .then(response => response.json())
      .then(recipes => {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
          const recipeItem = document.createElement('div');
          recipeItem.classList.add('recipe-item');
          recipeItem.innerHTML = `<h3>${recipe.title}</h3><p>Cuisine: ${recipe.cuisine}</p>`;
          recipeList.appendChild(recipeItem);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  