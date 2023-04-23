import { useState } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import './Cart.css'

function Cart({cartContents, addOrder, removeItem, user}){
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
    return <div key={Math.random()} className='line-items'>
            <p>{amount}</p>
            <p>{name}</p>
            <p>{size}</p>
            <p>{newPrice}</p>
            <button className="remove-btn" onClick={(e)=> removeItem(drinkCode)}>
              <span className="material-symbols-outlined remove-icon">cancel</span>
            </button>
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
      return <p>Your Cart is Empty!</p>
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
    addOrder(orderCode, lineItems, orderTotal, user)
  }

  return (
    <div className='cart'>
      {paymentProcessing && <div className='conf-overlay'>
          <div className='conf-screen'>
          <p>THANK YOU FOR YOUR ORDER!</p>
          <p>Please click the <b><em>continue</em></b> button to view your order details.</p>
          <NavLink to="/home"><button className='continue-btn' onClick={()=> setPaymentProcessing(false)}>CONTINUE</button></NavLink>
          </div>
        </div>}
      <section className="delivery-payment">
        <h2 className='sub-head'>DELIVERY</h2>
        <div className='cart-content delivery-details'>
          <div className='delivery'>
            <h3>Address</h3>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.street}</p>
            <p>{user.city}, {user.state} {user.zip}</p>
          </div>
          <div className='delivery'>
            <h3>Payment</h3>
            <p>{user.ccType}</p>
            <p>Exp: {user.ccExp}</p>
            <p>{user.ccNum}</p>
          </div>
        </div>
      </section>
      <section className="order-summary">
        <h2 className='sub-head'>CART</h2>
        <div className='cart-content'>
          <h3 className='summary-header'>Order Summary</h3>
          {getOrderDisplay()}
          {cartContents.length && <button className='pay-now' onClick={() => processOrder()}>PAY NOW</button>}
        </div>
      </section>
    </div>
  )
}

export default Cart;

Cart.propTypes = {
  cartContents: PropTypes.array.isRequired,
  addOrder: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};