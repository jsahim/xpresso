import './Menu.css'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import DrinksContainer from '../DrinksContainer/DrinksContainer';

function Menu({drinks, addToCart}){

  return (
    <div className='menu'>
      <section className="menu-options">
        <ul>
          <NavLink to="/menu/all-drinks"><li>All Drinks</li></NavLink>
          <NavLink to="/menu/hot-drinks"><li>Hot Drinks</li></NavLink>
          <NavLink to="/menu/iced-drinks"><li>Iced Drinks</li></NavLink>
        </ul>
      </section>
      <section className="type-container">
        <Switch>
          <Route path="/menu/:drink" render={({match}) => <DrinksContainer drinks={drinks} matchType={match.params.drink} addToCart={addToCart} />}/> 
          <Redirect from="/menu" to="/menu/all-drinks"/> 
        </Switch>
      </section>
    </div>
  )
}

export default Menu;