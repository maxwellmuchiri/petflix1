// Breed.js
import React from 'react';

const Breed = ({ breed }) => {
  return (
    <div>
      <h1>{breed.name}</h1>
      <p>{breed.description}</p>
    </div>
  );
};

export default Breed;
