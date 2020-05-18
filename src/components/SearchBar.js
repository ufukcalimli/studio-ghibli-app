import React, { useState, useContext } from "react";

import { AppContext } from "../AppContext";

const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");

	const { characters, setIsSearchMode, setSearchResults } = useContext(AppContext);

	// change parameter name to make clear you check an inputValue against character names
	const findCharacters = (inputValue) => {
		return characters.filter(
			(c) =>
				// Do you want to store all characters that have an 'a' or 'as' or 'ash' anywhere in the name _or_ do you want to show all characters whose name _starts_ with 'a' or 'as' or 'ash' or...?
				c.name.toLowerCase() === inputValue.toLowerCase() ||
				c.name.toLowerCase().includes(inputValue.toLowerCase())
			// ...in that case use startsWith string function as in
			// c.name.toLowerCase().startsWith(inputValue.toLowerCase())
		);
	};

	const submitSearch = (value = "") => {
		setSearchValue(value);
		// assign a default value ('') to argument so no need to check for more than it's length
		if (value.length >= 3) {
			// setState (or the useState hook equivalent) is asynchronous. So the state prop searchValue only has the assigned value ('value') in the _next_ call to submitSearch(). Use findCharacters() if you want to search for the _current_ input value
			setSearchResults(findCharacters(value));
			setIsSearchMode(true);
		}
	};

	return (
		<div className='search-container'>
			<input
				autoFocus
				placeholder='Search characters...'
				onChange={(event) => submitSearch(event.target.value)}></input>
			<button onClick={() => submitSearch(searchValue)} id='search-btn'>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
