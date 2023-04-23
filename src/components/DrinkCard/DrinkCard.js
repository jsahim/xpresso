import './DrinkCard.css'
import { useState } from 'react';

function DrinkCard({image, name, id, description, ingredients, oneSize, small, medium, large, addToCart}){

  const [sizeSelect, setSizeSelect] = useState('')

  const sendToCart = (e, size) => {
    if(size){
      e.preventDefault()
      addToCart(id, size)
    }
  }

  const getSizeOptions = () => {
    if(oneSize){
      return <option value="oneSize">One Size</option>
    } else {
      return <>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      </>
    }
  }

  const getPrice = () => {
    if(sizeSelect === "oneSize"){
      return ` - $${oneSize}`
    } else if (sizeSelect === "small"){
      return ` - $${small}`
    } else if (sizeSelect === "medium"){
      return ` - $${medium}`
    } else if (sizeSelect === "large"){
      return ` - $${large}`
    } else {
      return null
    }
  }

  return (
    <div className='drink-card'>
      <img src={image} alt={name}/>
      <div className='drink-details'>
        <h2>{name}</h2>
        <p>► {ingredients}</p>
        <p className='drink-description'>{description}</p>
        <form className='choose-size'>
          <select value={sizeSelect} onChange={e => setSizeSelect(e.target.value)} required>
            <option value="" disabled>Select a Size</option>
            {getSizeOptions()}
          </select>
          <button onClick={e => {
            sendToCart(e, sizeSelect)
            setSizeSelect('')
          }}>Add to Cart{getPrice()}</button>
        </form>
      </div>
    </div>
  )
}

export default DrinkCard;