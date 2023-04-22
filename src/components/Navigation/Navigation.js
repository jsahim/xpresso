import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';

function Navigation({cartContents}){

  const getCartContents = () => {
    if(!cartContents.length ){
      return ''
    } else {
      return cartContents.length
    }
  }

  return (
  <nav>
    <ul className='navbar'>
      <NavLink to="/home"><li>HOME</li></NavLink>
      <NavLink to="/menu"><li>MENU</li></NavLink>
      <Link to="/home"><img src="https://user-images.githubusercontent.com/107663888/233799142-9fdde281-3a5f-4e0b-8b7f-9873273069c1.png" alt="xpresso" /></Link>
      <NavLink to="/profile"><li><span className="material-symbols-outlined">account_circle</span></li></NavLink>
      <NavLink to="/checkout"><li><span className="material-symbols-outlined bag">shopping_bag</span>
      <span className='number-display'>{getCartContents()}</span>
      </li></NavLink>
    </ul>
  </nav>
  )

}

export default Navigation;