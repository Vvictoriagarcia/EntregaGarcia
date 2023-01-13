import React, { useState, useEffect } from 'react'
import { useContextGlobal } from '../components/utils/global.context'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'
const DetailCategory = () => {
    const params = useParams() 
    const [data, setData] = useState([{}])
    const url = `https://fakestoreapi.com/products/category/${params.name}`
    useEffect(() => {
      axios(url).then(res => setData(res.data))
  })
  return (
    <div className='card-grid'>
        {data?.map(item => <Card data={item}/>)}
    </div>
  )
}

export default DetailCategory