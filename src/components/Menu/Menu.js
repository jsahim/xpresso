import './Menu.css'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import DrinksContainer from '../DrinksContainer/DrinksContainer';

function Menu({drinks}){
  return (
    <div className='menu'>
      <section className="menu-options">
        <h2>MENU</h2>
        <ul>
          <NavLink to="/menu/all-drinks"><li>ALL</li></NavLink>
          <NavLink to="/menu/hot-drinks"><li>HOT</li></NavLink>
          <NavLink to="/menu/iced-drinks"><li>ICED</li></NavLink>
        </ul>
      </section>
      <section className="type-container">
        <Switch>
          <Route path="/menu/:drink" render={({match}) => <DrinksContainer drinks={drinks} matchType={match.params.drink} />}/> 
          <Redirect from="/menu" to="/menu/all"/> 
        </Switch>
      </section>
    </div>
  )
}

export default Menu;