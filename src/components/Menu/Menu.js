import './Menu.css'

function Menu(){
  return (
    <div className='menu hidden'>
      <section className="menu-options">
        <p>/menu</p>
        <h2>MENU</h2>
        <ul>
          <li>ALL</li>
          <li>HOT</li>
          <li>ICED</li>
        </ul>
      </section>
      <section className="type-container">
      </section>
    </div>
  )
}

export default Menu;