const router = require('express').Router();
const Trainer = require('../models/trainer')
const PokemonTrainer = require('../models/pokemon-trainer')
const Pokemon = require('../models/pokemon')
const withAuth = require('../utils/auth')

router.get('/', withAuth,  async (req, res) => {
    try {
		
        const trainer = await Trainer.findByPk(req.session.trainerid, {
            include: [{ model: Pokemon, through: PokemonTrainer }]
          })
         
		 
        res.render('trainerprofile', {trainer: trainer.toJSON()})
    } catch (error) {
        console.log(error)

    }
})


router.get('/login', async (req, res) => {
    try {
        if (req.session && req.session.login) {
            res.redirect('/profile');
        }
        res.render('login')
    } catch (error) {

    }
})

router.post('/login', async (req, res) => {
    try {
        const trainer = await Trainer.findOne({
            where: { email: req.body.email }
        })
        if (!trainer) {
            res.status(400).json({ message: 'Wrong email' });
            return;
        }
        const validPassword = await trainer.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Wrong password ' + req.body.password });
            return;

        }
        req.session.save(() => {
            req.session.trainerid = trainer.id
            req.session.email = trainer.email
            req.session.login = true
            res.json({ message: 'login successful', trainer })
        })

    } catch (error) {

    }

})

router.get('/logout', (req, res) => {
    if (req.session && req.session.login) {

        req.session.destroy(() => {
            res.redirect('/profile/login');
        })
    }
})

router.post('/signup', async (req, res) => {
    try {
        const trainer = await Trainer.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })
        let pokemonIds = [];

        while (pokemonIds.length < 6) {
            let randomIndex = Math.floor(Math.random() * 150) + 1;
            if (pokemonIds.includes(randomIndex) === false) {
                pokemonIds.push(randomIndex);

            }

        }
        for (let i = 0; i < pokemonIds.length; i++) {
            console.log(i)
            let pokemonId = pokemonIds[i]
            await PokemonTrainer.create({
                trainer_id: trainer.id,
                pokemon_id: pokemonId
            })
        }
        req.session.save(() => {
            req.session.trainerid = trainer.id
            req.session.email = trainer.email
            req.session.login = true
            res.json({ message: 'signup successful', trainer })

        })

    } catch (error) {
        console.log(error)

    }
})

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');

    } catch (error) {

    }

})




module.exports = router; 