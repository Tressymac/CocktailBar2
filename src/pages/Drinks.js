import { useState, useEffect } from 'react';
import axios from 'axios';
import OptionList from '.././components/optionList';

function Drinks (){
        const [isLoading, setIsLoading] = useState(false);
        const [drinks, setDrinks] = useState([]);
    
        useEffect( () => {
            const loadDrinks = async () => {
                try {
                    const response = await axios.get(`https://jessy-cocktailbar-recipe.uc.r.appspot.com/api/v1/Drinks`);
                    // setDrinks(response.data);
                    setDrinks((drinks) => [...response.data]);
                }
                catch (error) {
                    console.log("Error :(");
                }
                finally {
                    setIsLoading(false);
                }
            };
    
            // set isload to true 
            setIsLoading(true);
            loadDrinks();
        }, []);
    
        return  (
            <div>
                <h1 className='Welcome'>Welcome</h1>
                <div style={{marginLeft: 10 + "%"}}>
                    {isLoading ? <span>Loading...</span> : (
                        <div>
                            <OptionList Alldrinks={drinks} />
                        </div>
                    )}
                </div>
            </div>
        )

}

export default Drinks;