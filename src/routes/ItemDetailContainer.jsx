import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ItemDetailContainer = () => {
   const params = useParams() 
    const url = `https://fakestoreapi.com/products/${params.id}`
    const [data, setData] = useState({})
    const [cantidad, setCantidad] = useState(1)

    const product = ({
      tile: data.title,
      price: data.price,
      image: data.image
    })
    
    
    const carrito = localStorage.getItem('carrito')
    const restar = () => {
      if(cantidad <= 0 ) {
        setCantidad(0)
      }else {
        setCantidad(cantidad -1)
      }
    }
    const sumar = () => {
      setCantidad(cantidad + 1)
    }
    useEffect(() => {
        axios(url).then(res => setData(res.data))
    })
    const addCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || '[]')
        
        for(let i = 0 ; i < cantidad ; i++) {
          cart.push(product)
          localStorage.setItem("cart", JSON.stringify(cart))
        }
        console.log(`product ${product.title} agregado`);
        console.log(cart);
    }
    
    
  return (
    <div className='product'>
        <h3>{data.title}</h3>
        <img src={data.image} alt=""/>
        <h4>{data.price} usd</h4>
        <button onClick={sumar}>+</button><span>{cantidad}</span><button onClick={restar}>-</button>
        <button onClick={addCart}>Add to cart</button>
    </div>
  )
}

export default ItemDetailContainer