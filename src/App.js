import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Character from './components/Character';

import { AppContext } from './AppContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isCharacterMode, setIsCharacterMode] = useState(false);
  const [searchedCharacter, setSearchedCharacter] = useState('');

  async function getMovies() {
    try {
      const movies = await axios.get('https://ghibliapi.herokuapp.com/films');

      movies.data.map((movie) =>
        Promise.all(movie.people.map((url) => fetch(url).then((res) => res.json()))).then(
          (data) => (movie.people = data),
        ),
      );

      setMovies(movies.data);
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  async function getCharacters() {
    try {
      fetch('https://ghibliapi.herokuapp.com/people')
        .then((res) => res.json())
        .then((data) => setCharacters(data));
    } catch (error) {
      console.log(error);
    }
  }

  const findCharacter = (charName) => {
    return characters.find((char) => char.name.toLowerCase() === charName.toLowerCase());
  };

  let foundCharacter = {};

  if (isCharacterMode) {
    foundCharacter = findCharacter(searchedCharacter);
  }

  useEffect(() => {
    getMovies();
    getCharacters();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies: movies,
        character: foundCharacter,
        setIsCharacterMode,
        setSearchedCharacter,
      }}
    >
      <div className='App'>
        <Header />
        <SearchBar />
        {!isCharacterMode ? <MovieList /> : <Character />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
