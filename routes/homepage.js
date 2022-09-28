const router = require('express').Router();
const { Pokemon, Trainer, PokemonTrainer } = require('../models');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const pokemonData = await PokemonTrainer.findAll({
        include: [
          {
            model: Pokemon,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', {  
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;