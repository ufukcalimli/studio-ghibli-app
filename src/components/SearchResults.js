import React, { useContext } from "react";

import { AppContext } from "../AppContext";
import Character from "./Character";

const SearchResults = () => {
	const { searchResults, setIsSearchMode } = useContext(AppContext);

	return (
		<>
			<p id='get-back' onClick={() => setIsSearchMode(false)}>{`<--- Go back`}</p>
			{searchResults.length > 1
				? // why display 2 or more search results? If you typed the name of an existing character (eg 'ashitaka') and it only appears once in the Characters list it now is not displayed. With
				  // searchResults.length > 0
				  // it is displayed
				  searchResults.map((character) => <Character character={character} key={character.id} />)
				: null}
		</>
	);
};

export default SearchResults;
