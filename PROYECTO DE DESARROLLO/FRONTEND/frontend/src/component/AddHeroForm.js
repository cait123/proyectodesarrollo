/*import React, { useState } from 'react';
import axios from 'axios';
import './AddHeroForm.css'; // Importación del archivo CSS

function AddHeroForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/heroes', { name })
      .then(() => {
        alert('Héroe añadido con éxito');
      })
      .catch(error => {
        console.error('Error al añadir héroe:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-hero-form">
      <h1>Añadir Héroe</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del Héroe: "
        className="add-hero-input"  // Clase para el input (si necesitas estilos específicos)
      />
      <button type="submit" className="add-hero-button">Añadir</button>
    </form>
  );
  
}

export default AddHeroForm;*/


/*
import React, { useState } from 'react';
import axios from 'axios';
import './AddHeroForm.css'; // Importación del archivo CSS

function AddHeroForm() {
  const [heroData, setHeroData] = useState({
    name: '',
    eye_color: '',
    hair_color: '',
    skin_color: '',
    height: '',
    weight: '',
    race: '',
    publisher_id: '',
    gender_id: '',
    alignment_id: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHeroData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/heroes', heroData)
      .then(() => {
        alert('Héroe añadido con éxito');
      })
      .catch(error => {
        console.error('Error al añadir héroe:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-hero-form">
      <h1>Añadir Héroe</h1>
      {Object.entries(heroData).map(([key, value]) => (
        <input
          key={key}
          type="text"
          name={key}
          value={value}
          onChange={handleInputChange}
          placeholder={`${key[0].toUpperCase() + key.slice(1).replace('_', ' ')}: `}
          className="add-hero-input"
        />
      ))}
      <button type="submit" className="add-hero-button">Añadir</button>
    </form>
  );
}

export default AddHeroForm;

*/

import React, { useState } from 'react';
import axios from 'axios';
import './AddHeroForm.css'; // Importación del archivo CSS

function AddHeroForm() {
  // Actualizado para incluir hero_id y valores predeterminados
  const [heroData, setHeroData] = useState({
    hero_id: '',
    name: '',
    eye_color: '',
    hair_color: '',
    skin_color: '',
    height: '',
    weight: '',
    race: '',
    publisher_id: '',
    gender_id: '',
    alignment_id: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHeroData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/heroes', heroData)
      .then(() => {
        alert('Héroe añadido con éxito');
      })
      .catch(error => {
        console.error('Error al añadir héroe:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-hero-form">
      <h1>Añadir Héroe</h1>
      {Object.entries(heroData).map(([key, value]) => (
        <input
          key={key}
          type={key === 'height' || key === 'weight' || key === 'hero_id' ? 'number' : 'text'}
          name={key}
          value={value}
          onChange={handleInputChange}
          placeholder={`${key[0].toUpperCase() + key.slice(1).replace('_', ' ')}: `}
          className="add-hero-input"
        />
      ))}
      <button type="submit" className="add-hero-button">Añadir</button>
    </form>
  );
}

export default AddHeroForm;
