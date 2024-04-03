const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Conexión a MongoDB
const password = encodeURIComponent('55O85Wh@b6@1GTQO$$XbO9');
const dbName = 'heroes';
const dbUser = 'ubiquo';
const clusterUrl = 'atlascluster.1jpotvm.mongodb.net';
const mongoUri = `mongodb+srv://${dbUser}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

const db = mongoose.connection;
db.on('error', (error) => console.error('Error de conexión a MongoDB:', error));
db.once('open', () => console.log('Conectado exitosamente a MongoDB'));

// Definición de modelo para 'hero_information'
const HeroSchema = new mongoose.Schema({
  hero_id: Number, 
  name: String,
  eye_color: String,
  hair_color: String,
  skin_color: String,
  height: Number,
  weight: Number,
  race: String,
  publisher_id: String, 
  gender_id: String,
  alignment_id: String
});

const Hero = mongoose.model('Hero', HeroSchema, 'hero_information');

// Rutas
// Obtener todos los héroes
app.get('/heroes', async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un héroe específico por hero_id 

app.get('/heroes/:heroId', async (req, res) => {
  try {
    const hero = await Hero.findOne({ hero_id: req.params.heroId });
    if (!hero) {
      return res.status(404).json({ message: 'Héroe no encontrado' });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Crear un nuevo héroe
app.post('/heroes', async (req, res) => {
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
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
 
// Actualizar un héroe existente
app.put('/heroes/:heroId', async (req, res) => {
  try {
    const hero = await Hero.findOneAndUpdate(
      { hero_id: req.params.heroId }, // Busca el héroe por el ID
      { name: req.body.name },        // Actualiza el nombre con el nuevo valor
      { new: true }                   // Devuelve el héroe actualizado en la respuesta
    );

    if (!hero) {
      return res.status(404).json({ message: 'Héroe no encontrado' });
    }

    res.json(hero); // Devuelve el héroe actualizado en la respuesta
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Eliminar un héroe
app.delete('/heroes/:hero_id', async (req, res) => {
  try {
    const hero = await Hero.findOne({ hero_id: req.params.hero_id });
    if (!hero) {
      return res.status(404).json({ message: 'Héroe no encontrado' });
    }

    await hero.remove();
    res.json({ message: 'Héroe eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
