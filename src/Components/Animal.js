// Animals.js
import React, { useState, useEffect } from 'react';
import AnimalsList from './AnimalsList';
import AnimalsDetails from './AnimalsDetails';
import Breed from './Breed';

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimals] = useState(null);

  useEffect(() => {
    fetch('https://api.npoint.io/85a754bf9c1951c51700/animals/')
      .then(response => response.json())
      .then(data => setAnimals(data))
      .catch(error => console.log(error));
  }, []);

  const handleAnimalSelect = animal => {
    setSelectedAnimals(animal);
  };

  return (
    <div>
      <AnimalsList animals={animals} onAnimalSelect={handleAnimalsSelect} />
      {selectedAnimals && <AnimalsDetails animal={selectedAnimals} />}
      {selectedAnimals && <Breed breed={selectedAnimals.breed} />}
    </div>
  );
};

export default Animals;
