import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/Card'
import { Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
const DetailCategory = () => {
    const params = useParams() 
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true)
    const url = `https://fakestoreapi.com/products/category/${params.name}`

    useEffect(() => {
      axios(url).then(res => setData(res.data))
    })

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1500)
  })
  return (
    <div className='card-grid'>
      {loading ? <Spinner color='primary'/> : data.map(item => <Card data={item}/>) }
      {/* {data.length == null ? <Spinner color='primary'/> : data.map(item => <Card data={item}/>)} */}
    </div>
  )
}

export default DetailCategory