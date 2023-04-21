import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';

function Navigation(){

  return (
  <nav>
    <ul className='navbar'>
      <NavLink to="/home"><li>HOME</li></NavLink>
      <NavLink to="/menu"><li>MENU</li></NavLink>
      <Link to="/home"><li>LOGO</li></Link>
      <NavLink to="/profile"><li>PROFILE</li></NavLink>
      <NavLink to="/checkout"><li>CART</li></NavLink>
    </ul>
  </nav>
  )

}

export default Navigation;
