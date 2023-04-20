import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation(){

  return (
  <nav>
    <ul>
      <NavLink to="/home"><li>HOME</li></NavLink>
      <NavLink to="/menu"><li>MENU</li></NavLink>
      <NavLink to="/home"><li>LOGO</li></NavLink>
      <NavLink to="/profile"><li>PROFILE</li></NavLink>
      <NavLink to="/checkout"><li>CART</li></NavLink>
    </ul>
  </nav>
  )

}

export default Navigation;
