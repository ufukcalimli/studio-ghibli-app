import React from 'react';

const Header = ({ toHome }) => {
  return (
    <header>
      <h1 onClick={() => toHome(false)}>Studio Ghibli</h1>
    </header>
  );
};

export default Header;
