import OrderCard from '../OrderCard/OrderCard';
import './Home.css'

function Home({orders}){
  console.log(orders)
  const allOrders = orders.map(order => <OrderCard conf={order.conf} lineItems={order.lineItems} total={order.total} />)

  return (
    <div className='home'>
      <section className="display-banner">
        <h3>REPLACE WITH SOME BANNER STUFF</h3>
      </section>
      <h2>Previous Orders</h2>
      <section className="orders-container">
        {!orders.length && <p>NO ORDERS</p>}
        {allOrders}
      </section>
    </div>
  )
}

export default Home;