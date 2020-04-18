import React from 'react';

const Characters = ({ character, setIsCharacterMode }) => {
  return (
    <>
      <p id='get-back' onClick={() => setIsCharacterMode(false)}>{`<--- Go back`}</p>
      <div className='character'>
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Age: {character.age}</li>
          <li>Eye Color: {character.eye_color}</li>
          <li>Hair Color: {character.hair_color}</li>
        </ul>
      </div>
    </>
  );
};

export default Characters;
