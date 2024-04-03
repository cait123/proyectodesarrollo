import React, { useState } from 'react';
import axios from 'axios'; //importación de axios para consumir rutas y realizar operaciones crud
import './AddHeroForm.css'; // Importación del archivo CSS

function AddHeroForm() {

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

  //tomar datos previos y actualizarlos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHeroData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  //conexión exitosa con la bd y héroe añadido
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

  //muestra el formulaario y permite enviarlo con el botón
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
