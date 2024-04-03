//problemas con el servidor

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeleteHeroForm.css'; // Importación del archivo CSS

function DeleteHeroForm() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadHeroes();
  }, []);

  const loadHeroes = () => {
    axios.get('http://localhost:5000/heroes')
      .then(response => setHeroes(response.data))
      .catch(error => console.error('Error al cargar héroes:', error));
  };

  const handleDelete = async (heroId) => {
    // Confirmar antes de eliminar
    if(window.confirm('¿Estás seguro de querer eliminar este héroe?')) {
      setIsLoading(true);
      try {
        await axios.delete(`http://localhost:5000/heroes/${heroId}`);
        alert('Héroe eliminado con éxito');
        loadHeroes(); // Recargar la lista de héroes
      } catch (error) {
        console.error('Error al eliminar héroe:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="delete-hero-form">
      <h2>Eliminar Héroe</h2>
      <ul className="delete-hero-list">
        {heroes.map(hero => (
          <li key={hero.hero_id} className="delete-hero-list-item">
            {hero.name}
            <button 
              onClick={() => handleDelete(hero.hero_id)} 
              disabled={isLoading}
              className="delete-hero-button">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteHeroForm;
