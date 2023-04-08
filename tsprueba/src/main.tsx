import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles.css/main.css'
import Nav_bar from '../../axolotljs2/src/components/Nav_bar'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav_bar/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
