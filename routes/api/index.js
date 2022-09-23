const router = require('express').Router();
const pokemonRoutes = require('./pokemon-routes');
const trainerRoutes = require('./trainer-routes');

router.use('/pokemon-routes', pokemonRoutes);
router.use('/trainer-routes', trainerRoutes);

/// Does this export everything inside this file? How?
module.exports = router;