import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ItemDetailContainer = () => {
   const params = useParams() 
    const url = `https://fakestoreapi.com/products/${params.id}`
    const [data, setData] = useState({})
    const [cantidad, setCantidad] = useState(0)
    let price = parseInt(data.price)
    const product = ({
      title: data.title,
      price: data.price,
      image: data.image
    })
    
    const [total, setTotal] = useState(0)
    const carrito = localStorage.getItem('carrito')
    const restar = () => {
      if(cantidad <= 0 ) {
        setCantidad(0)
        setTotal(0)
      }else {
        setCantidad(cantidad -1)
        setTotal(total - price)
      }
    }
    const sumar = () => {
      
      setCantidad(cantidad + 1)
        setTotal(total + price)
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
        // console.log(`product ${product.title} agregado`);
        // console.log(cart);
    }
  return (
    <div className='detail'>
      <div className="product">
      {/* {data == null ? <Spinner/> : ""} */}
    <img src={data.image} className="card-img-top"/>
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.price} USD</p>
  </div>
  <div className='total'>
    <h4>Total : {total} usd</h4>
    <div className='count'>
    <button type="button" class="btn btn-outline-primary" onClick={restar}>-</button>
    <h5>{cantidad}</h5>
    <button type="button" class="btn btn-outline-primary" onClick={sumar}>+</button>
    </div>
    <div className='add'>
    <button type="button" class="btn btn-outline-primary" onClick={addCart}>Add to Cart</button>
    </div>
  </div>
  </div>
    )
  }

export default ItemDetailContainer