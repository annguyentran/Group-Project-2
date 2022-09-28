const { PokemonTrainer } = require('../models')

const pokemonTrainerData = [
    {
        trainer_id: 1,
        pokemon_id: 1,
      },
      {
        trainer_id: 1,
        pokemon_id: 2,
      },
      {
        trainer_id: 1,
        pokemon_id: 3,
      },
      {
        trainer_id: 1,
        pokemon_id: 4,
      },
      
];

const seedPokemonTrainers = () => PokemonTrainer.bulkCreate(pokemonTrainerData);

module.exports = seedPokemonTrainers; 