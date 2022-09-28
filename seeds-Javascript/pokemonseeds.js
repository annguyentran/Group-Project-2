const { Pokemon } = require('../models')
const {getPokemon,getAllPokemon,getAllPokemonNames} = require('pkmonjs')
const allPokemon = require('pkmonjs')

/// create 150 pokemon 

async function getSixPokemon() {

    Pokemon.destroy({where:{}})

    const pokemonData = await getAllPokemon()
    
    /// talk to austin about splicing arrays and navigating objects. manipulate the models to fit the objects you get from the pokemon
    
    let pokemonArray = [];

    for (let i = 1; i<=151; i++){
        let pokemon = {
            name: pokemonData[i].name,
            id: pokemonData[i].idPokedex,
            description: pokemonData[i].description
        } 
        Pokemon.create(pokemon)
        pokemonArray.push(pokemon);
        // console.log(randomIndex)
       
    }
    console.log(pokemonArray)

    return pokemonArray 
}

getSixPokemon()

    

// const seedPokemons = () => Pokemon.bulkCreate(getAllPokemon())

// module.exports = seedPokemons;