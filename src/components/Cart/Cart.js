import './Cart.css'

function Cart(){
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
            <article/>
            <article/>
            <article/>
            <article/>
        <button>Process Payment</button>
      </section>
    </div>
  )
}

export default Cart;