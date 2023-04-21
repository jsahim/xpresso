import './OrderCard.css'

function OrderCard({conf, lineItems, total, payment, timeStamp}){
  const orderNum = conf.toString()
  const newTotal = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className='order-card'>
      <div className='order-content'>
        <p>ORDER: {orderNum}</p>
        <p>{timeStamp}</p>
        <div>ITEMS: {lineItems}</div>
        <p>PAYMENT: {payment}</p>
        <p>TOTAL: {newTotal}</p>
      </div>
    </div>
  )
}

export default OrderCard;