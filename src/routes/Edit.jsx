import { editById } from '../data/data';
import React from 'react';
import { usePetFetch } from '../hooks/usePetFetch';

export default function Edit({ style }) {
  const [pet, dispatch] = usePetFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    editById(pet.id, {
      name: pet.name,
      age: pet.age,
      breed: pet.breed,
      gender: pet.gender,
    });
  };
  return (
    pet && (
      <div className="edit" style={style}>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Name</label>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'SET',
                  payload: { name: e.target.value },
                })
              }
              id="name"
              name="name"
              type="text"
              value={pet.name}
            />
          </div>
          <div className="form-control">
            <label>Breed</label>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'SET',
                  payload: { breed: e.target.value },
                })
              }
              id="breed"
              name="breed"
              type="text"
              value={pet.breed}
            />
          </div>
          <div className="form-control">
            <label>Age</label>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'SET',
                  payload: { age: e.target.value },
                })
              }
              id="age"
              name="age"
              type="number"
              value={pet.age}
            />
          </div>
          <div className="form-control">
            <label>Gender</label>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'SET',
                  payload: { gender: e.target.value },
                })
              }
              type="radio"
              name="gender"
              value="Male"
              id="male"
              checked={'Male' === pet.gender}
            />
            <label htmlFor="male">Male</label>
            <input
              onChange={(e) =>
                dispatch({
                  type: 'SET',
                  payload: { gender: e.target.value },
                })
              }
              type="radio"
              name="gender"
              value="Female"
              id="female"
              checked={'Female' === pet.gender}
            />
            <label htmlFor="female">Female</label>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  );
}
