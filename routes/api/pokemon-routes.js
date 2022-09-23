const router = require('express').Router();
const {Pokemon, Trainer} = require('../../models')


/// find all the pokemon associated with that trainer 
router.get('/', async (req, res) => {

    try{
        const pokemons = await Pokemon.findAll({
            include: {model:Trainer}

        })
        res.status(200).json(pokemons);
    } catch(err){
        res.status(400).json(err);
    }

});

// get one pokemon and all of its trainers

router.get('/:id', async (req, res) => {
   
    try {
      const pokemon = await pokemon.findByPk(req.params.id, {
        include: {model: Trainer}
      })
      if(!pokemon) {
        res.status(404).json({message:"Does not have a trainer"})
        return
      } 
      res.status(200).json(pokemon)
    } catch(err) {
      res.status(400).json(err)
    }
  });

  /// Here we can update or delete the trainer associated with the pokemon
