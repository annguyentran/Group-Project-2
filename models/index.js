const Pokemon = require('./pokemon');
const Trainer = require('./trainer');
const PokemonTrainer = require('./pokemon-trainer')

Trainer.belongsToMany(Pokemon,{
    through: {
        model: PokemonTrainer,
        unique: false
    },
    foreignKey: "trainer_id"
   
});

Pokemon.belongsToMany(Trainer, {
    
    through: {
        model: PokemonTrainer,
        unique: false
    },
    foreignKey: "pokemon_id"
});


module.exports = {Pokemon, Trainer, PokemonTrainer};