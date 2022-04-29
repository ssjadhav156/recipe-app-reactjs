import style from './Recipe.module.css';
import uuid from 'react-uuid';

const Recipe = ({ title, calories, image, ingredients, cuisineType, source}) => {

    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="" />
            <h1>{title}</h1>
            <p>Cuisine Type: {cuisineType}</p>
            <p>Calories: {calories}</p>
            <ul className={style.listitems}>
            <h3>Ingredients Required:</h3>
                {ingredients.map(ingredient =>(
                    <li key={uuid()}>{ingredient.text}</li>
                ))}
            </ul>
            <h3>Source: {source}</h3>
        </div>
    );
}

export default Recipe;