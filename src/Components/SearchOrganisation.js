import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.jsonbin.io/v3/b/63d0df29ebd26539d06758b6=${query}`)
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
