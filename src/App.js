import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import SearchResults from './components/SearchResults';

import { AppContext } from './AppContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

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

  useEffect(() => {
    getMovies();
    getCharacters();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies,
        characters,
        isSearchMode,
        setIsSearchMode,
        searchResults,
        setSearchResults,
      }}
    >
      <div className='App'>
        <Header />
        <SearchBar />
        {!isSearchMode ? <MovieList /> : <SearchResults />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
