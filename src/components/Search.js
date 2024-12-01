import { useState } from 'react';
import RecipeResults from './RecipeResults.js';
const Search = () => {

    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResults, setSearchResults] = useState(null);



    const HandelClick = async () => {
        try {
            const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?' +
                'apiKey=efe593a744b44df3a0475ca738029caf&query=' + searchQuery);

            // Check if the response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            const responseJson = await response.json();

            // Update the state with the fetched recipes
            setSearchResults(responseJson.results);
        } catch (error) {
            // Catch any errors and log them
            console.error('Error during fetch:', error);
        }
    };

    return (
        <>
            <div className="search-container">
                <input type="text"
                    placeholder="Search By Ingredients..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={HandelClick}>Search</button>
            </div>
            {searchResults ? <RecipeResults recipes={searchResults} /> : null}
        </>
    )
}
export default Search;