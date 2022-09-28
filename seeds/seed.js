const sequelize = require('../config/connection');
const { Trainer, Pokemon } = require('../models');

const trainerData = require('./userData.json');
const pokemonData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const trainers = await Trainer.bulkCreate(trainerData, {
    individualHooks: true, 
    returning: true
  });

for (const pokemon of pokemonData) {
  await Pokemon.create({
    ...pokemon,
    trainerId: trainers[Math.floor(Math.random()*trainers.length)].id,
  });

}


  process.exit(0);
};

seedDatabase();
