import React from 'react';

const Drunk = ({name, image, glass, category, ingredients, unit, amount, ingredient, preparation, _id, garnish}) => {
    return(
    <div className="card" style={{width: 18 + "rem"}}>
        <img src={`images/${image}`} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Instructions: {preparation}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Category: {category}</li>
            <li className="list-group-item">Glass: {glass}</li>
            <li className="list-group-item">Garnish: {garnish}</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Recipe</a>
            {/* <a href="#" class="card-link">Another link</a> */}
        </div>
    </div>
    )
}

export default Drunk;