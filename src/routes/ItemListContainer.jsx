import React, { useState } from 'react'
import Card from '../components/Card'
import { Spinner } from 'reactstrap'
import ItemDetailCard from './ItemDetailCard'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { data } from 'jquery'
import { useContextGlobal } from '../components/utils/Context.context'
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer = () => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const [item, setItem] = useState()
  const {total, setTotal} = useContextGlobal()
  const [message, setMessage] = useState()
  
  useEffect(() => {
    if(cart == null || total == undefined) {
      setMessage('Su carrito se encuentra vacio')
      setTotal(0)
    }else {
      setMessage('')
    }
  })
  function onclick(){
    localStorage.clear()
  }
  return (
      <div className="card-grid">
        <div>
        <h3>{message}</h3>
        </div>
        {cart?.map((item) => <ItemDetailCard data={item}/>)}
        <div className='total'>
        <h5>Total: {total} USD</h5>
        <Link to='/payment'><button type="button" class="btn btn-primary">Pay</button></Link>
        <button type="button" class="btn btn-danger" onClick={onclick}>Vaciar carrito</button>
        </div>
      </div>
  )
}


export default ItemListContainer