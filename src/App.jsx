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
import ItemListContainer from './routes/ItemListContainer'
import Product from './routes/ItemDetailContainer'
import { ContextGlobal, useContextGlobal } from './components/utils/global.context'
import ItemDetailContainer from './routes/ItemDetailContainer'
import DetailCategory from './routes/DetailCategory'
import Categories from './routes/Categories'

function App() {
  const {data} = useContextGlobal()
  const url = 'https://fakestoreapi.com/products'
  //const [data, setData] = useState([{}])
  // useEffect(() => {
  //   axios(url).then(res => setData(res.data))
  // })
  const [products, setProducts] = useState(0)

  return (
    <div className="App">
      <ContextGlobal.Provider value={{data}}>
       <Navbar products={products} setProducts={setProducts}/>
          <Routes>
            <Route path='/' element={<Home products={products} setProducts={setProducts}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/listContainer' element={<ItemListContainer products={products}/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            {/* <Route path='/category' element={<Categories/>}> */}
              <Route path='/category/:name' element={<DetailCategory/>}/>
            {/* </Route> */}
            
          </Routes>
        <Footer/>
        </ContextGlobal.Provider>
      </div>
  )
}

export default App
