
import React from 'react';

function OrganisationDetails({ organisation }) {
  return (
    <div>
      <h2>{organisation.name}</h2>
      <p>Location: {organisation.location}</p>
      <p>Phone: {organisation.phone}</p>
    </div>
  );
}

export default OrganisationDetails;
 