import React from 'react'
import '../App.css'

const Card = ({item, setProducts, products}) => {

  const handleClick = () => {
    setProducts(products+1)
  }
  return (
    <div className='card'>
        <img src={item.image} alt="" />
        <h4>{item.title}</h4>
        <h5>{item.price}</h5>
        <button onClick={handleClick}>Add to Trolley</button>
    </div>
  )
}

export default Card