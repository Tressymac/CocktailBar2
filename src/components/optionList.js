import React from 'react';
import Garnish from './options';

const DrunkList = ({Alldrinks}) => {
    return(
       <div className='row'>
            {Alldrinks.map((cup) => <Garnish key={cup._id} {...cup}/>)}
        </div>
    )
}

export default DrunkList;