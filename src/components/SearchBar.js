import React, { useState, useContext } from 'react';

import { AppContext } from '../AppContext';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { setIsCharacterMode, setSearchedCharacter } = useContext(AppContext);

  const handleInput = (value) => {
    setSearchValue(value);
  };

  const submitSearch = () => {
    setSearchedCharacter(searchValue);
    setIsCharacterMode(true);
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
