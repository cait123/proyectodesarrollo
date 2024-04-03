const express = require('express');
const router = express.Router();
const Hero = require('../models/hero'); 

// Obtener todos los héroes
router.get('/', async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

 

// Obtener un héroe específico
router.get('/:id', getHero, (req, res) => {
    res.json(res.hero);
});

// Obtener todos los héroes (con opción de filtrado)
router.get('/', async (req, res) => {
    try {
        let query = {};
        if (req.query.publisher) {
            query.publisher = req.query.publisher;
        }
        if (req.query.race) {
            query.race = req.query.race;
        }
        if (req.query.gender) {
            query.gender = req.query.gender;
        }
        if (req.query.side) {
            query.side = req.query.side;
        }
        const heroes = await Hero.find(query);
        res.json(heroes);
    } catch (error) {
        console.error('Error al obtener héroes:', error);
        res.status(500).json({ message: 'Error al obtener héroes' });
    }
});


// Crear un nuevo héroe
router.post('/', async (req, res) => {
    const hero = new Hero({
     
        hero_id: req.body.hero_id,
        name: req.body.name,
        eye_color: req.body.eye_color,
        hair_color: req.body.hair_color,
        skin_color: req.body.skin_color,
        height: req.body.height,
        weight: req.body.weight,
        race: req.body.race,
        publisher_id: req.body.publisher_id,
        gender_id: req.body.gender_id,
        alignment_id: req.body.alignment_id
    });
//guardar campos
    try {
        const newHero = await hero.save();
        res.status(201).json(newHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar un héroe
router.patch('/:id', getHero, async (req, res) => {
    // Actualiza los campos que estén presentes en el request
    if (req.body.name != null) {
        res.hero.name = req.body.name;
    }

    try {
        const updatedHero = await res.hero.save();
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

 
async function getHero(req, res, next) {
    try {
        const hero = await Hero.findOne({ hero_id: req.params.id });
        if (!hero) {
            return res.status(404).json({ message: 'No se puede encontrar el héroe' });
        }
        res.hero = hero;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Ruta para eliminar un héroe  
router.delete('/:id', async (req, res) => {
    try {
        const result = await Hero.deleteOne({ hero_id: req.params.id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No se puede encontrar el héroe' });
        }

        res.json({ message: 'Héroe eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

 
module.exports = router;
