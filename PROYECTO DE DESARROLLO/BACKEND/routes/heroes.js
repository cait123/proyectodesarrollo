/*const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');
 
const Hero = mongoose.model('Hero', HeroSchema, 'hero_information');

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
    try {
        const newHero = await hero.save();
        res.status(201).json(newHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar un héroe
router.patch('/:id', getHero, async (req, res) => {
    if (req.body.name != null) {
        res.hero.name = req.body.name;
    }
    // Agrega actualizaciones para otros campos aquí

    try {
        const updatedHero = await res.hero.save();
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un héroe
router.delete('/:id', getHero, async (req, res) => {
    try {
        await res.hero.remove();
        res.json({ message: 'Héroe eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware para obtener un héroe por ID
async function getHero(req, res, next) {
    let hero;
    try {
        hero = await Hero.findById(req.params.id);
        if (hero == null) {
            return res.status(404).json({ message: 'No se puede encontrar el héroe' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.hero = hero;
    next();
}

module.exports = router;
*/
/*
const express = require('express');
const router = express.Router();
const Hero = require('../models/hero'); // Asegúrate de que la ruta es correcta

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

    try {
        const newHero = await hero.save();
        res.status(201).json(newHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Actualizar un héroe
router.patch('/:id', getHero, async (req, res) => {
    if (req.body.name != null) {
        res.hero.name = req.body.name;
    }
    // Repite para otros campos como eye_color, hair_color, etc.

    try {
        const updatedHero = await res.hero.save();
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un héroe
router.delete('/:id', getHero, async (req, res) => {
    try {
        await res.hero.remove();
        res.json({ message: 'Héroe eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware para obtener un héroe por ID
async function getHero(req, res, next) {
    let hero;
    try {
        hero = await Hero.findById(req.params.id);
        if (hero == null) {
            return res.status(404).json({ message: 'No se puede encontrar el héroe' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.hero = hero;
    next();
}

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const Hero = require('../models/hero'); // Asegúrate de que la ruta es correcta

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

// Crear un nuevo héroe
router.post('/', async (req, res) => {
    const hero = new Hero({
        // Asegúrate de que estos campos coincidan con tu esquema de Hero
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
    // Repite para otros campos como eye_color, hair_color, etc.

    try {
        const updatedHero = await res.hero.save();
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un héroe
/*
router.delete('/:id', getHero, async (req, res) => {
    try {
        await res.hero.remove();
        res.json({ message: 'Héroe eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
*/
/*
router.delete('/:id', getHero, async (req, res) => {
    try {
        console.log("Eliminando héroe:", res.hero);  // Agrega esto
        await res.hero.remove();
        res.json({ message: 'Héroe eliminado' });
    } catch (err) {
        console.error("Error al eliminar:", err);  // Agrega esto
        res.status(500).json({ message: err.message });
    }
});
*/

// Middleware para obtener un héroe por hero_id
 

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


// Middleware para obtener un héroe por ID
/*
async function getHero(req, res, next) {
    let hero;
    try {
        // Cambia findById a findOne si buscas por un campo diferente a _id
        hero = await Hero.findById(req.params.id); 
        if (hero == null) {
            return res.status(404).json({ message: 'No se puede encontrar el héroe' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.hero = hero;
    next();
}*/

module.exports = router;
