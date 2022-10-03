const { Pokemon } = require('../models')
const {getPokemon,getAllPokemon,getAllPokemonNames} = require('pkmonjs')
const allPokemon = require('pkmonjs')


const pokemonSeeds = 
[
    {
      name: "Charmander",
      description: "A reptillian fire type pokemon."
    },
    {
      name: "Pikachu",
      "description": "A mouse like electric type pokemon."
    },
    {
      name: "Piplup",
      "description": "A penguin like water type pokemon."
    },
    {
      name: "Gengar",
      "description": "A shadow like ghost type pokemon."
    }
  ]
/// create 150 pokemon 

async function getSixPokemon() {


    const pokemonData = await getAllPokemon()
    
    
    let pokemonArray = [];

    for (let i = 1; i<=151; i++){
        let pokemon = {
            name: pokemonData[i].name,
            description: pokemonData[i].description,
        } 
        pokemonArray.push(pokemon);
    }

    return pokemonArray 
}

async function seedPokemons (){
    const pokemonSeeds = await getSixPokemon()
    Pokemon.bulkCreate(pokemonSeeds)
}

module.exports = seedPokemons;