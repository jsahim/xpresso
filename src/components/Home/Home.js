import OrderCard from '../OrderCard/OrderCard';
import PropTypes from 'prop-types';
import './Home.css'

function Home({orders}){
  const allOrders = orders.map(order => {
  return <OrderCard
          key={Math.random()} 
          conf={order.orderCode} 
          lineItems={order.lineItems} 
          payment={order.payment} 
          total={order.total} 
          timeStamp={order.timeStamp}/>
})

  return (
    <div className='home'>
      <img className="display-banner" src="https://user-images.githubusercontent.com/107663888/233806003-05bb5040-6bd2-4f9d-b54e-50cd8ccef0f7.png" alt="home banner" />
      <h2>Previous Orders</h2>
      <section className="orders-container">
        {!orders.length && <p className='no-orders'>No orders have been placed yet.</p>}
        {allOrders}
      </section>
    </div>
  )
}

export default Home;


Home.propTypes = {
  orders: PropTypes.array.isRequired,
};