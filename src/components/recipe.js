import React from 'react';
import Ingredient from './ingredient';

const Recipe = ({name, image, glass, category, ingredients, unit, amount, ingredient, preparation, _id, garnish}) => {
    return(
    <div className="card" style={{width: 18 + "rem"}}>
        <img src={`images/${image}`} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            {ingredients.map((itemsNeeded) => <Ingredient unit={itemsNeeded.unit} amount={itemsNeeded.amount} ingredient={itemsNeeded.ingredient}/>)}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Last Step: {preparation}</li>
            <li className="list-group-item">Enjoy ( ´ ∀ `)ノ～ ♡</li>
        </ul>
    </div>
    )
}

export default Recipe;