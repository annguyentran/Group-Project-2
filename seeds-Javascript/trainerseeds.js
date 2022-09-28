const { Trainer } = require('../models')

const trainerData = [

    {
        name: "Andrew",
      },
      {
        name: "Andy",
      },
      {
        name: "Miguel",
      },
      {
        name: "Austin",
      }
]

const seedTrainers = () => Trainer.bulkCreate(trainerData);

module.exports = seedTrainers;