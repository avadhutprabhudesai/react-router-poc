import { filterPetsByName, getAllPets } from '../data/data';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';

function sortBy(arr, prop) {
  let sorted = arr.slice().sort((a, b) => {
    let valA = a[prop],
      valB = b[prop];

    if (valA < valB) {
      return -1;
    } else if (valA > valB) {
      return 1;
    } else {
      return 0;
    }
  });
  return sorted;
}

export default function List() {
  const [pets, setPets] = useState(() => getAllPets());
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const sortVal = searchParams.get('sort') || 'name';
    setPets(sortBy(filterPetsByName(e.target.query.value), sortVal));
  };
  const handleSort = (e) => {
    setSearchParams({ sort: e.target.value });
  };

  useEffect(() => {
    const sortVal = searchParams.get('sort') || 'name';
    setPets((currentPets) => sortBy(currentPets, sortVal));
  }, [searchParams]);

  console.log(pets);
  return (
    <div className="pets-wrapper">
      <div className="list">
        <label htmlFor="sort">Sort By</label>
        <select
          id="sort"
          value={searchParams.get('sort') || 'name'}
          onChange={handleSort}
        >
          <option value="name" key="name">
            Name
          </option>
          <option value="age" key="age">
            Age
          </option>
        </select>
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
