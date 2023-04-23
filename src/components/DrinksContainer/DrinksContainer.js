import './DrinksContainer.css';
import PropTypes from 'prop-types';
import DrinkCard from '../DrinkCard/DrinkCard'

function DrinksContainer({drinks, matchType, addToCart}){

  let filteredDrinks
  if(matchType === "hot-drinks"){
    filteredDrinks = drinks.filter(drink => drink.type === "hot")
  } else if(matchType === "iced-drinks") {
    filteredDrinks = drinks.filter(drink => drink.type === "iced")
  } else {
    filteredDrinks = drinks
  }

  const chosenDrinks = filteredDrinks.map(drink => {
    return (
      <DrinkCard 
        id={drink.id}
        key={Math.random()}
        name={drink.name}
        description={drink.description}
        ingredients={drink.ingredients}
        type={drink.type}
        image={drink.image}
        oneSize={drink.oneSize}
        small={drink.small}
        medium={drink.medium}
        large={drink.large}
        addToCart={addToCart}
      />
    )
  })

  return (
    <div className='drinks-container'>
      {!chosenDrinks.length && <img src="https://intelligence.businesseventsthailand.com/files/site_loader/site_loader_image5.gif" className='loading'/>}
      {chosenDrinks}
    </div>
  );
}

export default DrinksContainer;

DrinksContainer.propTypes = {
  drinks: PropTypes.array.isRequired,
  matchType: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};