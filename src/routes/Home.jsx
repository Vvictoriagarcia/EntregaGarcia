import React from 'react'
import Card from '../components/Card'
import { useContextGlobal } from '../components/utils/global.context'
import { Suspense } from 'react'
import Loading from '../components/Loading'
import { Spinner } from 'react-bootstrap'

const Home = ({ products, setProducts}) => {
  const {data} = useContextGlobal()
  return (
    <div className='card-grid'>
      {data == null ? <Spinner/> : ''}
      {data?.map(item => <Card products={products} setProducts={setProducts} data={item} key={item.id}/>)}
      </div>
  )
}

export default Home