import { filterPetsByName, getAllPets } from '../data/data';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function List() {
  const [pets, setPets] = useState(() => getAllPets());
  const handleSubmit = (e) => {
    e.preventDefault();
    setPets(filterPetsByName(e.target.query.value));
  };
  return (
    <div className="pets-wrapper">
      <div className="list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="query"
            name="query"
            placeholder="Search by name"
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {pets.map((pet) => (
            <li className="card" key={pet.id}>
              <Link to={`/pets/${pet.id}`}>
                <h2>{pet.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
