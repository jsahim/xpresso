import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Cart.css'

function Cart({cartContents, addOrder}){

  const [paymentProcessing, setPaymentProcessing] = useState(false)

  const lineItems = cartContents.map(item => <p>{item.quantity}{item.name}{item.size}{item.price}</p>)
  const orderTotal = cartContents.reduce((acc, item) => {
    acc += item.price
    return acc
  }, 0)

  const processOrder = () => {
    setPaymentProcessing(true)
    addOrder(Date.now(), lineItems, orderTotal)
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
        <h3>Order Summary</h3>
        <div>{lineItems}</div>
        <h3>{orderTotal}</h3>
        {cartContents.length && <button onClick={() => processOrder()}>Process Payment</button>}
      </section>
    </div>
  )
}

export default Cart;