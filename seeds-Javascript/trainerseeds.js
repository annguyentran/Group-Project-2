const { Trainer } = require('../models')

const trainerData = [

  {
    name: "Andrew",
    email: "and123@gmail.com",
    password: "password12345"
  },
  {
    name: "Andy",
    email: "andy123@gmail.com",
    password: "password12345"
  },
  {
    name: "Miguel",
    email: "Miguel123@gmail.com",
    password: "password12345"
  },
  {
    name: "Austin",
    email: "austin123@gmail.com",
    password: "password12345"
  }
]

const seedTrainers = async () => {
  for (const trainer of trainerData) {
    await Trainer.create(trainer);
  }
}
module.exports = seedTrainers;