import './OrderCard.css'

function OrderCard({conf, lineItems, total}){

  return (
    <div className='order-card'>
      <p>{conf.toString()}</p>
      <p>{new Date(conf).toString()}</p>
      <div>{lineItems}</div>
      <p>{total}</p>
    </div>
  )
}

export default OrderCard;