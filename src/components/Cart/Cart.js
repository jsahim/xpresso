import './Cart.css'

function Cart({cartContents}){
  const lineItems = cartContents.map(item => <p>{item.quantity}{item.name}{item.size}{item.price}</p>)
  const orderTotal = cartContents.reduce((acc, item) => {
    acc += item.price
    return acc
  }, 0)

  return (
    <div className='cart'>
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
        <button>Process Payment</button>
      </section>
    </div>
  )
}

export default Cart;