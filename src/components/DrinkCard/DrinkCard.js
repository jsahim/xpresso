import './DrinkCard.css'
import { useState } from 'react';

function DrinkCard({image, name, id, description, ingredients, oneSize, small, medium, large, addToCart}){

  const [drinkSelect, setDrinkSelect] = useState(null)
  const [sizeSelect, setSizeSelect] = useState('')
  const [selectionError, setSelectionError] = useState('')


  const sendToCart = (e, id, size) => {
    e.preventDefault()
    if(size){
      addToCart(id, size)
    } else {
      setSelectionError("YOU MUST SELECT A SIZE")
    }
  }

  return (
    <div className='drink-card'>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>- {ingredients}</p>
      <p>{description}</p>
      <p>Please select your drink size:</p>
      <form>
        {oneSize && <>
          <label>
            <input
              id={id}
              type="radio"
              value="oneSize"
              checked={sizeSelect === "oneSize"}
              onChange={(e) => {
                setSizeSelect(e.target.value)
                setDrinkSelect(e.target.id)
                setSelectionError("")
              }}
            />
            One Size: ${oneSize}
          </label>
        </>}
        {!oneSize && <>
          <label>
            <input
              id={id}
              type="radio"
              value="small"
              checked={sizeSelect === "small"}
              onChange={(e) => {
                setSizeSelect(e.target.value)
                setDrinkSelect(e.target.id)
                setSelectionError("")
              }}
            />
            Small: ${small}
          </label>
          <label>
            <input
              id={id}
              type="radio"
              value="medium"
              checked={sizeSelect === "medium"}
              onChange={(e) => {
                setSizeSelect(e.target.value)
                setDrinkSelect(e.target.id)
                setSelectionError("")
              }}
            />
            Medium: ${medium}
          </label>
          <label>
            <input
              id={id}
              type="radio"
              value="large"
              checked={sizeSelect === "large"}
              onChange={(e) => {
                setSizeSelect(e.target.value)
                setDrinkSelect(e.target.id)
                setSelectionError("")
              }}
            />
            Large: ${large}
          </label>
        </>}
        <input type="submit" value="Add to Cart" onClick={(e) => {
          sendToCart(e, drinkSelect, sizeSelect)
          setSizeSelect("")
          }}/>
        {selectionError && <p>{selectionError}</p> }
      </form>
    </div>
  )
}

export default DrinkCard;