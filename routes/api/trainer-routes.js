const router = require('express').Router();
const { PassThrough } = require('stream');
const { Pokemon, Trainer, PokemonTrainer } = require('../../models')


/// find all the trainers and their pokemon 
router.get('/', async (req, res) => {

  try {
    const trainers = await Trainer.findAll({
      include: [{ model: Pokemon, through: PokemonTrainer }]

    })
    res.status(200).json(trainers);
  } catch (err) {
    res.status(400).json(err);
  }

});

// get one trainer and all of their pokemon 

router.get('/:id', async (req, res) => {

  try {
    const trainer = await Trainer.findByPk(req.params.id, {
      include: [{ model: Pokemon, through: PokemonTrainer }]
    })
    if (!trainer) {
      res.status(404).json({ message: "Trainer not found" })
      return
    }
    res.status(200).json(trainer)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/trainer', async (req, res) => {

  /// When creating a textbox, in the handlebars, make sure the id is called "name"
  try {
    const trainer = await Trainer.create({ name: req.params.name });

    let pokemonIds = [];

    while (pokemonIds.length < 6) {
      let randomIndex = Math.floor(Math.random() * 150) + 1;
      if (pokemonIds.includes(randomIndex) === false) {
          pokemonIds.push(randomIndex);

      }

    }

    for(let i = 0; i < pokemonIds.length; i++) {
      let pokemonId = randomIndex[i]
      PokemonTrainer.create({
        trainer_id: trainer.id,
        pokemon_id: pokemonId
      })
    }
    res.json({message: 'Trainer created', trainer: trainer})

  } catch (err) {


  }

})


router.get('/', async (req, res) => {
  try {

      res.render('login')
  } catch (error) {
      
  }
})


module.exports = router;



  // update the trainer or delete a trainer here