const { getPokemon, getAllPokemon, getAllPokemonNames } = require("pkmonjs");

// const poke = getPokemon("squirtle").then((pokemon))=>
// {
//    if(pokemon) {
//      console.log(pokemon.stats)
//    }
// }
// )
async function getAll(){
    const names =await getAllPokemonNames()
    console.log(names)
    
}

getAll()