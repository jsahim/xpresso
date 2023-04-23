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
      <img className="display-banner" src="https://user-images.githubusercontent.com/107663888/233806049-114968f2-1f59-4300-baf3-595ad710b5dc.png" />
      <h2>Previous Orders</h2>
      <section className="orders-container">
        {!orders.length && <p className='no-orders'>No orders have been placed yet.</p>}
        {allOrders}
      </section>
    </div>
  )
}

export default Home;