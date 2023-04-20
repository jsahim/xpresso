import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Cart.css'

function Cart({cartContents, addOrder, removeItem}){

  const [paymentProcessing, setPaymentProcessing] = useState(false)

  const lineItems = cartContents.map(item => {
    let size = item.size === "small" ? "SM" : item.size === "medium" ? "MD" : item.size === "large" ? "LG" : "OS"
    const key = item.key
    const amount = item.quantity
    const name = item.name
    const price = item.price
    return <div className='line-items'>
            <p>{amount}</p>
            <p>{name}</p>
            <p>{size}</p>
            <p>{price}</p>
            <button onClick={()=> removeItem(key)}>X</button>
          </div>
  })

  const orderTotal = cartContents.reduce((acc, item) => {
    acc += item.price
    return acc
  }, 0)

  const processOrder = () => {
    const confNum = Date.now()
    setPaymentProcessing(true)
    addOrder(confNum, lineItems, orderTotal)
  }

  return (
    <div className='cart'>
      {paymentProcessing && <div className='conf-screen'>
        <p>THANK YOU FOR YOUR ORDER!</p>
        <NavLink to="/home"><button onClick={()=> setPaymentProcessing(false)}>CONTINUE</button></NavLink>
        </div>}
      <section className="delivery-payment">
        <h3>Delivery</h3>
        <p>Delivery Detail 1</p>
        <p>Delivery Detail 2</p>
        <h3>Payment</h3>
        <p>Payment Detail 1</p>
        <p>Payment Detail 2</p>
      </section>
      <section className="order-summary">
        <h3 className='summary-header'>Order Summary</h3>
        <div>{lineItems}</div>
        <h3>{orderTotal}</h3>
        {cartContents.length && <button onClick={() => processOrder()}>PAY NOW</button>}
      </section>
    </div>
  )
}

export default Cart;