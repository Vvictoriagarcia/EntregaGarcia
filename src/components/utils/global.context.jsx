import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";


export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState()
  const url ='https://fakestoreapi.com/products'

    const bringData = () => {
        axios(url).then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }
    
    bringData()
    return (
        <ContextGlobal.Provider value={{
          data
        }}>
          {children}
        </ContextGlobal.Provider>
      );
    };
     export const useContextGlobal = () => {
      return useContext(ContextGlobal)
     }

