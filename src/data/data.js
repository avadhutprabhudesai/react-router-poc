const pets = [
  {
    id: 1,
    name: 'Scooby',
    breed: 'Golden Retriever',
    age: 2.5,
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Max',
    breed: 'Husky',
    age: 0.6,
    gender: 'Male',
  },
  {
    id: 3,
    name: 'Tofu',
    breed: 'Shitzu',
    age: 6,
    gender: 'Male',
  },
  {
    id: 4,
    name: 'Oslo',
    breed: 'Doberman',
    age: 1,
    gender: 'Male',
  },
  {
    id: 5,
    name: 'Roger',
    breed: 'Terrier',
    age: 2.5,
    gender: 'Male',
  },
  {
    id: 6,
    name: 'Ruby',
    breed: 'Border Collie',
    age: 7,
    gender: 'Female',
  },
  {
    id: 7,
    name: 'Merley',
    breed: 'Pitbull',
    age: 4,
    gender: 'Female',
  },
];

export const getAllPets = () => pets;

export const getPetById = (id) => pets.find((pet) => pet.id === +id);

export const filterPetsByName = (query) =>
  pets.filter((pet) =>
    pet.name.toLowerCase().startsWith(String(query).toLowerCase())
  );

export const editById = (id, update) => {
  const pet = pets.find((pet) => pet.id === +id);
  if (pet) {
    for (let prop in update) {
      pet[prop] = update[prop];
    }
  }
  console.log(pets);
};
