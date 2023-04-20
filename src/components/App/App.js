import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import cleanDrinkData from '../../utils/utilities';
import sampleUser from '../../utils/sampleUser';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';

function App() {

  const [coffeeDrinks, setCoffeeDrinks] = useState([]);
  const [drinksInCart, setDrinksInCart] = useState([])
  const [loading, setLoading] = useState(false)
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

  const addToCart = (id, size) => {
    const locatedDrink = coffeeDrinks.find(drink => drink.id == id)
    const formattedDrink = {
      id: locatedDrink.id,
      quantity: "1",
      name: locatedDrink.name,
      size: size,
      price: locatedDrink[size]
    }
    setDrinksInCart([...drinksInCart, formattedDrink])
  }

  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
      {error && <h3>{error}</h3>}
        <Switch>
          <Route path="/home" render={() => <Home />}/> 
          <Route path="/menu" render={() => <Menu drinks={coffeeDrinks} addToCart={addToCart}/>}/> 
          <Route path="/profile" render={() => <Profile user={sampleUser}/>}/> 
          <Route path="/checkout" render={() => <Cart user={sampleUser} cartContents={drinksInCart}/>}/> 
          <Redirect from="/" to="/home"/>
        </Switch>
      </main>
      <footer>
        {drinksInCart.length > 0 && <div className="cart-banner">
          <p>You have {drinksInCart.length} item(s) in your cart</p>
          <NavLink to="/checkout"><button>CHECKOUT</button></NavLink>
        </div>}
      </footer>
    </div>
  );
}

export default App;
