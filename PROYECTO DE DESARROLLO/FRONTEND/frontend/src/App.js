
/*import React, { useState } from 'react';
import HeroesList from './component/HeroesList';
import AddHeroForm from './component/AddHeroForm';
import EditHeroForm from './component/EditHeroForm';
import DeleteHeroForm from './component/DeleteHeroForm';

function App() {
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [heroesUpdated, setHeroesUpdated] = useState(false);

  const handleHeroUpdated = () => {
    setHeroesUpdated(!heroesUpdated);
    setEditMode(false);
    setDeleteMode(false);
  };

  const selectHeroToEditOrDelete = (id, mode) => {
    setSelectedHeroId(id);
    if (mode === 'edit') {
      setEditMode(true);
      setDeleteMode(false);
    } else if (mode === 'delete') {
      setEditMode(false);
      setDeleteMode(true);
    }
  };

  return (
    <div>
      <AddHeroForm />
      <HeroesList onHeroSelected={selectHeroToEditOrDelete} heroesUpdated={heroesUpdated} />
      {editMode && selectedHeroId && <EditHeroForm heroId={selectedHeroId} onHeroUpdated={handleHeroUpdated} />}
      {deleteMode && selectedHeroId && <DeleteHeroForm heroId={selectedHeroId} onHeroDeleted={handleHeroUpdated} />}
    </div>
  );
}

export default App;

*/
/*
import React, { useState } from 'react';
import HeroesList from './component/HeroesList';
import AddHeroForm from './component/AddHeroForm';
import EditHeroForm from './component/EditHeroForm';
import DeleteHeroForm from './component/DeleteHeroForm';

function App() {
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [heroesUpdated, setHeroesUpdated] = useState(false);

  const handleHeroUpdated = () => {
    setHeroesUpdated(prevState => !prevState); // Alternar el estado para forzar la actualización
    setEditMode(false);
    setDeleteMode(false);
  };

  const selectHeroToEditOrDelete = (id, mode) => {
    setSelectedHeroId(id);
    if (mode === 'edit') {
      setEditMode(true);
      setDeleteMode(false);
    } else if (mode === 'delete') {
      setEditMode(false);
      setDeleteMode(true);
    }
  };

  return (
    <div>
      <AddHeroForm />
      <HeroesList onHeroSelected={selectHeroToEditOrDelete} heroesUpdated={heroesUpdated} />
      {editMode && selectedHeroId && <EditHeroForm heroId={selectedHeroId} onHeroUpdated={handleHeroUpdated} />}
      {deleteMode && selectedHeroId && <DeleteHeroForm heroId={selectedHeroId} onHeroDeleted={handleHeroUpdated} />}
    </div>
  );
}

export default App;
*/


import React, { useState } from 'react';
import HeroesList from './component/HeroesList';
import AddHeroForm from './component/AddHeroForm';
import EditHeroForm from './component/EditHeroForm';
import DeleteHeroForm from './component/DeleteHeroForm';

function App() {
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [heroesUpdated, setHeroesUpdated] = useState(false);

  const handleHeroUpdated = () => {
    setHeroesUpdated(prevState => !prevState);
    setEditMode(false);
    setDeleteMode(false);
  };

  const selectHeroToEditOrDelete = (id, mode) => {
    setSelectedHeroId(id);
    if (mode === 'edit') {
      setEditMode(true);
      setDeleteMode(false);
    } else if (mode === 'delete') {
      setEditMode(false);
      setDeleteMode(true);
    }
  };

  return (
    <div>
      <AddHeroForm />
      <HeroesList onHeroSelected={selectHeroToEditOrDelete} heroesUpdated={heroesUpdated} />
      {editMode && selectedHeroId && <EditHeroForm heroId={selectedHeroId.toString()} onHeroUpdated={handleHeroUpdated} />}
      {deleteMode && selectedHeroId && <DeleteHeroForm heroId={selectedHeroId.toString()} onHeroDeleted={handleHeroUpdated} />}
    </div>
  );
}

export default App;
