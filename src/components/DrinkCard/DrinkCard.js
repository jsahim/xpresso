import './DrinkCard.css'

function DrinkCard(props){
  return (
    <div className='drink-card'>
      <img src={props.image} alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default DrinkCard;