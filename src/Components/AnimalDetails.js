// AnimalsDetails.js
import React from 'react';

const AnimalsDetails = ({ animal }) => {
  return (
    <div>
      <h1>{animal.name}</h1>
      <p>{animal.description}</p>
    </div>
  );
};

export default AnimalsDetails;
