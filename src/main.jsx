import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ContextProvider } from './components/utils/Context.context'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </BrowserRouter> 
  </React.StrictMode>
)
