import React from 'react'
import Card from '../components/Card'

const Home = ({data, products, setProducts}) => {
  return (
    <div className='card-grid'>{data.map(item => <Card products={products} setProducts={setProducts} item={item} key={item.id}/>)}</div>
  )
}

export default Home