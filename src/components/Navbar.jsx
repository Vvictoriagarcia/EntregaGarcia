import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import { DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { ContextGlobal, useContextGlobal } from './utils/global.context'




const Navbar = ({products}) => {

  const {theme, handleChangeTheme} = useContextGlobal(ContextGlobal)

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={"navbar-nav me-auto mb-2 mb-lg-0" + theme.className}>
          <li className={"nav-item" + theme.className}>
              <h3><span>E</span>commerce</h3>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact'>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to='/login' className='nav-link'>Login</Link>
            </li>
            <li className="nav-item">
              <Link to='/outOfStock' className='nav-link'>Out of Stock</Link>
            </li>
            <li className='nav-item'>
              <Link to='/listContainer' className='nav-link'><button className={'btn btn-' + theme.className}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button></Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'><button className={'btn btn-' + theme.className}  onClick={handleChangeTheme}><FontAwesomeIcon icon={faMoon} ></FontAwesomeIcon></button></Link>
            </li>
            </ul>
            </div>
            <div className="dropdown">
            <button type="button" className="btn btn-primary">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link to='category/electronics'>Electronics</Link></li>
              <li><Link to='category/jewelery'>Jewelery</Link> </li>
              <li><Link to="category/men's%20clothing">Men's Clothing</Link></li>
              <li><Link to="category/women's%20clothing">Women's Clothing</Link></li>
              </ul>
            </button>
            
          
        </div>
      </div>
</div>

  )
}


export default Navbar