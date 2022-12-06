import React from 'react';
import Garnish from './recipe';
import Ingredient from './ingredient';

const DrunkList = ({Alldrinks}) => {
    return(
       <div className='row'>
            {/* {Alldrinks.map((cup) => <Garnish key={cup._id} {...cup} amount={cup.amount} unit={cup.unit} ingredient={cup.ingredient}/>)} */}
            {/* Loop through all of the drinks and create a Garnish component instance for each */}
            {Alldrinks.map((cup) => <Garnish key={cup._id} {...cup}/>)};
            {/* {Alldrinks.map((cup) => <Garnish key={cup._id} {...cup} {...items={...cup.ingredients}.map((i) => unit=items.unit)}  /> )} */}
        </div>
    )
}

export default DrunkList;