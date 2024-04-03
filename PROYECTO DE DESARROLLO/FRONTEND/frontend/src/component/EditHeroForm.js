/*import React, { useState } from 'react';
import axios from 'axios';
import './EditHeroForm.css';

function EditHeroForm({ heroId, onHeroUpdated }) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:5000/heroes/${heroId}`, { name });
      alert('Héroe actualizado con éxito');
      onHeroUpdated();
    } catch (error) {
      console.error('Error al actualizar héroe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-hero-form">
      <h1>Editar Héroe</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nuevo Nombre del Héroe"
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Actualizando...' : 'Actualizar'}
      </button>
    </form>
  );
}

export default EditHeroForm;

*/


// EditHeroForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function EditHeroForm({ heroId, onHeroUpdated }) {
  const [hero, setHero] = useState({ name: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:5000/heroes/${heroId}`)
      .then(response => {
        const { _id, ...rest } = response.data;
        const updatedHero = { hero_id: _id, ...rest };
        setHero(updatedHero);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar el héroe:', error);
        setIsLoading(false);
        setError('Error al cargar el héroe. Por favor, inténtalo de nuevo más tarde.');
      });
  }, [heroId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHero({ ...hero, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    try {
      await axios.put(`http://localhost:5000/heroes/${hero.hero_id}`, hero);
      console.log('Hero updated successfully');
      if (onHeroUpdated) {
        onHeroUpdated(); // Notificar al componente padre que la actualización fue exitosa
      }
    } catch (error) {
      console.error('Error al actualizar el héroe:', error);
    }
  };

  console.log('heroId:', heroId);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre del Héroe:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={hero.name}
        onChange={handleInputChange}
      />
      <button type="submit">Guardar Cambios</button>
    </form>
  );
}

EditHeroForm.propTypes = {
  heroId: PropTypes.string.isRequired,
  onHeroUpdated: PropTypes.func.isRequired
};

export default EditHeroForm;
