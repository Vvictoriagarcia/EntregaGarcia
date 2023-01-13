import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'




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
          {/* <Link to='/category'><li>Categorys</li></Link> */}
          <Link to='category/electronics'><li>Electronics</li></Link>
          <Link to='category/jewelery'><li>Jewerly</li></Link>
          <Link to="category/men's%20clothing"><li>Men's Clothing</li></Link>
          <Link to="category/women's%20clothing"><li>Women's Clothing</li></Link>
          <Link to='/listContainer'><li><button><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button></li></Link>
      </div>
    </div>
  )
}

export default Navbar