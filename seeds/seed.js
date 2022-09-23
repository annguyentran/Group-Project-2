const sequelize = require('../config/connection');
const { Trainer, Pokemon } = require('../models');

const trainerData = require('./userData.json');
const pokemonData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const Trainer = await Trainer.bulkCreate(trainerData, {
    
  });



  process.exit(0);
};

seedDatabase();
