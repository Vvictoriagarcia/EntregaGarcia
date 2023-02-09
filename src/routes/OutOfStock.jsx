import React from 'react'
import {collection, getDocs, getFirestore, doc, getDoc} from 'firebase/firestore'
import {db} from '../services/firebase'
import { useState} from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import OutOfStockCard from '../components/OutOfStockCard'

const OutOfStock = () => {
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true)
      const getData = async() =>{
        const queryRef = collection(db, "2")
        const response = await getDocs(queryRef)
        const docsInfo = response.docs.map((product) => {
          const products = {
          id : product.id,
          ...product.data()
          }
          return products
        })
        setData(docsInfo)
      }
      getData()

      useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1500)})

  return (
    <div className='card-grid'>
      {loading ? <Spinner color='primary'/> : data?.map((product) => <OutOfStockCard data={product} key={data.id}/>)}
    </div>
  )
}

export default OutOfStock