import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    const product = ({
      tile: data.title,
      price: data.price,
      image: data.image
    })
    
    const addCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || '[]')
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(`product ${product.title} agregado`);
        console.log(cart);
    }
  
  const handleClick = () => {
    setProducts(products+1)
  }
  
  return (
    // <div className='card'>
    //     <img src={data.image} alt="" />
    //     <Link to={'/item/'+data.id}><h4>{data.title}</h4></Link>
    //     <h5>{data.price} usd</h5>
    //     <Link to={'/item/'+data.id}><button>buy</button></Link>
    // </div>
    <div className="card">
    <img src={data.image} className="card-img-top"/>
    <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.price} USD</p>
    <button className="btn btn-primary">Buy</button>
  </div>
</div>

  )
}

export default Card