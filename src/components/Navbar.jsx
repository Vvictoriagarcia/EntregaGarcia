import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = ({products}) => {
  return (
    <div className='navbar'>
    <div>
      <h2><span>E</span>commerce</h2>
    </div>
    <div className='list'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/login'><li>Login</li> </Link>
        <Link to='/listContainer'><li>List Container</li></Link>
        <button><CartWidget products={products}/></button>
    </div>
    </div>
  )
}

export default Navbar