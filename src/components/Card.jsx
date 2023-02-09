import React from 'react'
import '../App.css'
import { json, Link } from 'react-router-dom'
import { ContextGlobal, useContextGlobal } from './utils/Context.context'
import { Spinner } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)

const Card = ({data}) => {
  const {theme} = useContextGlobal()
    const product = ({
      tile: data.title,
      price: data.price,
      image: data.image
    })
    
    const addCart = async() => {
      const cart = JSON.parse(localStorage.getItem("cart") || '[]')
        cart.push(product)
        localStorage.setItem("cart", JSON.stringify(cart))
        let prod = JSON.stringify(product.tile)
        console.log(`product ${prod} agregado`);
        MySwal.fire({
          title: `Product: ${prod} added successfully to cart`,
          icon: 'success'
        })
    }
  
  const handleClick = () => {
    setProducts(products+1)
  }
  
  return (

    <div className="card">
    <img src={data.image} className="card-img-top"/>
    <Link to={'item/' + data.id }><h5 className="card-title">{data.title}</h5></Link>
    <p className="card-text">{data.price} USD</p>
    <button className={"btn btn-" + theme.className} onClick={addCart}>Buy</button>
</div>

  )
}

export default Card