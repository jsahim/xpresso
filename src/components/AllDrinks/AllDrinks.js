import './AllDrinks.css';
import DrinkCard from '../DrinkCard/DrinkCard'

function AllDrinks({drinks}){
  const allDrinks = drinks.map(drink => {
    return (
      <DrinkCard 
        key={drink.id}
        id={drink.id}
        name={drink.name}
        description={drink.description}
        ingredients={drink.ingredients}
        type={drink.type}
        image={drink.image}
        oneSize={drink.oneSize}
        smallPrice={drink.smallPrice}
        mediumPrice={drink.mediumPrice}
        largePrice={drink.largePrice}
      />
    )
  })

  return (
    <div className='all-drinks-container'>
      {allDrinks}
    </div>
  );
}

export default AllDrinks;