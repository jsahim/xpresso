import './OrderCard.css'
import PropTypes from 'prop-types';

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

OrderCard.propTypes = {
  conf: PropTypes.string.isRequired,
  lineItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  payment: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};