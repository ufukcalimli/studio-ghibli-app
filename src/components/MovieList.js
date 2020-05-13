import React, { useState, useContext } from 'react';

import { AppContext } from '../AppContext';

const Character = ({ character }) => {
  return (
    <div className='character'>
      <h6>{character.name}</h6>
      <ul>
        <li>Gender: {character.gender}</li>
        <li>Age: {character.age}</li>
        <li>Eye Color: {character.eye_color}</li>
        <li>Hair Color: {character.hair_color}</li>
      </ul>
    </div>
  );
};

const Movie = ({ movie }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <div className='movie-container'>
        <h4 onClick={() => handleCollapse()}>{movie.title}</h4>
        <h5>{movie.release_date}</h5>
        {collapse && (
          <>
            <div className='movie-desc'>
              <p>{movie.description}</p>
              <p>More info...</p>
            </div>
            <div className='characters'>
              {movie.people[0].slice(0, 5).map((character) => (
                <Character character={character} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

const MovieList = () => {
  const { movies } = useContext(AppContext);
  return (
    <div className='movie-list-container'>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
