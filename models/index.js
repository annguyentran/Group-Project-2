const Pokemon = require('./pokemon');
const Trainer = require('./trainer');
const sequelize = require('../config/connection');


/// How can I create the tables properly or how do I know? 

sequelize.sync().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})

/// The same type of pokemon can have multiple trainers
/// while the trainer can have multiple different pokemon.
// How can we specify this here? 

Trainer.belongsToMany(Pokemon,{
    foreignKey: 'trainer_id',

});

Pokemon.belongsToMany(Trainer, {
    foreignKey: 'pokemon_id'
})



module.exports = {Pokemon, Trainer};