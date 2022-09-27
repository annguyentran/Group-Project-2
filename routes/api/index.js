const router = require('express').Router();
const pokemonRoutes = require('./pokemon-routes');
const trainerRoutes = require('./trainer-routes');

router.use('/pokemon', pokemonRoutes);
router.use('/trainer', trainerRoutes);

/// Does this export everything inside this file? How?
module.exports = router;