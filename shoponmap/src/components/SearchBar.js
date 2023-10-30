import React, { useState } from 'react';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <div className="search-bar">
      <input
        className='search-input'
        type="text"
        placeholder="Search shops..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
