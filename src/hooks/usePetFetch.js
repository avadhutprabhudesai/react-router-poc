import { getPetById } from '../data/data';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

export const usePetFetch = () => {
  const { id } = useParams();
  console.log(id);

  const [pet, dispatch] = useReducer((state = {}, action) => {
    console.log(action);
    switch (action.type) {
      case 'SET':
        return {
          ...state,
          ...action.payload,
        };
      default:
        throw Error(`Unsupported action type ${action.type}`);
    }
  });

  useEffect(() => {
    dispatch({ type: 'SET', payload: getPetById(id) });
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then(({ message, status }) => {
        if (status === 'success') {
          dispatch({ type: 'SET', payload: { imageUrl: message } });
        }
      });
  }, [id]);

  return [pet, dispatch];
};
