const router = require('express').Router();
const apiRoutes = require('./api');
const homepage = require('./homepage');

router.use('/api', apiRoutes);
router.use('/', homepage)


router.use((req, res) => {
  res.send("<h1>The Journey Begins Elsewhere!</h1>")
});


module.exports = router;