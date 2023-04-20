import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import cleanDrinkData from '../../utils/utilities';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';

function App() {

  const [coffeeDrinks, setCoffeeDrinks] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    getCoffeeDrinks()
  }, [])

  const getCoffeeDrinks = async () => {
    try {
      const hotResponse = await fetch("https://api.sampleapis.com/coffee/hot")
      const coldResponse = await fetch("https://api.sampleapis.com/coffee/iced")
      const fetchedHotCoffees = await hotResponse.json()
      const fetchedIcedCoffees = await coldResponse.json()
      const allCleanedDrinks = cleanDrinkData(fetchedHotCoffees, fetchedIcedCoffees)
      setCoffeeDrinks(allCleanedDrinks)
    } catch(err) {
      setError(err.message)
    }
  }

  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/home" render={() => <Home />}/> 
          <Route path="/menu" render={() => <Menu />}/> 
          <Route path="/profile" render={() => <Profile />}/> 
          <Route path="/checkout" render={() => <Cart />}/> 
          <Redirect from="/" to="/home"/>
        </Switch>
      </main>
      <footer>
        <div>PLACEHOLDER</div>
      </footer>
    </div>
  );
}

export default App;
