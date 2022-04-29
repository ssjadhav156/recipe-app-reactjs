import { useEffect, useState } from 'react';
import './App.css';
import { APP_ID, APP_KEY } from './configs';
import Recipe from './Recipe';
import uuid from 'react-uuid';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const fetchRecipes = async () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await responce.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

  useEffect(() => {
    fetchRecipes();
    // console.log(search);
  }, [query]);

  const handleChange = e => {
    setSearch(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <div className="navigation">
        <div className="title-logo">
          <a href="./">Recipe App</a>
        </div>
        <form onSubmit={handleSubmit} className="search-form">
          <input type="text" value={search} onChange={handleChange} className="search-bar" />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={uuid()}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cuisineType={recipe.recipe.cuisineType}
            source={recipe.recipe.source}
          /> 
        ))}
      </div>
    </div>
  );
}

export default App;
