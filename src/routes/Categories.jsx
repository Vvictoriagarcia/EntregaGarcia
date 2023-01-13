import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div>
        <ul>
            <Link to='category/electronics'><li>Electronics</li></Link>
            <Link to='category/jewerly'><li>Jewerly</li></Link>
            <Link to="category/men's clothing"><li>Men's Clothing</li></Link>
            <Link to="category/women's clothing"><li>Women's Clothing</li></Link>
        </ul>
    </div>
  )
}
//NO PUDE HACERLO ANDAR CORRECTAMENTE
export default Categories