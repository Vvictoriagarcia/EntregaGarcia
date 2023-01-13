import React, { useState } from 'react'
import Card from '../components/Card'

const ItemListContainer = () => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const [item, setItem] = useState()
  return (
      <div className="card-grid">
        {cart.map((item) => <Card data={item}/>)}
      </div>
  )
}
//Intente hacer que si el carrito estaba vacio se 
//renderizara un mensaje que diga "Su carrito se encuentra vacio",
//pero no pude lograrlo.
//Cuando el carrito esta vacio, no se renderiza nada y se muestra un error en consola
//ya que no reconoce el 'cart.map'
//Si hay alguna manera de hacerlo y puedes mostrarme me serviria muchisimo
//Perdon las molestias y Muchas Gracias :D

export default ItemListContainer