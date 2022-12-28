import React, { useState } from 'react'

const Trolley = ({products}) => {
  
  return (
    <div className='cart'>
      <h3>Cart : {products}</h3>
    </div>
  )
}

export default Trolley