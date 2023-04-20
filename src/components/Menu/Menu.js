import './Menu.css'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import DrinksContainer from '../DrinksContainer/DrinksContainer';

function Menu({drinks, addToCart}){
  return (
    <div className='menu'>
      <section className="menu-options">
        <h2>MENU</h2>
        <ul>
          <NavLink to="/menu/all-drinks"><li>ALL DRINKS</li></NavLink>
          <NavLink to="/menu/hot-drinks"><li>HOT DRINKS</li></NavLink>
          <NavLink to="/menu/iced-drinks"><li>ICED DRINKS</li></NavLink>
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