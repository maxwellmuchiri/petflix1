import React, { useState, useEffect } from 'react';
import OrganisationDetails from './OrganisationDetails';

function OrganisationList() {
  const [organisations, setOrganisations] = useState([]);
  const [selectedOrganisation, setSelectedOrganisation] = useState(null);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/63d0df29ebd26539d06758b6')
      .then((response) => response.json())
      .then((data) => setOrganisations(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectOrganisation = (organisation) => {
    setSelectedOrganisation(organisation);
  };

  return (
    <div>
      <h2>Organisations</h2>
      <ul>
        {organisations.map((organisation) => (
          <li key={organisation.id} onClick={() => handleSelectOrganisation(organisation)}>
            {organisation.name}
          </li>
        ))}
      </ul>
      {selectedOrganisation && <OrganisationDetails organisation={selectedOrganisation} />}
    </div>
  );
}

export default OrganisationList;
