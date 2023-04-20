import './Menu.css'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AllDrinks from '../AllDrinks/AllDrinks';
import HotDrinks from '../HotDrinks/HotDrinks';
import IcedDrinks from '../IcedDrinks/IcedDrinks';

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
          <Route path="/menu/all-drinks" render={() => <AllDrinks drinks={drinks} />}/> 
          <Route path="/menu/hot-drinks" render={() => <HotDrinks />}/> 
          <Route path="/menu/iced-drinks" render={() => <IcedDrinks />}/>
          <Redirect from="/menu" to="/menu/all-drinks"/> 
        </Switch>
      </section>
    </div>
  )
}

export default Menu;