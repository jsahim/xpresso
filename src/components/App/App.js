import './App.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Home />
        <Menu />
        <Profile />
        <Cart />
      </main>
      <footer>
        <div>PLACEHOLDER</div>
      </footer>
    </div>
  );
}

export default App;
