import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { ContextGlobal, useContextGlobal } from './utils/Context.context'
import { Spinner } from 'react-bootstrap'

const OutOfStockCard = ({data}) => {
  const {theme} = useContextGlobal()
  return (
    
    <div className="card">
    <img src={data.img} alt="" className="card-img-top"/>
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.price} USD</p>
    <button className="btn btn-danger">Out of Stock</button>
</div>

  )
}

export default OutOfStockCard