import React from 'react';

const Ingredient = ({unit, amount, ingredient}) => {
    return(
        <p className="card-text">{amount} {unit} of {ingredient} </p>
    )
}

export default Ingredient;