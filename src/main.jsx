import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './App.css'

// Se usa HashRouter para que las rutas funcionen en GitHub Pages
// (las URLs quedan como .../#/galeria y .../#/contacto)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
