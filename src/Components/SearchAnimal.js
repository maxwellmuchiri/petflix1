import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.npoint.io/85a754bf9c1951c51700/animals/=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.log(error));
    setResults([{name:'result 1'},{name:'result 2'}]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <button type="submit">Search</button>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.name}>{result.name}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Search;
