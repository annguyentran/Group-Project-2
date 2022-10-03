const router = require('express').Router();
const apiRoutes = require('./api');
const homepage = require('./homepageroutes');
const trainerProfile = require('./trainerprofile');

router.use('/api', apiRoutes);
router.use('/', homepage);
router.use('/profile', trainerProfile);



module.exports = router;