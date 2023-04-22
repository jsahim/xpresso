import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, NavLink, useLocation } from 'react-router-dom';
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
  const [placedOrders, setPlacedOrders] = useState([])
  const [error, setError] = useState("")
  const location = useLocation()
  const user = sampleUser
  

  useEffect(() => {
    getCoffeeDrinks()
  }, [])

  const getCoffeeDrinks = async () => {
    try {
      const [hotResponse, coldResponse] = await Promise.all([
        fetch("https://api.sampleapis.com/coffee/hot"),
        fetch("https://api.sampleapis.com/coffee/iced")
      ]);
      const fetchedHotCoffees = await hotResponse.json()
      const fetchedIcedCoffees = await coldResponse.json()
      console.log(fetchedIcedCoffees)
      const allCleanedDrinks = cleanDrinkData(fetchedHotCoffees, fetchedIcedCoffees)
      setCoffeeDrinks(allCleanedDrinks)
    } catch(err) {
      setError(err.message)
    }
  }

  const displayCartMessage = () => {
    if(drinksInCart.length && location.pathname !== "/checkout"){
      return <footer>
              <p>There are {drinksInCart.length} item(s) in your cart.</p>
              <NavLink to="/checkout"><button>CHECKOUT</button></NavLink>
            </footer>
    }
  } 

  const addToCart = (id, size) => {
    const locatedDrink = coffeeDrinks.find(drink => drink.id == id)
    const itemCode = Date.now().toString() + "I"
    const formattedDrink = {
      itemCode: itemCode,
      id: locatedDrink.id,
      quantity: "1",
      name: locatedDrink.name,
      size: size,
      price: locatedDrink[size]
    }
    setDrinksInCart([...drinksInCart, formattedDrink])
  }

  const removeFromCart = (code) => {
    const filteredDrinks = drinksInCart.filter(drink => drink.itemCode != code)
    setDrinksInCart(filteredDrinks)
  }

  const addOrder = (code, lineItems, total, user) => {
    const timeStamp = new Date().toString()
    const payment = `${user.ccType.toUpperCase()} -${user.ccNum.slice(-4)}`
    const newOrder = {
      orderCode: code,
      timeStamp: timeStamp,
      lineItems: lineItems,
      payment: payment,
      total: total
    }
    setDrinksInCart([])
    setPlacedOrders([...placedOrders, newOrder])
  }

  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
      {error && <h3>Sorry, there was an error because: {error}.</h3>}
        <Switch>
          <Route path="/home" render={() => <Home orders={placedOrders}/>}/> 
          <Route path="/menu" render={() => <Menu drinks={coffeeDrinks} addToCart={addToCart}/>}/> 
          <Route path="/profile" render={() => <Profile user={user}/>}/> 
          <Route path="/checkout" render={() => <Cart user={user} cartContents={drinksInCart} addOrder={addOrder} removeItem={removeFromCart}/>}/> 
          <Redirect from="/" to="/home"/>
        </Switch>
      </main>
          {displayCartMessage()}
    </div>
  );
}

export default App;
