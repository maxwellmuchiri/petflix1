// AnimalsList.js
import React from 'react';

const AnimalsList = ({ animals, onAnimalsSelect }) => {
  return (
    <div>
      {animals.map(animal => (
        <div key={animal.name} onClick={() => onAnimalsSelect(animal)}>
          {animal.name}
        </div>
      ))}
    </div>
  );
};

export default AnimalsList;
