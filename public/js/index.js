const trainer = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const user = document.querySelector('#trainer').value.trim();

  if (user) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

async function getSixPokemon() {

  const pokemonData = await getAllPokemon()
    
  let pokemonArray = [];

  while (pokemonArray.length<6){
      let randomIndex = Math.floor(Math.random() * 151);
      let pokemon = {
          name: pokemonData[randomIndex].name,
          id: pokemonData[randomIndex].idPokedex,
          description: pokemonData[randomIndex].description
      }
      pokemonArray.push(pokemon);
     
  }
  return pokemonArray 
}




const newTrainer = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();

  if (name) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);


