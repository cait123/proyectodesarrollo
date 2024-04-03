/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroesList.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

function HeroesList({ onHeroSelected }) {
  const [heroes, setHeroes] = useState([]); // Aquí definimos 'heroes' en el estado

  useEffect(() => {
    axios.get('http://localhost:5000/heroes')
      .then(response => {
        setHeroes(response.data); // Aquí actualizamos 'heroes' con los datos de la respuesta
      })
      .catch(error => console.error('Error al obtener los héroes:', error));
  }, []);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/heroes');
        console.log("Héroes recibidos:", response.data); // Depuración
        setHeroes(response.data);
      } catch (error) {
        console.error('Error al obtener héroes:', error);
      }
    };

    fetchHeroes();
}, [heroesUpdated]);


  return (
    <div className="heroes-list-container">
      <h1>Lista de Héroes</h1>
      <ul className="heroes-list">
        {heroes.map(hero => ( // 'heroes' debe estar disponible aquí
          <li key={hero._id} className="heroes-list-item">
            {hero.name}
            <div>
              <button onClick={() => onHeroSelected(hero._id, 'edit')} className="heroes-list-button">Editar</button>
              <button onClick={() => onHeroSelected(hero._id, 'delete')} className="heroes-list-button">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroesList;
*/
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroesList.css'; //  

function HeroesList({ onHeroSelected, heroesUpdated }) {  
  const [heroes, setHeroes] = useState([]);  

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/heroes');
        console.log("Héroes recibidos:", response.data); // Depuración
        setHeroes(response.data);
      } catch (error) {
        console.error('Error al obtener héroes:', error);
      }
    };

    fetchHeroes();
  }, [heroesUpdated]);  

  return (
    <div className="heroes-list-container">
      <h1>Lista de Héroes</h1>
      <ul className="heroes-list">
        {heroes.map(hero => (  
          <li key={hero._id} className="heroes-list-item">
            {hero.name}
            <div>
              <button onClick={() => onHeroSelected(hero._id, 'edit')} className="heroes-list-button">Editar</button>
              <button onClick={() => onHeroSelected(hero._id, 'delete')} className="heroes-list-button">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroesList;


*/  

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroesList.css';

function HeroesList({ onHeroSelected, heroesUpdated }) {
  const [heroes, setHeroes] = useState([]);
  const [editingHeroId, setEditingHeroId] = useState(null);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/heroes');
        setHeroes(response.data);
      } catch (error) {
        console.error('Error al obtener héroes:', error);
      }
    };

    fetchHeroes();
  }, [heroesUpdated]);

  const handleEditClick = (heroId, heroName) => {
    setEditingHeroId(heroId);
    setEditedName(heroName);
  };

  const handleSave = async () => {
    try {
      // Aquí deberías realizar la actualización en el backend.
      await axios.put(`http://localhost:5000/heroes/${editingHeroId}`, { name: editedName });
      setHeroes(heroes.map(hero => hero.hero_id === editingHeroId ? { ...hero, name: editedName } : hero));
      setEditingHeroId(null);
    } catch (error) {
      console.error('Error al actualizar el héroe:', error);
    }
  };

  return (
    <div className="heroes-list-container">
      <h1>Lista de Héroes</h1>
      <ul className="heroes-list">
        {heroes.map((hero) => (
          <li key={hero.hero_id} className="heroes-list-item">
            {editingHeroId === hero.hero_id ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <span>{hero.name}</span>
            )}
            <div>
              {editingHeroId === hero.hero_id ? (
                <button onClick={handleSave} className="heroes-list-button">Guardar</button>
              ) : (
                <>
                  <button onClick={() => handleEditClick(hero.hero_id, hero.name)} className="heroes-list-button">Editar</button>
                  <button onClick={() => onHeroSelected(hero.hero_id, 'delete')} className="heroes-list-button">Eliminar</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroesList;