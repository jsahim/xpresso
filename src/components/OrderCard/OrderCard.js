import './OrderCard.css'

function OrderCard({conf, lineItems, total}){
  const orderNum = conf.toString()
  const time = Date.now()
  const timeStamp = new Date(time).toString()

  return (
    <div className='order-card'>
      <p>Order# {orderNum}</p>
      <p>PLACED: {timeStamp}</p>
      <div>ITEMS: {lineItems}</div>
      <p>TOTAL: {total}</p>
    </div>
  )
}

export default OrderCard;