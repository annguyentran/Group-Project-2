const seedPokemons = require('./pokemonseeds')
const seedTrainers = require('./trainerseeds')
const seedPokemonTrainers = require('./pokemonTrainerSeeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedPokemons();
    console.log('\n----- POKEMONS SEEDED -----\n');
  
    await seedTrainers();
    console.log('\n----- TRAINERS SEEDED -----\n');
  
    await seedPokemonTrainers();
    console.log('\n----- POKEMONTRAINER SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();