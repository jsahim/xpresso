import './Profile.css'

function Profile({user}){
  return (<div className='profile'>
            <h2>ACCOUNT</h2>
            <section className="account-details">
              <h3>USER</h3>
              <p>Name:<span>{user.firstName} {user.lastName}</span></p>
              <p>DOB:<span>{user.dob}</span></p>
              <p>Email:<span>{user.email}</span></p>
              <p>Phone:<span>{user.phone}</span></p>
            </section>
            <section className="account-details">
              <h3>SHIPPING</h3>
              <p>Street Name:<span>{user.street}</span></p>
              <p>City:<span>{user.city}</span></p>
              <p>State:<span>{user.state}</span></p>
              <p>Zip Code:<span>{user.zip}</span></p>
            </section>
            <section className="account-details">
            <h3>PAYMENT</h3>
              <p>Payment Method:<span>{user.ccType}</span></p>
              <p>Card Number:<span>{user.ccNum}</span></p>
              <p>Expiration:<span>{user.ccExp}</span></p>
            </section>
          </div>)
}

export default Profile;