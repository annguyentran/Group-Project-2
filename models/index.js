const Pokemon = require('./pokemon');
const Trainer = require('./trainer');
const PokemonTrainer = require('./pokemon-trainer')
//const sequelize = require('../config/connection');


/// How can I create the tables properly or how do I know? 

// sequelize.sync().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

/// The same type of pokemon can have multiple trainers
/// while the trainer can have multiple different pokemon.
// How can we specify this here? 

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