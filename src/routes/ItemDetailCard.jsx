import React from 'react'
import { Spinner } from 'react-bootstrap'

const ItemDetailCart = ({data}) => {
  return (
        <div className="card">
            {data == null ? <Spinner/> : ""}
            <img src={data.image} className="card-img-top"/>
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.price} USD</p>
    </div>
  )
}

export default ItemDetailCart