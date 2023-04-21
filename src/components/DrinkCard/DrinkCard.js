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
      <div className='drink-details'>
        <h2>{name}</h2>
        <p>► {ingredients}</p>
        <p className='drink-description'>{description}</p>
        <p>Select a size:</p>
        <form className='choose-size'>
        <div className='size-btn-container'>
          {oneSize && <>
            <label>
              <input id={id} type="radio" value="oneSize" checked={sizeSelect === "oneSize"}
                onChange={(e) => {
                  setSizeSelect(e.target.value)
                  setDrinkSelect(e.target.id)
                  setSelectionError("")
                }}
              />One Size
              </label>
            <p>${oneSize}</p>
          </>}
          {!oneSize && <>
            <label>
              <input id={id} type="radio" value="small" checked={sizeSelect === "small"}
                onChange={(e) => {
                  setSizeSelect(e.target.value)
                  setDrinkSelect(e.target.id)
                  setSelectionError("")
                }}
              />Small
              </label>
            <p>${small}</p>
            <label>
              <input id={id} type="radio" value="medium" checked={sizeSelect === "medium"}
                onChange={(e) => {
                  setSizeSelect(e.target.value)
                  setDrinkSelect(e.target.id)
                  setSelectionError("")
                }}
              />Medium
            </label>
            <p>${medium}</p>
            <label>
              <input id={id} type="radio" value="large" checked={sizeSelect === "large"}
                onChange={(e) => {
                  setSizeSelect(e.target.value)
                  setDrinkSelect(e.target.id)
                  setSelectionError("")
                }}
              />Large
            </label>
            <p>${large}</p>
          </>}
          </div>
          <div className='add-btn-container'>
            <input type="submit" value="Add to Order" className='add-btn' 
              onClick={(e) => {
                sendToCart(e, drinkSelect, sizeSelect)
                setSizeSelect("")
              }}/>
            {selectionError && <p>{selectionError}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default DrinkCard;