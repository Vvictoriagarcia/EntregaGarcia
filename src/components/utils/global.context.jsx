import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState, useParams } from "react";
import axios from "axios";
import {collection, getDocs, where, query, getFirestore, doc, getDoc} from 'firebase/firestore'
import { db } from '../../services/firebase'


export const initialState = {themes: {
  light: {
    className : "light"
  },
  dark : {
    className : "dark"
  }
}
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState()
  const [outOfStock, setOutOfStock] = useState()
  const [theme, setTheme] = useState(initialState.themes.light)
  const url ='https://fakestoreapi.com/products'
    const bringData = () => {
        axios(url).then(res => {
            setData(res.data)
        })
    }
    bringData()
      
  const cart = JSON.parse(localStorage.getItem('cart'))
  const [total, setTotal] = useState()

  useEffect(() => {
    let acc = 0
    if(cart == null) {
      return
    }else {
      cart.forEach(item => {
        acc += parseInt(item.price)
      })
      setTotal(acc);
    }
    
  })
    
    
    return (
        <ContextGlobal.Provider value={{
          theme,
          setTheme,
          data,
          total,
          setTotal
        }}>
          {children}
        </ContextGlobal.Provider>
      );
    };
     export const useContextGlobal = () => {
      return useContext(ContextGlobal)
     }

