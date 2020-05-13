import React, { useState, useContext } from 'react';

import { AppContext } from '../AppContext';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const { characters, setIsSearchMode, searchResults, setSearchResults } = useContext(AppContext);

  const findCharacters = (charName) => {
    return characters.filter((c) => c.name.toLowerCase() === charName.toLowerCase());
  };

  const handleInput = (value) => {
    setSearchValue(value);
  };

  const submitSearch = () => {
    if (searchValue !== '' || searchValue.length >= 3) {
      setSearchResults(findCharacters(searchValue));
      console.log(searchResults);
      setIsSearchMode(true);
    }
  };

  return (
    <div className='search-container'>
      <input
        autoFocus
        placeholder='Search characters...'
        onChange={(event) => handleInput(event.target.value)}
      ></input>
      <button onClick={() => submitSearch()} id='search-btn'>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
