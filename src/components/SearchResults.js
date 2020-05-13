import React, { useContext } from 'react';

import { AppContext } from '../AppContext';
import Character from './Character';

const SearchResults = () => {
  const { searchResults, setIsSearchMode } = useContext(AppContext);

  return (
    <>
      <p id='get-back' onClick={() => setIsSearchMode(false)}>{`<--- Go back`}</p>
      {searchResults.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </>
  );
};

export default SearchResults;
