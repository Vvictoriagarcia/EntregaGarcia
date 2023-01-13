import React from 'react'
import Card from '../components/Card'
import { useContextGlobal } from '../components/utils/global.context'

const Home = ({ products, setProducts}) => {
  const {data} = useContextGlobal()
  return (
    <div className='card-grid'>
      {data?.map(item => <Card products={products} setProducts={setProducts} data={item} key={item.id}/>)}
      </div>
  )
}

export default Home