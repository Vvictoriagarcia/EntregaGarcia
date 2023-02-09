import React from 'react'
import { useState } from 'react'
import { ContextGlobal, useContextGlobal } from '../components/utils/global.context'

const Pay = () => {
    const {total} = useContextGlobal()
    const [message, setMessage] = useState('You are one step away from making your purchase!')
    const onClick = () => {
        setMessage('Your purchase has been made successfully!')
        return <h4>{message}</h4>
    }
  return (
<div className='payment-form'>
    <div>
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Name" />
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="CVC"/>
                    </div>
                </div>
                <div class="col-12">
                    <div>
                    <button type="button" class="btn btn-primary" onClick={onClick}>Pay {total} USD</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
    <div className='message'>
            <h4>{message}</h4>
    </div>
</div> 
  )
}

export default Pay