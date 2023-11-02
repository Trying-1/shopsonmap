import React, { useState } from 'react';
import shop from "../data/shopdetail.json"
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
const shopName=shop.map((shop)=>(shop.shopname))
  const handleSearch = () => {
    if(shopName.includes(searchTerm)){

      console.log(`${searchTerm} found in the map`)
    }
    else{
      console.log(`${searchTerm} not found in the map`)
    }
    setSearchTerm("")
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
