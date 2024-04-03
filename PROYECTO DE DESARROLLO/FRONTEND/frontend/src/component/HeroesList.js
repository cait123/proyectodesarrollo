 

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
     
      await axios.put(`http://localhost:5000/heroes/${editingHeroId}`, { name: editedName });
      setHeroes(heroes.map(hero => hero.hero_id === editingHeroId ? { ...hero, name: editedName } : hero));
      setEditingHeroId(null);
    } catch (error) {
      console.error('Error al actualizar el héroe:', error);
    }
  };

  //Formulario
  return (
    <div className="heroes-list-container">
      <h1>Lista de Héroes</h1>
      <ul className="heroes-list">
        {heroes.map((hero) => (
          <li key={hero.hero_id} className="heroes-list-item">
            {editingHeroId === hero.hero_id ? (  //si se realizó algun tipo de edición entonces compara y muestra
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
                <button onClick={handleSave} className="heroes-list-button">Guardar</button> //compara si al guardar son los mismos datos o actualizados
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

/* busqueda fallida
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HeroesList.css';

function HeroesList({ onHeroSelected, heroesUpdated }) {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState({ publisher: '', race: '', gender: '', side: '' });

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/heroes', { params: search });
        setHeroes(response.data);
      } catch (error) {
        console.error('Error al obtener héroes:', error);
      }
    };

    fetchHeroes();
  }, [heroesUpdated, search]);

  const handleSearchChange = (e) => {
    setSearch({ // search , [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/heroes', { params: search });
      setHeroes(response.data);
    } catch (error) {
      console.error('Error al buscar héroes:', error);
    }
  };

  return (
    <div className="heroes-list-container">
      <h1>Lista de Héroes</h1>
      <div className="search-form">
        <input type="text" name="publisher" placeholder="Casa Publicadora" onChange={handleSearchChange} />
        <input type="text" name="race" placeholder="Raza" onChange={handleSearchChange} />
        <input type="text" name="gender" placeholder="Género" onChange={handleSearchChange} />
        <input type="text" name="side" placeholder="Bando" onChange={handleSearchChange} />
        <button onClick={handleSearch}>Buscar</button>
      </div>
 
     
      <ul className="heroes-list">
  {heroes.map((hero) => (
    <li key={hero.hero_id} className="heroes-list-item">
      {/* Renderizar el héroe aquí }
      {hero.name} - {hero.publisher} - {hero.race} - {hero.gender} - {hero.side}
    </li>
  ))}
</ul>

    </div>
  );
}

export default HeroesList;
*/