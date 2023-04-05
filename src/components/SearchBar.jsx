import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleInputChange(event) {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  }

  return (
    <div className='search-bar'>
      <input autoFocus= {true} className='search-input' type="text" value={query} onChange={handleInputChange} placeholder="Search users..." />
    </div>
  );
}

export default SearchBar;
