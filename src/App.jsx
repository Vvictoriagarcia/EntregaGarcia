import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Login from './routes/Login'
import { Routes } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  
  const url = 'https://fakestoreapi.com/products'
  const [data, setData] = useState([{}])
  useEffect(() => {
    axios(url).then(res => setData(res.data))
  })
  const [products, setProducts] = useState(0)

  return (
    <div className="App">
       <Navbar products={products} setProducts={setProducts}/>
          <Routes>
            <Route path='/' element={<Home data={data} products={products} setProducts={setProducts}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/listContainer' element={<ItemListContainer products={products}/>}/>
          </Routes>
        <Footer/>
      </div>
  )
}

export default App
