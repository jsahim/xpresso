import OrderCard from '../OrderCard/OrderCard';
import './Home.css'

function Home({orders}){
  const allOrders = orders.map(order => {
  return <OrderCard 
          conf={order.orderCode} 
          lineItems={order.lineItems} 
          payment={order.payment} 
          total={order.total} 
          timeStamp={order.timeStamp}/>
})

  return (
    <div className='home'>
      <section className="display-banner">
      </section>
      <h2>Previous Orders</h2>
      <section className="orders-container">
        {!orders.length && <p className='no-orders'>No orders have been placed yet.</p>}
        {allOrders}
      </section>
    </div>
  )
}

export default Home;