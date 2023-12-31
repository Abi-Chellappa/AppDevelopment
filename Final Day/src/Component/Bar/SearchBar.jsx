import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Use the `navigate` function to navigate to the dedicated place page
    navigate(`/${searchQuery}`);
  };

  return (
    <div className='search'>
      <input className='srch'
        type="text"
        placeholder="Search for a place..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='btn' onClick={handleSearch}>Search</button>

      
    </div>
  );
}

export default SearchBar;
