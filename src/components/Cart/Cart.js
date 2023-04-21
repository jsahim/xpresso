import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Cart.css'

function Cart({cartContents, addOrder, removeItem}){
  const [paymentProcessing, setPaymentProcessing] = useState(false)

  const lineItems = cartContents.map(item => {
    let size = item.size === "small" ? "SM" : item.size === "medium" ? "MD" : item.size === "large" ? "LG" : "OS"
    let drinkCode = item.itemCode
    let amount = item.quantity
    let name = item.name
    let price = item.price
    let newPrice = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    return <div className='line-items'>
            <p>{amount}</p>
            <p>{name}</p>
            <p>{size}</p>
            <p>{newPrice}</p>
            <button onClick={(e)=> removeItem(drinkCode)}>X</button>
          </div>
  })

  const orderTotal = cartContents.reduce((acc, item) => {
    acc += item.price
    return acc
  }, 0)

  const newTotal = orderTotal.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })


  const getOrderDisplay = () => {
    if(!cartContents.length){
      return <p>Cart is empty.</p>
    } else {
      return <>
          {lineItems}
          <div className='total-details'>
            <p>TOTAL:</p>
            <h3>{newTotal}</h3>
          </div>
          </>
    }
  }

  const processOrder = () => {
    const orderCode = Date.now().toString() + "O"
    setPaymentProcessing(true)
    addOrder(orderCode, lineItems, orderTotal)
  }

  return (
    <div className='cart'>
      {paymentProcessing && <div className='conf-screen'>
        <p>THANK YOU FOR YOUR ORDER!</p>
        <p>Please click the "continue" button to view your order details.</p>
        <NavLink to="/home"><button onClick={()=> setPaymentProcessing(false)}>CONTINUE</button></NavLink>
        </div>}
      <section className="delivery-payment">
        <div className='cart-content'>
          <h3>Delivery</h3>
          <p>Delivery Detail 1</p>
          <p>Delivery Detail 2</p>
          <h3>Payment</h3>
          <p>Payment Detail 1</p>
          <p>Payment Detail 2</p>
        </div>
      </section>
      <section className="order-summary">
        <div className='cart-content'>
          <h3 className='summary-header'>Order Summary</h3>
          {getOrderDisplay()}
          {cartContents.length && <button onClick={() => processOrder()}>PAY NOW</button>}
        </div>
      </section>
    </div>
  )
}

export default Cart;