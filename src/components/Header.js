import { Link as RouterLink } from 'react-router-dom'
import './Header.css'

function Header( {buddingPopWine} ){
    return(
        <header className='App-header'>
            <img src={buddingPopWine} className="App-logo" alt='Budding pop drink wine' />
            <nav>
                <RouterLink to='/' className='App-link'>View drinks</RouterLink>
                <RouterLink to='/Recipe' className='App-link'>View Recipes</RouterLink>
            </nav>
        </header>
    )
}

export default Header;