const router = require('express').Router();
const {Pokemon, Trainer} = require('../../models')


/// find all the trainers and their pokemon 
router.get('/', async (req, res) => {

    try{
        const trainers = await Trainer.findAll({
            include: {model:Pokemon}

        })
        res.status(200).json(trainers);
    } catch(err){
        res.status(400).json(err);
    }

});

// get one trainer and all of their pokemon 

router.get('/:id', async (req, res) => {
   
    try {
      const trainer = await trainer.findByPk(req.params.id, {
        include: {model: Pokemon}
      })
      if(!pokemon) {
        res.status(404).json({message:"Trainer not found"})
        return
      } 
      res.status(200).json(trainer)
    } catch(err) {
      res.status(400).json(err)
    }
  });

  // update the trainer or delete a trainer here