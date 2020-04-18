import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

const Header = ({ toHome }) => {
  const { setIsCharacterMode } = useContext(AppContext);
  return (
    <header>
      <h1 onClick={() => setIsCharacterMode(false)}>Studio Ghibli</h1>
    </header>
  );
};

export default Header;
