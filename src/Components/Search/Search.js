import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';


const Search = () => {
    const APP_ID = process.env.REACT_APP_ID;
    const APP_KEY = process.env.REACT_APP_KEY;
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');    

    useEffect(() => {
        getRecipes();
      }, [query]);
    
      const getRecipes = async () => {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
      };
    
      const updateSearch = (e) => {
        setSearch(e.target.value);
      };
    
      const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      };

    return (
    <div>

        <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-input"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    />
                <button className="search-button" type="submit">
                    Search
                </button>
        </form>

        {recipes.map((recipe) => (
                <Recipe
                key={recipe.recipe.calories}
                label={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
        ))}
        
    </div>
    )
};

export default Search;