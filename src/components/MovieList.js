import React, { useState, useContext } from 'react';

import { AppContext } from '../AppContext';

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
          <div className='movie-desc'>
            <p>{movie.description}</p>
            <p>More info...</p>
          </div>
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
