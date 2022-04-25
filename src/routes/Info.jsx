import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePetFetch } from '../hooks/usePetFetch';

export default function Info({ style }) {
  const [pet] = usePetFetch();
  const navigate = useNavigate();

  return (
    pet && (
      <div className="info" style={style}>
        <img src={pet.imageUrl} alt="" className="image" />
        <h1>{pet.name}</h1>
        <h4>{pet.breed}</h4>
        <p>
          {pet.gender} {pet.age} years old
        </p>
        <button onClick={() => navigate('edit')}>Edit info</button>
      </div>
    )
  );
}
