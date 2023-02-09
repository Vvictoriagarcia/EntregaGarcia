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
import { ContextGlobal, useContextGlobal, initialState } from './components/utils/Context.context'
import ItemDetailContainer from './routes/ItemDetailContainer'
import DetailCategory from './routes/DetailCategory'
import Categories from './routes/Categories'
import Loading from './components/Loading'
import Pay from './routes/Pay'
import OutOfStock from './routes/OutOfStock'


function App() {
  const {data} = useContextGlobal()
  const {theme, setTheme} = useContextGlobal()
  const {total, setTotal} = useContextGlobal()

  const handleChangeTheme = () => {
    if(theme === initialState.themes.light) {
      setTheme(initialState.themes.dark)
    }else {
      setTheme(initialState.themes.light)
    }
  }

  const [products, setProducts] = useState(0)
  
  return (
    
    <div className={"App " + theme.className}>
      
      <ContextGlobal.Provider value={{theme, handleChangeTheme ,data, total, setTotal}}>
      
       <Navbar products={products} setProducts={setProducts}/>
          <Routes>
            <Route path='/' element={<Home products={products} setProducts={setProducts}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/listContainer' element={<ItemListContainer products={products}/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:name' element={<DetailCategory/>}/>
            <Route path='/payment' element={<Pay/>}/>
            <Route path='/outOfStock' element={<OutOfStock/>}/>
          </Routes>
        <Footer/>
        </ContextGlobal.Provider>
      </div>
  )
}

export default App
